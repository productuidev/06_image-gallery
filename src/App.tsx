import React, { useRef, useState } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([]);

  console.log(imageList)

  return (
    <div className="container">
        <div className="initial--box">
          <div className="text--center">
            이미지가 없습니다.<br />이미지를 추가해주세요.
          </div>
          <input type="file" ref={inputRef}
            onChange={(event)=>{
              console.log("hello")
              console.log(event.currentTarget.value)

              // setImageList(prev => [...prev, event.currentTarget.value])
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
    </div>
  );
}

export default App;
