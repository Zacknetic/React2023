export default function InvestmentItem(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.total}</td>
      <td>{props.interest}</td>
      <td>{props.totalInterest}</td>
      <td>{props.amount}</td>
    </tr>
  );
}

