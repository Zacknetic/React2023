export default function InvestmentItem(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.amount}</td>
      <td>{props.rate}</td>
      <td>{props.interest}</td>
      <td>{props.total}</td>
    </tr>
  );
}

