import InvestmentItem from "./InvestmentItem";
export default function InvestmentTable(props) {
  /* Todo: Show below table conditionally (only once result data is available) */
  /* Show fallback text if no data is available */

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
      });
    }

    // do something with yearlyData ...
    return yearlyData;
  };

  calculateHandler(props.items);

  if (props.items.length === 0) {
    return <h2>Found no expenses.</h2>;
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((yearData) => (
          <InvestmentItem
            key={yearData.year}
            year={yearData.year}
            amount={yearData.amount}
            rate={yearData.rate}
            interest={yearData.interest}
            total={yearData.total}
          />
        ))}
      </tbody>
    </table>
  );
}
