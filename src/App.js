import React, {useState, useEffect} from "react"
import './App.css';
import {generatePerson} from './components/generatePerson'
import { SinglePerson } from "./components/SinglePerson";


function App() {
  const url = 'https://randomuser.me/api/?results=100'
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => setPictures(response.results))
  }, [])

  //TODO make it set picture up to correct gender
  const list = pictures.map(human => {
    const {name, lastName, gender, age} = generatePerson();
    const picture = human.picture.large
    return <SinglePerson key = {name + age} name = {name} lastName = {lastName} gender = {gender} age = {age} picture = {picture}/>

  })

  return (
    <div className>
      <h1>Infinite human</h1>
      {list}
    </div>
  );
}

export default App;
