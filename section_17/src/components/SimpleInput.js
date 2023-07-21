import React, { useImperativeHandle, forwardRef } from "react";

const SimpleInput = forwardRef((props, ref) => {
  const { label, id, type, errorPrompt, onChange, isValid, reset } = props;

  useImperativeHandle(ref, () => {
    return {
      reset: () => {
        onChange({ target: { value: "" } });
      },
    };
  });

  return (
    <div className={`form-control ${!isValid && "invalid"}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={onChange} />
      {!isValid && <p>{errorPrompt}</p>}
    </div>
  );
});

export default SimpleInput;