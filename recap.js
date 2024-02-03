  /*

 1 . function declaration
 2 . function call 
 3. function parameter
 4 . return



*/

function add (num1 , num2){
    const add = num1 + num2;
    return add;
}
const sum = add (10, 20);

console.log(sum)

// direct return

function add2 ( num1, num2){
    return num1 + num2;
}

console.log(add2(20, 30));

// 

function doMath (num1, num2){
    const add = num1 + num2;
    const diff = num1 - num2;
    const multi = add * diff;
    const result = multi / 2;

    return result;
}

const result = doMath(4 , 2)

console.log(result);