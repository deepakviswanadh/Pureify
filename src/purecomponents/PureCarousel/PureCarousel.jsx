import React from "react";
import classes from "./PureCarousel.module.css";
import CarouselComponent from "./CarouselComponent";

const PureCarousel = () => {
  const data = [
    { id: 1, src: "", alt: "", zi: -1 },
    { id: 2, src: "", alt: "", zi: 0 },
    { id: 3, src: "", alt: "", zi: 1 },
  ];

  return (
    <div className={classes.main_container}>
      <div className={classes.carouselWrapper}>
        {data.map((each) => (
          <CarouselComponent info={each} key={each.id} />
        ))}
      </div>

      <div className={`${classes.dot_container} ${classes.center}`}>
        <h2>dots here please</h2>
      </div>
    </div>
  );
};

export default PureCarousel;
