import React, { useCallback, useState } from "react";
import PureCountDownTimer from "./PureCountDownTimer";

const PureCountDown = () => {
  const [startTimer, setStartTimer] = useState(false);

  const startCountDown = useCallback((event) => {
    setStartTimer((prev) => !prev);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5rem",
        gap: "2rem",
      }}
    >
      <PureCountDownTimer
        startTimer={startTimer}
        startCountDown={startCountDown}
      />
      <button
        style={{
          height: "8vh",
          fontSize: "2rem",
          borderRadius: "10px",
        }}
        onClick={(event) => startCountDown(event)}
      >
        start countdown
      </button>
    </div>
  );
};

export default PureCountDown;
