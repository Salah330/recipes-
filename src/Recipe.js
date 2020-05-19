import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Recipe({ title, image, calories, ingredients }) {
  return (
    <div className="recipe mt-2">
      <h1 className="text-capitalize text-primary">{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        {" "}
        <strong>calories : </strong>
        {calories}
      </p>
      <img className="image" src={image}></img>
    </div>
  );
}
