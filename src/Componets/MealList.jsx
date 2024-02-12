import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros Alimentos</h1>
        <ul>
          <li>Calorias: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohidratos: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Grasas: {nutrients.fat.toFixed(0)}</li>
          <li>Proteinas: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
