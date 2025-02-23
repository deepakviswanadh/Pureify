import React, { useState } from "react";
import PureModalContainer from "./PureModalContainer";
import PureModalBackDrop from "./PureModalBackdrop";

const PureModal = () => {
  const [open, setOpen] = useState(false);
  const triggerModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      {open && (
        //e span ki position absolute set cheyali
        <span style={{ position: "absolute" }}>
          <PureModalContainer />
          <PureModalBackDrop open={open} setOpen={setOpen} />
        </span>
      )}
      <button onClick={() => triggerModal()}>Trigger modal</button>
    </div>
  );
};

export default PureModal;
