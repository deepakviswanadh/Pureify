import React from "react";
import classes from "./CarouselComponent.module.css";
import CarouselHandler from "./CarouselHandlers";

const CarouselComponent = ({ info: { id, src, alt, zi }, triggerChange }) => {
  return (
    <>
      <div className={`${classes.place_header} ${classes.center}`}>
        {"Title is here"}
      </div>
      <div
        className={`${classes.carouselItem} ${classes.center}`}
        style={{ zIndex: zi }}
      >
        {id}
      </div>
      <div className={`${classes.greater_than} ${classes.center}`}>
        <CarouselHandler type={">"} triggerChange={triggerChange} />
      </div>
      <div className={`${classes.less_than} ${classes.center}`}>
        <CarouselHandler type={"<"} triggerChange={triggerChange} />
      </div>
    </>
  );
};

export default CarouselComponent;
