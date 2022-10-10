import React, { useState, useCallback } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';
import { useDropzone } from 'react-dropzone'

function App() {
  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    // console.log(acceptedFiles)

    if(acceptedFiles.length){
      for(const file of acceptedFiles) {
        console.log(file.name)

        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = (event) => {
          setImageList(prev => [...prev, event.target?.result as string])
        }
      }
    }
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const removeFile = (file: any) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const newFiles = [...imageList]
      newFiles.splice(newFiles.indexOf(file.name), 1)
      setImageList(newFiles)
    }
  }

  return (
    <div className="container">
        <div className={'gallery--box ' + (imageList.length > 0 && 'true')}>
          <input type="file" {...getInputProps()} />
          <div className="plus--btn" {...getRootProps()}>+</div>
          { imageList.length === 0 &&
            <div className="no--case">
              <span className="title">이미지가 없습니다.</span><br />
              <span className="text">이미지를 추가해주세요.</span>
            </div>
          }
        </div>
        {
          imageList.map((el, idx)=>
            <div key={el + idx} className="gallery--list">
              <ImageBox src={el} alt="" />
              <div className="minus--btn" onClick={()=>removeFile(el)}>-</div>
            </div>
          )
        }
    </div>
  );
}

export default App;
