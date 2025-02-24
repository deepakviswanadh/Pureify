import React from "react";
import classes from "./PureModalContainer.module.css";
import AlertBox from "./types/AlertBox";
import DecisionBox from "./types/DecisionBox";

//the user should be given either types or they can pass their own
//component here
const PureModalContainer = ({ type, setOpen }) => {
  return (
    <div
      id="modal-content"
      onClick={() => {}}
      className={classes.modal_content_container}
    >
      {type == "alert" ? <AlertBox /> : <DecisionBox setOpen={setOpen} />}
    </div>
  );
};

export default PureModalContainer;
