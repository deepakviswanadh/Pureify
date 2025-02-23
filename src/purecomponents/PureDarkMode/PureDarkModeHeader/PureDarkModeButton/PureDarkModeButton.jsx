import React, { useState, useEffect } from "react";

const PureDarkModeButton = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", "light");
    return () => document.querySelector("body").removeAttribute("data-theme");
  }, []);

  const handleToggle = (event) => {
    setToggle((prev) => {
      document
        .querySelector("body")
        .setAttribute("data-theme", !prev ? "dark" : "light");
      return !prev;
    });
  };

  return (
    <button
      onClick={(event) => {
        handleToggle(event);
      }}
    >
      {`Dark mode is ${!toggle ? "off" : "on"}`}
    </button>
  );
};

export default PureDarkModeButton;
