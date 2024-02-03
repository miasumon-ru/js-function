// create a function that will return only the even number
//  return the sum of that even number

function evenNumberOnly (numbers){
    // let evens = [];
    let sum = 0;

    for (const number of numbers){
        if ( number % 2 === 1){
            console.log(number)

            sum = sum + number;

            // evens.push(number);

        }
    }
    // return evens;
    return sum
}

console.log(evenNumberOnly([10,20,30,25,41,36,21,31,29,57]));