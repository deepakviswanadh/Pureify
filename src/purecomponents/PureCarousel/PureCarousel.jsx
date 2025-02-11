import React, { useState } from "react";
import classes from "./PureCarousel.module.css";
import CarouselComponent from "./CarouselComponent";
import CarouselHandler from "./CarouselComponent/CarouselHandlers";

const PureCarousel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      src: "",
      alt: "",
      zi: -1,
      content: "slide1",
      color: "lightYellow",
    },
    { id: 2, src: "", alt: "", zi: 0, content: "slide2", color: "lightPink" },
    { id: 3, src: "", alt: "", zi: 1, content: "slide3", color: "lightGrey" },
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
          <CarouselComponent info={each} key={each.id} />
        ))}
      </div>

      <div className={`${classes.greater_than} ${classes.center}`}>
        <CarouselHandler type={">"} triggerChange={triggerChange} />
      </div>

      <div className={`${classes.less_than} ${classes.center}`}>
        <CarouselHandler type={"<"} triggerChange={triggerChange} />
      </div>

      <div className={`${classes.dot_container} ${classes.center}`}>
        <h3>dots here please</h3>
      </div>
    </div>
  );
};

export default PureCarousel;
