import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import classes from "./InnerBar.module.css";
//the shrinking needs to happens along only 1 direction, currently
//it is shrinking bi-directionally --fixed (this is because, parent has flex, centering)

const InnerBar = () => {
  const ref = useRef(null);
  const validateRef = useRef(null);
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
    setWidth(document.querySelector("#parent")?.clientWidth);
  }, []);

  const reduceWidth = () => {
    setWidth((prev) => prev - 0.25);
  };
  const validateWidth = useCallback(() => width == 0, [width]);

  useEffect(() => {
    validateRef.current = validateWidth;
    return () => (validateRef.current = null);
  }, [validateWidth]);

  useEffect(() => {
    ref.current = setInterval(() => {
      if (validateRef.current()) {
        cleanUp();
        return;
      } else {
        reduceWidth();
      }
    }, 5);
    return () => cleanUp();
  }, []);

  const cleanUp = () => {
    clearInterval(ref.current);
    ref.current = null;
    validateRef.current = null;
  };

  return (
    <div
      style={{
        width: width,
        backgroundColor: "red",
        height: "inherit",
      }}
    >
      {""}
    </div>
  );
};

export default InnerBar;
