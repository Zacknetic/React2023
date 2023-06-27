import { useState } from "react";

export default function Form(props) {
  const [enteredCurrSav, setCurrSav] = useState("");
  const [enteredYearSav, setYearSav] = useState("");
  const [enteredExptRet, setExptRet] = useState("");
  const [enteredIvstDur, setIvstDur] = useState("");

  const currSavChangeHandler = (event) => {
    setCurrSav(event.target.value);
  };

  const yearSavChangeHandler = (event) => {
    setYearSav(event.target.value);
  };

  const exptRetChangeHandler = (event) => {
    setExptRet(event.target.value);
  };

  const ivstDurChangeHandler = (event) => {
    setIvstDur(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const savingsData = {
      currSav: +enteredCurrSav,
      yearSav: +enteredYearSav,
      exptRet: +enteredExptRet,
      ivstDur: +enteredIvstDur,
    };

    props.onSaveSavingsData(savingsData);
    setCurrSav("");
    setYearSav("");
    setExptRet("");
    setIvstDur("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="current-savings"
            onChange={currSavChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="yearly-contribution"
            onChange={yearSavChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            min="0.1"
            max="100.0"
            step="0.1"
            id="expected-return"
            onChange={exptRetChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" min='1' step='1' id="duration" onChange={ivstDurChangeHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
