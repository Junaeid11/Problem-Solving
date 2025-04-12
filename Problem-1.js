  const people= [
      { name: "Alice", age: 25, gender: "female" },
      { name: "Bob", age: 30, gender: "male" },
      { name: "Charlie", age: 28, gender: "male" },
      { name: "Diana", age: 22, gender: "female" },
      { name: "Ethan", age: 35, gender: "male" }
    ];
  function getRemainingMale(peopleData){
      return peopleData.filter(data=> data.gender !== "female").map(data =>data.name)
  
  }
  const result = getRemainingMale(people)
  console.log(result)