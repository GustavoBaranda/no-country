import React, { useState } from "react";
import MealList from "./Componets/MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {  
    const apikey = 'fefdf676f54a4fb58a3f87ef8e92c20e'
    const endPoint = `https://api.spoonacular.com/mealplanner/generate?apiKey=${apikey}&timeFrame=day&targetCalories=${calories}` 
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calorias ( Ejemplo 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Obtenga un plan de alimentación diario</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
