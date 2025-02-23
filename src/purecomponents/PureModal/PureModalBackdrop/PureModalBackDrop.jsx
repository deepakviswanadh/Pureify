import React from "react";
import classes from "./PureModalBackdrop.module.css";

const PureModalBackDrop = ({ open, setOpen }) => {
  const triggerClosure = (event) => {
    const contentContainer = document.querySelector("#modal-content");
    if (!event.target.contains(contentContainer)) {
      setOpen();
    }
  };

  return (
    <div
      id="backdrop-container"
      onClick={(event) => {
        triggerClosure(event);
      }}
      className={classes.modal_backdrop_container}
    />
  );
};

export default PureModalBackDrop;
