import InvestmentItem from "./InvestmentItem";
export default function InvestmentTable(props) {
  /* Todo: Show below table conditionally (only once result data is available) */
  /* Show fallback text if no data is available */

  console.log(props.items);
  // year: i + 1,
  // yearlyInterest: yearlyInterest,
  // savingsEndOfYear: currentSavings,
  // yearlyContribution: yearlyContribution,
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
            total={yearData.savingsEndOfYear}
            interest={yearData.yearlyInterest}
            totalInterest={yearData.totalInterest}
            amount={yearData.yearlyContribution}
      
          />
        ))}
      </tbody>
    </table>
  );
}
