import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef(); // useRef returns an object with a current property which is initialized with the value null
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {

    console.log(enteredName);

    event.preventDefault(); // prevent the default behavior of the form which is to send a request and reload the page
    const enteredValue = nameInputRef.current.value; // current property is a special property that always points to the DOM element that the ref is attached to
    
    // nameInputRef.current.value = ""; // this is not the react way of updating the DOM, but it is possible. AVOID THIS!
    console.log(enteredValue);
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
