import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/cart-context";

export default function Menu() {
  const [loadedMeals, setLoadedMeals] = useState([]);
    const {addItemToCart} = useContext(CartContext);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    getMeals();
  }, []);

  
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <article key={meal.id} className="meal-item">
          
            <img src={`http://localhost:3000/${meal.image}`} />
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
          
          <div className="meal-item-actions">
            <button className="button" onClick={() => addItemToCart(meal)}>Add to cart</button>
          </div>
        </article>
      ))}
    </ul>
  );
}
