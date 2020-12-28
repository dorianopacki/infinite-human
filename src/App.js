import React, {useState, useEffect} from "react"
import './App.css';
import {SinglePerson} from "./components/SinglePerson"

function App() {
const url = "https://randomuser.me/api/?results=100"
const [people, setPeople] = useState([]);

useEffect(() => {
  const controller = new AbortController();
  fetch(url)
  .then(response => response.json())
  .then(response => setPeople(response.results))
  .catch(error => console.log(error))
  return () => controller.abort();
}, [])

  const list = people.map(human => {
    return <SinglePerson picture = {human.picture.large} name = {human.name.first} lastName = {human.name.last} gender = {human.gender} age = {human.dob.age} />
  })
  return (
    <div className>
      <h1>Infinite human</h1>
      {list}
    </div>
  );
}

export default App;
