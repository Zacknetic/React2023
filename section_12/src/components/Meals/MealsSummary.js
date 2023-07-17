import classes from "./MealsSummary.module.css";

export default function MealsSummary() {
    return <section className={classes.summary}>
        <h2>Delicious Festival Food, Delivered to Your Door</h2>
        <p>
            Choose your favorite festival meals from our broad selection of available meals
            and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by
            experienced chefs!
        </p>
    </section>
}