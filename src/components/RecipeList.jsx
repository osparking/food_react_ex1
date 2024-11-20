import React, { useState } from "react";
import A_Recipe from "./A_Recipe";

export default function RecipeList({ recipes, setSelectedId }) {
  const [defaultDetails, setDefaultDetails] = useState(true);
  return (
    <div>
      {recipes.map((recipe, idx) => (
        <A_Recipe
          idx={idx}
          defaultDetails={defaultDetails}
          setDefaultDetails={setDefaultDetails}
          recipe={recipe}
          key={recipe.id}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}
