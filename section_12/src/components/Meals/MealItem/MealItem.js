export default function MealItem(props) {
    const price = `円${props.price.toFixed(2)}`
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>price</div>
      </div>
    </li>
  );
}
