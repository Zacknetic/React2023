import React, { useState, useRef } from "react";
import BasicInput from "./BasicInput";

const BasicForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const validateName = (value) => {
    return value.trim() !== "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("Submitted!");
      firstNameRef.current.reset();
      lastNameRef.current.reset();
      emailRef.current.reset();
      setFormIsValid(false);
    }
  };

  const firstNameInput = (
    <BasicInput
      id="firstname"
      type="text"
      label="First Name"
      errorPrompt="First name is required"
      validateValue={validateName}
      onInputChange={(isValid) => {
        setFormIsValid((prevFormIsValid) => {
          return prevFormIsValid && isValid;
        });
      }}
      ref={firstNameRef}
    />
  );

  const lastNameInput = (
    <BasicInput
      id="lastname"
      type="text"
      label="Last Name"
      errorPrompt="Last name is required"
      validateValue={validateName}
      onInputChange={(isValid) => {
        setFormIsValid((prevFormIsValid) => {
          return prevFormIsValid && isValid;
        });
      }}
      ref={lastNameRef}
    />
  );

  const emailInput = (
    <BasicInput
      id="email"
      type="email"
      label="E-Mail Address"
      errorPrompt="Please enter a valid email"
      validateValue={validateEmail}
      onInputChange={(isValid) => {
        setFormIsValid((prevFormIsValid) => {
          return prevFormIsValid && isValid;
        });
      }}
      ref={emailRef}
    />
  );

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        {firstNameInput}
        {lastNameInput}
      </div>
      {emailInput}
      <div className="form-actions">
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;