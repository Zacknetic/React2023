import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef(); // useRef returns an object with a current property which is initialized with the value null
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //should use the same source of truth for the validation as react doesn't guarantee that the state will be updated immediately
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevent the default behavior of the form which is to send a request and reload the page

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);

      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value; // current property is a special property that always points to the DOM element that the ref is attached to

    // nameInputRef.current.value = ""; // this is not the react way of updating the DOM, but it is possible. AVOID THIS!
    console.log(enteredValue);
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
