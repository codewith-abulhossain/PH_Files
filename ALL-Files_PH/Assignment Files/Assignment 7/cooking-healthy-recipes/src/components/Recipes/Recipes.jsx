import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-[65%] flex flex-col">
      <div className="grid  md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
