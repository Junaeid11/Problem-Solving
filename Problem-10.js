const items = [
  { quantity: 2, price: 100 },
  { quantity: 1, price: 100 },
  { quantity: 3, price: 50 },
];
function TotalValue(value) {
  return value.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
}
const result = TotalValue(items);
console.log(result);
