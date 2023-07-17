import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

     <button>+ Add / 追加 </button>
    </form>
  );
}
