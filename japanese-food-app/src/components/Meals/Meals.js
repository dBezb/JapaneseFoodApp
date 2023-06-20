import React from "react";
import MealsText from "./MealsText";
import MealList from "./MealList";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsText />;
      <MealList />
    </React.Fragment>
  );
};

export default Meals;
