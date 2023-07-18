import React from "react";

import classes from "./Button.module.css";

//despite using React.memo in DemoOutput.js, the Button component will still re-render when the parent component re-renders
//this is because the Button component is not a functional component, it is a regular component
const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
