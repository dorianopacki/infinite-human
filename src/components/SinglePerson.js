import React from "react";
import "./SinglePerson.css"

export const SinglePerson = ({ picture, name, lastName, gender, age }) => {
  return (
    <div className = "person">
      <img src = {picture} alt = "human"></img>
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};
