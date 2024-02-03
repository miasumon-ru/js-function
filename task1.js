

// write a function to give me the sum of numbers of an array

function sumOfNumbers (numbers){

    let sum = 0;
    for (const number of numbers){
        
        sum = sum + number;
    }
    return sum;
}

const numbers = [ 10, 20, 30, 40, 50];

console.log(sumOfNumbers(numbers));