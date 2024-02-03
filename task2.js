// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function isOdd ( number , doMultiple){
    if(doMultiple === true){
        const multiply = number * 2;
        return multiply;
    }
    else{
        const division = number / 2;
        return division;

    }
}

console.log(isOdd(5, true));
console.log(isOdd(5, false));