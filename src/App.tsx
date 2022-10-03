import React, { useRef, useState } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([]);

  console.log(imageList)

  return (
    <div className="container">
        <div className={'gallery--box ' + (imageList.length > 0 && 'row')}>
          {/* 방법 1 : 삼항연산자 */}
          {/* <div className={imageList.length === 0 ? '' : 'text--center'}>
            이미지가 없습니다.<br />이미지를 추가해주세요.
          </div> */}

          {/* 방법 2 : 자바스크립트 속성 활용
            true && true // true
            true && 1 // 1
            true && 0 // 0
            true && 0 && 1 // 0
          */}
          { imageList.length === 0 &&
            <div className="text--center">
              이미지가 없습니다.<br />이미지를 추가해주세요.
            </div>
          }

          <input type="file" ref={inputRef}
            onChange={(event)=>{
              // console.log("hello")
              // console.log(event.currentTarget.value)

              if(event.currentTarget.files?.[0]){
                const file = event.currentTarget.files[0];
                console.log(file.name)

                const reader = new FileReader();
                reader.readAsDataURL(file)
                reader.onloadend = (event) => {
                  setImageList(prev => [...prev, event.target?.result as string])
                }

                // setImageList(prev => [...prev, v])
              }
            }}
          />
          <div
              className="plus--box"
              onClick={()=>{
              inputRef.current?.click()
            }}
          >
            +
          </div>
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
