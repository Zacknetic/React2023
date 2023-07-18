import classes from "./Input.module.css";
import React from "react";

// This is a custom component that wraps the <input> element.
// also we wrap this with React.forwardRef() so that we can use the ref attribute on this component.
//here is how to do it

export default React.forwardRef(function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
