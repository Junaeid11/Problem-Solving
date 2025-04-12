const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 88 },
];
function updateAge(peopleArray, name, newAge) {
  let personFound = false;
  peopleArray.forEach((data) => {
    if (data.name === name) {
      data.age = newAge;
      personFound = true;
    }
  });
  if (!personFound) {
    return "Person Not Found";
  }
  return peopleArray;
}

const modifyProperty = updateAge(people, "Alice", 26);
console.log(modifyProperty);
