import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { DUMMY_MEALS } from "./DummyMeals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((item) => (
    <MealItem key={item.id} {...item} />
  ));
  return (
    <Card className={classes.meals}>
      <ul>
        {mealList}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
