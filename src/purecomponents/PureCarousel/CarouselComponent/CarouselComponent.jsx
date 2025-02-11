import React from "react";
import classes from "./CarouselComponent.module.css";

const CarouselComponent = ({ info: { id, src, alt, zi, content, color } }) => {
  return (
    <>
      <div
        className={`${classes.carouselItem} ${classes.center}`}
        style={{ zIndex: zi, backgroundColor: color }}
      >
        {content}
      </div>
    </>
  );
};

export default CarouselComponent;
