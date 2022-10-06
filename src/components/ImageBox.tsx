function ImageBox(props:{
  src: string;
  alt: string;
}) {
  return (
    <div className="gallery--box">
      <img src={props.src} alt="" />
    </div>
  )
}

export default ImageBox;