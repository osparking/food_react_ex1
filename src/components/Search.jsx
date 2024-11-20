import React, { useEffect, useState } from "react";
import recipesFile from "../resources/pastas.json";
import styles from "./search.module.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
export default function Search({ setRecipes, setSelectedId, localRun }) {
  const [query, setQuery] = useState("pasta");

  useEffect(
    (e) => {
      async function fetchRecipeList() {
        if (localRun) {
          console.log("레시피", recipesFile);
          setRecipes(recipesFile);
        } else {
          const response = await fetch(
            `${url}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
          );
          const responseRecipies = await response.json();
          console.log(responseRecipies.results);
          setRecipes(responseRecipies.results);
        }
      }
      fetchRecipeList();
    },
    [query]
  );
  return (
    <div className={styles.searchDiv}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
