const numbers = [1, 2, 3, 4, 5, 3, 6, 7, 8, 1, 9, 10, 2, 5];
function UniqueNumbers(num){
    return [...new Set(num)]
}
const result = UniqueNumbers(numbers)
console.log(result)