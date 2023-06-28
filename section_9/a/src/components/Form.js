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
      currSav: enteredCurrSav,
      yearSav: enteredYearSav,
      exptRet: enteredExptRet,
      ivstDur: enteredIvstDur,
    };

    const yearlyData = calculateHandler(savingsData);

    props.onSaveSavingsData(yearlyData);
    setCurrSav("");
    setYearSav("");
    setExptRet("");
    setIvstDur("");
  };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currSav; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearSav; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.exptRet / 100;
    const duration = +userInput.ivstDur;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: yearlyInterest * (i + 1),
      });
    }
    // do something with yearlyData ...
    return yearlyData;
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
