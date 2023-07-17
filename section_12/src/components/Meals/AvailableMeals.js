import { DUMMY_MEALS } from "./DUMMY_MEALS";
import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card'

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
