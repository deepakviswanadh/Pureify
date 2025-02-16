import React from "react";
import classes from "./PureDarkModeBody.module.css";

const PureDarkModeBody = () => {
  const loremText = Array(35)
    .fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    .join(" ");

  return (
    <div className={classes.main_container}>
      <h1>Main Heading</h1>
      <h2>Sub Heading</h2>
      <h3>Another Heading</h3>
      <p>
        <strong>Bold Text</strong> and <em>Italic Text</em>
      </p>
      <blockquote>"This is a sample blockquote."</blockquote>
      <button>Click Me</button>
      <a href="#">Sample Link</a>

      <input value={"type here"} />
      <input type="radio" />
      <input type="checkbox" />

      <textarea placeholder="Type something..."></textarea>
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>

      <p>{loremText}</p>
    </div>
  );
};

export default PureDarkModeBody;
