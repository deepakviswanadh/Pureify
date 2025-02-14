import React, { useState, useEffect, useRef, useCallback } from "react";
import classes from "./PureCountDownTimer.module.css";

const PureCountDownTimer = ({ startTimer, startCountDown }) => {
  const [data, setData] = useState({ hh: "00", mm: "00", ss: "00" });

  const validateEnd = useCallback(() => {
    return +data["hh"] == 0 && +data["ss"] == 0 && +data["mm"] == 0;
  }, [data]);

  const ref = useRef(null);
  const validateEndRef = useRef(validateEnd);
  const startCountDownRef = useRef(startCountDown);

  const onTextChange = (event, name) => {
    setData((prev) => {
      return { ...prev, [name]: event.target.value };
    });
  };

  const triggerCountDown = () => {
    setData((prev) => {
      let hh = +prev.hh || 0;
      let mm = +prev.mm || 0;
      let ss = +prev.ss || 0;
      if (ss === 0) {
        if (mm === 0) {
          if (hh === 0) {
            return { hh: "00", mm: "00", ss: "00" };
          } else {
            hh = hh - 1;
            mm = 59;
            ss = 59;
          }
        } else {
          mm = mm - 1;
          ss = 59;
        }
      } else {
        ss = ss - 1;
      }

      return {
        ...prev,
        hh,
        mm,
        ss,
      };
    });
  };

  useEffect(() => {
    validateEndRef.current = validateEnd;
    startCountDownRef.current = startCountDown;

    return () => {
      triggerCleanUp();
    };
  }, [validateEnd, startCountDown]);

  useEffect(() => {
    if (startTimer) {
      ref.current = setInterval(() => {
        if (validateEndRef.current()) {
          alert("done ");
          triggerCleanUp();
          startCountDownRef.current();
          return;
        } else {
          triggerCountDown();
        }
      }, 900);
    } else {
      triggerCleanUp();
    }
    return () => {
      triggerCleanUp();
    };
  }, [startTimer]);

  const triggerCleanUp = () => {
    clearInterval(ref.current);
    ref.current = null;
    startCountDownRef.ref = null;
    validateEndRef.current = null;
  };

  return (
    <>
      <div className={`${classes.main_container} ${classes.center}`}>
        {[
          ...Object.keys(data).map((each) => {
            return (
              <div
                className={`${classes.inner_time} ${classes.center}`}
                key={each}
              >
                <input
                  className={` ${classes.text_elements}`}
                  type="text"
                  name={each}
                  value={data[each]}
                  onChange={(event) => onTextChange(event, each)}
                />
              </div>
            );
          }),
        ]}
      </div>
    </>
  );
};

export default PureCountDownTimer;
