import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
      const apikey = 'fefdf676f54a4fb58a3f87ef8e92c20e'
      const endPoint = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apikey}&includeNutrition=false`
      fetch(endPoint)
        .then((response) => response.json())
        .then((data) => {
          setImageUrl(data.image);
        })
        .catch(() => {
          console.log("error");
        });
    }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Tiempo de preparacion: {meal.readyInMinutes} minutos</li>
        <li>Numero de porciones: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Ir a la receta</a>
    </article>
  );
}
