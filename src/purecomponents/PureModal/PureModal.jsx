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
        <span style={{ position: "absolute" }}>
          <PureModalContainer type={"decision"} setOpen={setOpen} />
          <PureModalBackDrop open={open} setOpen={setOpen} />
        </span>
      )}
      {/* //some action in redux will trigger this modal, modal has to be
      //placed in the root of the container where it can be controlled
      //modal state etc can be moved to redux */}
      <button onClick={() => triggerModal()}>Trigger modal</button>
    </div>
  );
};

export default PureModal;
