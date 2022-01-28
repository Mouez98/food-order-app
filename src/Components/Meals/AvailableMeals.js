import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import Loading from '../../imported/loading'
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-94c27-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();
      let meals = []; 
      for (const key in data) {

        meals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          desc: data[key].desc,
        });
      }
      setMeals(meals);
      setLoading(false)
    };
    fetchMeals()
  }, []);
  
  if(loading) {
    return <section> 
     <Loading />
    </section>
  }

  const mealList = meals.map((item) => (
    <MealItem key={item.id} {...item} item={item} />
  ));
  return (
    <Card className={classes.meals}>
      <ul>{mealList}</ul>
    </Card>
  );
};

export default AvailableMeals;
