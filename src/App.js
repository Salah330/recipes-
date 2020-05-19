import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "ad2dfd6c";
  const APP_KEY = "a91425ef9cdf99fa3c913a13778e356f";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  // fetch after submit the value
  const getRecipies = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
  };

  // update search
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // get search after submit
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App mx-auto mt-2">
      <form
        className="search-form  d-flex flex-wrap justify-content-center align-items-center min-vh-10 border-2"
        onSubmit={getSearch}
      >
        <input
          type="text"
          className="search-bar w-50 border-0 p-1 mr-1"
          value={search}
          onChange={updateSearch}
        ></input>
        <button type="submit" className="search-button border-0 p-1 text-light">
          search
        </button>
      </form>
      <div className="recipes ">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
