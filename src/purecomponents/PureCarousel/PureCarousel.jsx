import React, { useState } from "react";
import classes from "./PureCarousel.module.css";
import CarouselComponent from "./CarouselComponent";

const PureCarousel = () => {
  const [data, setData] = useState([
    { id: 1, src: "", alt: "", zi: -1 },
    { id: 2, src: "", alt: "", zi: 0 },
    { id: 3, src: "", alt: "", zi: 1 },
  ]);

  const triggerChange = (flag) => {
    const result = [
      ...data.map(({ ...each }) => {
        let zi = each.zi;
        zi = flag ? ++zi : --zi;
        if (zi > data.length / 2) {
          zi = Math.ceil(-data.length / 2);
        } else if (zi < -data.length / 2) {
          zi = Math.floor(data.length / 2);
        }
        each.zi = zi;
        return each;
      }),
    ];
    setData(() => [...result]);
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.carouselWrapper}>
        {data.map((each) => (
          <CarouselComponent
            info={each}
            key={each.id}
            triggerChange={triggerChange}
          />
        ))}
      </div>

      <div className={`${classes.dot_container} ${classes.center}`}>
        <h2>dots here please</h2>
      </div>
    </div>
  );
};

export default PureCarousel;
