import {maleNames, femaleNames, lastNames, gender} from '../sets/data'

export const generatePerson = () => {
const personGender = gender[Math.floor(Math.random() * 2)];
const personAge = Math.floor(Math.random() * (50 - 16) + 16);
const personSurname = lastNames[Math.floor(Math.random() * lastNames.length)]
let personName = "";
if(personGender === 'male') {
     personName = maleNames[Math.floor(Math.random() * maleNames.length)]
}else if(personGender === "female") {
     personName = femaleNames[Math.floor(Math.random()*femaleNames.length)]
}

return {
    name: personName,
    lastName: personSurname,
    age: personAge,
    gender: personGender,
}
}