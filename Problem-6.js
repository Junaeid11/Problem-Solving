const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumEvenNumber(num) {
  return num.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return num
  },0);
}
const result = sumEvenNumber(numbers);
console.log(result);
