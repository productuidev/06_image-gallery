import React, { useRef, useState, useCallback } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';
import { useDropzone } from 'react-dropzone'

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles)

    if(acceptedFiles.length){
      for(const file of acceptedFiles) {
        // console.log(file.name)

        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = (event) => {
          setImageList(prev => [...prev, event.target?.result as string])
        }
      }
    }

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  console.log(imageList)

  return (
    <div className="container">
        <div className={'gallery--box ' + (imageList.length > 0 && 'true')}>
          <input type="file"
            // ref={inputRef}
            {...getInputProps()}
          />
          <div className="plus--btn"
            {...getRootProps()}
            // onClick={()=>{
            //   console.log("hello")
            //   inputRef.current?.click()
            // }}
          >
            +
          </div>

          {/* 방법 1 : 삼항연산자 */}
          {/* <div className={imageList.length === 0 ? '' : 'no--case'}>
            이미지가 없습니다.<br />이미지를 추가해주세요.
          </div> */}

          {/* 방법 2 : 자바스크립트 속성 활용
            true && true // true
            true && 1 // 1
            true && 0 // 0
            true && 0 && 1 // 0
          */}
          { imageList.length === 0 &&
            <div className="no--case">
              <span className="title">이미지가 없습니다.</span><br />
              <span className="text">이미지를 추가해주세요.</span>
            </div>
          }
        </div>

        {/* <ImageBox src="hello" />
        <ImageBox src="hello" />
        <ImageBox src="hello" />
        <ImageBox src="hello" /> */}

        {
          imageList.map((el, idx)=><ImageBox key={el + idx} src={el} alt={el} />)
        }
    </div>
  );
}

export default App;
