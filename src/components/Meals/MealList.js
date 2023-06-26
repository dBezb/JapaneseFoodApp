import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Roll "Naomi"',
    description:
      "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame seeds",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Spice with Salmon",
    description: "Rice, salmon, spice sauce",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Eel Sushi",
    description: "Smoked eel, eel sauce, sesame seeds",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Salad "Poke with Salmon"',
    description: "Rice, salmon, cucumber, chuka, nori, tuna flakes, nut sauce",
    price: 7.99,
  },
];

const MealList = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
