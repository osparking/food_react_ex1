import React from "react";
import styles from "./a_recipe.module.css";

export default function A_Recipe({
  idx,
  defaultDetails,
  setDefaultDetails,
  recipe,
  setSelectedId,
}) {
  if (idx === 0 && defaultDetails) {
    setSelectedId(recipe.id);
  }
  return (
    <div className={styles.recipeContainer}>
      <img className={styles.foodImage} src={recipe.image} alt={recipe.title} />
      <div className={styles.recipeText}>
        <p className={styles.recipeName}>{recipe.title}</p>
      </div>
      <div className={styles.cookStepsButtonContainer}>
        <button
          className={styles.cookStepsButton}
          onClick={() => {
            setSelectedId(recipe.id);
            setDefaultDetails(false);
            console.log("클릭: ", recipe.id);
          }}
        >
          조리법
        </button>
      </div>
    </div>
  );
}
