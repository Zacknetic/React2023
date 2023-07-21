import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import SimpleInput from "./SimpleInput";

const BasicInput = forwardRef(({ id, type, label, errorPrompt, validateValue, onInputChange }, ref) => {
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    onInputChange(isValid);
  }, [isValid, onInputChange]);

  const onChangeHandler = (event) => {
    setIsValid(validateValue(event.target.value));
  };

  useImperativeHandle(ref, () => {
    return {
      reset: () => {
        inputRef.current.reset();
        setIsValid(false);
      },
    };
  });

  return (
    <SimpleInput
      id={id}
      type={type}
      label={label}
      errorPrompt={errorPrompt}
      onChange={onChangeHandler}
      isValid={isValid}
      ref={inputRef}
    />
  );
});

export default BasicInput;