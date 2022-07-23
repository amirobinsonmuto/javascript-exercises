const findTheOldest = function(people) {

    let result = people.reduce((accumulator, person) => {

      if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
      }
     
      let age = person.yearOfDeath - person.yearOfBirth;

      if (age > accumulator) {
        accumulator = age;
      } 

      return accumulator;

    }, 0);

    return people.find(element => element.yearOfDeath - element.yearOfBirth === result);

  }

// Do not edit below this line
module.exports = findTheOldest;
