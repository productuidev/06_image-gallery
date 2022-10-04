// import React, { useRef } from 'react';

function ImageBox(props:{
  src: string;
  alt: string;
}) {
  // const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="gallery--box">
      <button className="minus--btn"
        onClick={()=>{
          // console.log("delete")
          // inputRef.current?.click()
        }}
      >
        -
      </button>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default ImageBox;