const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear()
    const oldestPersonInitial = {}
  
     return people.reduce((oldestPerson, currentPerson) => {
     let subtractYear = ("yearOfDeath" in currentPerson)? currentPerson.yearOfDeath : currentYear
     let currentAge = subtractYear - currentPerson.yearOfBirth
     
     if (!("name" in oldestPerson) || (currentAge > oldestPerson.age)) {
      oldestPerson = {
         name: currentPerson.name,
      yearOfBirth: currentPerson.yearOfBirth,
      yearOfDeath: currentPerson.yearOfDeath,
      //I can use the spread operator here to copy the whole object and it will copy yearofdeath only if its present, not returning undefined
      age: currentAge
      //i can delete the age when returning the object.
     }
     console.log(oldestPerson)
     return oldestPerson
     }
     else {
     console.log(oldestPerson)
     return oldestPerson 
     }
     },oldestPersonInitial)
    
  
  }
// Do not edit below this line
module.exports = findTheOldest;
