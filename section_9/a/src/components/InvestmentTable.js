import InvestmentItem from "./InvestmentItem";
export default function InvestmentTable(props) {


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
