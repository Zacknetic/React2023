import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
const FIREBASE_URL = "https://react-http-d90bd-default-rtdb.firebaseio.com";
const MEALS_DB = "/meals.json";
export default function AvailableMeals() {

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchTasks(setMeals, FIREBASE_URL + MEALS_DB);
  }, [fetchTasks]);

  let content;
  const mealsList = Object.values(meals).map((meal) => {
    return (
      <MealItem
        id={meal.id} // this is new!
        key={meal.id}
        name={meal.name}  
        description={meal.description}
        price={meal.price}
      >
        {meal.name}
      </MealItem>
    );
  });

  if (mealsList.length > 0) {
    content = (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
}
