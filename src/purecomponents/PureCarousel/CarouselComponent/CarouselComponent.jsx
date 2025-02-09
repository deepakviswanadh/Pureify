import React from "react";
import classes from "./CarouselComponent.module.css";

const CarouselComponent = ({ info: { id, src, alt, zi } }) => {
  return (
    <div
      className={classes.carouselItem}
      style={{ zIndex: zi, position: "absolute", top: 0, left: 0 }}
    >
      {id}
    </div>
  );
};

export default CarouselComponent;
