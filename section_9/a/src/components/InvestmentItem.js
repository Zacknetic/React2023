export default function InvestmentItem(props) {
  const formatterCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });



  return (
    <tr>
      <td>{props.year}</td>
      <td>{formatterCurrency.format(props.total)}</td>
      <td>{formatterCurrency.format(props.interest)}</td>
      <td>{formatterCurrency.format(props.totalInterest)}</td>
      <td>{formatterCurrency.format(props.amount)}</td>
    </tr>
  );
}
