import React from "react";

const CarouselHandler = ({ type, triggerChange }) => {
  return (
    <div
      onClick={() => {
        triggerChange(type == ">");
      }}
    >
      {type}
    </div>
  );
};

export default CarouselHandler;
