// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg (numbers){
    
    console.log(numbers)
    const size = numbers.length;
    console.log('the size of the number is : ', size);

    let sum = 0;

    for (let number of numbers){

        sum = sum + number;
        
    }
    let avg = sum/ size;
    return avg;

}

const avg = make_avg([10,20]);

console.log(avg);