// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero (str){
    
    console.log(str);

    const zero = '0';
    let numberOfZero = [];

    for ( let i = 0; i < str.length; i++){

        const letter = str[i];
        // console.log(letter);

        if (letter === zero){

            numberOfZero.push(0);

        }
    }
    
    const zeroCount = numberOfZero.length;

    return zeroCount;

}

 const  result =count_zero('01000111001');

 console.log(result);
