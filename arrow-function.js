function number (num1, num2){
    return num1+ num2;
}
// function expression 
const add3 = function add3(num1, num2){
    return num1 + num2;
}
// anonymous function
const add3 = function (num1, num2){
    return num1 + num2;
}


// arrow function 
const add4 = (num1,num2) =>num1 + num2;
const sum1 = add3(15,12);
const sum2 = add3(15,12);
const sun3 = add3(15,17);
console.log(sum1+sum2 +sum3);