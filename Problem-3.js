function square(num){
    return num * num

}
function double(num){
    return num * 2

}
function add(num){
    return num * 5

}
function Calculation(num){
    return add(double(square(num)))
}
const result = Calculation(2)
console.log(result)