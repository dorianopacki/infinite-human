import React, { useState, useEffect } from "react";
import "./App.css";
import { generatePerson } from "./components/generatePerson";
import { SinglePerson } from "./components/SinglePerson";

function App() {
  const url = "https://randomuser.me/api/?results=100";
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setInfo(response.results));
  }, []);

  //TODO make it set picture up to correct gender
  const list = info.map((human) => {
    const id = human.login.uuid;
    const picture = human.picture.large;
    const gender = human.gender;
    const { name, lastName, age } = generatePerson(gender);
    return (
      <SinglePerson
        key={id}
        name={name}
        lastName={lastName}
        gender={gender}
        age={age}
        picture={picture}
      />
    );
  });

  return (
    <div className>
      <h1>Infinite human</h1>
      {list}
    </div>
  );
}

export default App;
