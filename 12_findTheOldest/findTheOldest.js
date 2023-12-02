const findTheOldest = function (peopleArray) {
  const oldestPerson = peopleArray.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const personAge = getAge(person.yearOfBirth, person.yearOfDeath);

    if (oldestAge < personAge) {
      return person;
    } else {
      return oldest;
    }
  });
  console.log(oldestPerson);
  return oldestPerson;
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
