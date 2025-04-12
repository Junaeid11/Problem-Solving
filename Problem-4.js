const cars = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Civic", year: 2021 },
    { make: "Ford", model: "Mustang", year: 2022 },
    { make: "Chevrolet", model: "Malibu", year: 2019 },
    { make: "Tesla", model: "Model 3", year: 2023 }
  ];
function sortCars(carData){
    return carData.sort((a,b)=>a.year - b.year)

}
const result =sortCars(cars)
console.log(result) 