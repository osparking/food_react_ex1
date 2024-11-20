import React, { useEffect, useState } from "react";
import d642583 from "../resources/642583.json";
import d715538 from "../resources/715538.json";
import Ingredient from "./Ingredient";
import styles from "./recipeDetails.module.css";

export default function RecipeDetails({ selectedId, localRun }) {
  const url = `https://api.spoonacular.com/recipes/${selectedId}/information`;
  const [recipeDetails, setRecipeDetails] = useState({});
  let korCurr = Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });

  useEffect(
    (e) => {
      if (localRun) {
        function fetchDetails() {
          if (selectedId === Number("642583")) {
            setRecipeDetails(d642583);
            console.log("상세 레시피:", d642583);
          } else if (selectedId === Number("715538")) {
            setRecipeDetails(d715538);
            console.log("상세 레시피:", d715538);
          } else {
            console.error("지역 파일이 없습니다.");
          }
        }
        selectedId && fetchDetails();
      } else {
        async function fetchDetails() {
          if (selectedId === "") return;
          const response = await fetch(
            `${url}?apiKey=${import.meta.env.VITE_API_KEY}`
          );
          const details = await response.json();
          console.log("details:", details);
          setRecipeDetails(details);
        }
        selectedId && fetchDetails();
      }
    },
    [selectedId]
  );
  return (
    <div className={styles.detailsCard}>
      <h3 className={styles.recipeTitle}>{recipeDetails.title}</h3>
      <img
        className={styles.detailImg}
        src={recipeDetails.image}
        alt={recipeDetails.title}
      />
      <div className={styles.recipeProps}>
        <span>
          <strong>⏲{recipeDetails.readyInMinutes}분</strong>
        </span>
        <span>
          <strong>👨‍👩‍👧{recipeDetails.servings}인분</strong>
        </span>
        <span>
          <strong>
            {recipeDetails.vegetarian ? "🥕채식가용" : "🍖일반용"}
          </strong>
        </span>
        <span>
          <strong>
            {recipeDetails.vegetarian ? "🥦완전채식!" : "완전채식❌"}
          </strong>
        </span>
      </div>
      <div>
        <span>
          <strong>
            {korCurr.format(recipeDetails.pricePerServing * 60)}/1인분
          </strong>
        </span>
      </div>

      <h3>음식 재료</h3>
      {recipeDetails.extendedIngredients ? (
        <div>
          {recipeDetails.extendedIngredients.map((ingredient) => (
            <Ingredient ingredient={ingredient} key={ingredient.id} />
          ))}
        </div>
      ) : (
        <div>
          <p>자료 적재 중...</p>
        </div>
      )}
      <h3>조리 단계</h3>
      {recipeDetails.analyzedInstructions ? (
        <div className={styles.cookSteps}>
          {" "}
          <ol>
            {recipeDetails.analyzedInstructions[0].steps.map((step, idx) => (
              <li key={idx}>{step.step}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div>
          <p>⏲자료 적재 중.</p>
        </div>
      )}
    </div>
  );
}
