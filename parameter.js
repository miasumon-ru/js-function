//  add function parameter , handle miltiple parameter

function square (number){
    console.log('value of the number parameter :', number);

    const borgo = number * number;

    console.log('square of the given number is :', borgo)

}

 square (5);

//  parameter is only applicable in the function , it is not allowed outside

function add (num1,  num2){
    const sum = num1 + num2;
    console.log(sum)

}
add (5 , 71)

function addAll ( a, b, c, d, e){
    const total = a + b + c + d + e;
    console.log(total)
}
 addAll (10, 20, 30, 40, 50);
