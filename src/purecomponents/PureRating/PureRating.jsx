import React, { useLayoutEffect, useState } from "react";

const PureRating = ({ count }) => {
  const [starData, setStarData] = useState([]);
  const [rated, setRated] = useState({});

  useLayoutEffect(() => {
    let result = [];
    for (let eachNumber = 0; eachNumber < count; eachNumber++) {
      result.push({ id: eachNumber, rated: false });
    }
    setStarData([...result]);
  }, [count]);

  const handleMouseMove = (e, starId) => {
    const starElement = e.currentTarget;
    const starCenterX =
      starElement.getBoundingClientRect().left +
      starElement.getBoundingClientRect().width / 2;
    //when we are moving over a star, from left to right
    //eventually the event will cross the center and
    //which means we can go ahead and color the star

    //similarly when the event is before the center of the star
    //which means we will go ahead and uncolor the star
    const colorTheStar = e.clientX >= starCenterX;
    setRated({ ...rated, [starId]: colorTheStar });
  };

  const generateAStar = (each) => {
    return (
      <span
        key={each.id}
        onMouseMove={(e) => handleMouseMove(e, each.id)}
        style={{
          color: rated[each.id] ? "green" : "red",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        &#9733;
      </span>
    );
  };

  return (
    <div>
      {starData.map((each) => {
        return generateAStar(each);
      })}
      <div>{`${
        Object.values(rated).filter((each) => !!each).length
      } star(s) selected`}</div>
    </div>
  );
};

export default PureRating;
