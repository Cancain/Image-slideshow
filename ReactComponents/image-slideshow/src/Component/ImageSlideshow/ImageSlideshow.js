import React, { useState } from "react";
import classes from "./ImageSlideshow.module.css";

const ImageSlideshow = props => {
  const [imageIndex, setImageIndex] = useState(0);

  const height = parseInt(props.size) * props.ratio;

  const style = {
    width: props.size ? props.size : "fitContent",
    height: props.size ? height + "px" : "fitContent",
    backgroundColor: props.backgroundColor,
    color: props.color
  };

  const circleStyle = {
    margin: "auto",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    border: "4px solid " + props.color,
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.7)",
    cursor: "pointer"
  };

  const circleSelected = {
    backgroundColor: props.color,
    margin: "auto",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    border: "4px solid " + props.color,
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.7)"
  };

  const gotoImage = index => {
    setImageIndex(index);
  };

  let circles = [];
  props.images.forEach((image, index) => {
    circles.push(
      <div key={image} onClick={() => gotoImage(index)} style={circleStyle} />
    );
  });

  circles[imageIndex] = <div key="selected" style={circleSelected} />;

  const nextImage = () => {
    if (imageIndex < props.images.length - 1) incrementImageIndex();
  };

  const previousImage = () => {
    if (imageIndex > 0) decrementImageIndex();
  };

  const incrementImageIndex = () => {
    setImageIndex(imageIndex + 1);
  };

  const decrementImageIndex = () => {
    setImageIndex(imageIndex - 1);
  };

  let leftArrow = null;
  if (imageIndex > 0) {
    leftArrow = (
      <div onClick={previousImage} className={classes.arrowLeft}>
        <p>{"<"}</p>
      </div>
    );
  }

  let rightArrow = null;
  if (imageIndex <= imageIndex + 1) {
    rightArrow = (
      <div className={classes.arrowRight} onClick={nextImage}>
        <p>{">"}</p>
      </div>
    );
  }

  return (
    <div style={style} className={classes.ImageSlideshow}>
      <div className={classes.circles}>{circles}</div>
      {leftArrow}
      <img src={props.images[imageIndex]} alt="" />
      {rightArrow}
    </div>
  );
};

export default ImageSlideshow;
