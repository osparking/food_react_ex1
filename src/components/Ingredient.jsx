import React from "react";
import styles from "./ingredient.module.css";

export default function Ingredient({ ingredient }) {
  const imgUrlPrefix = "https://img.spoonacular.com/ingredients_100x100/";
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.ingredientImageContainer}>
          <img src={imgUrlPrefix + ingredient.image} alt={ingredient.name} />
        </div>
        <div className={styles.ingredientInfoContainer}>
          <div className={styles.ingredientName}>{ingredient.name}</div>
          <div className={styles.ingredientAmount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
