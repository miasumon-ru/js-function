//  different types of parameter of a function

/*
1 . string as a parameter
2 . boolean as a parameter
3 . array as a parameter
4 . object as a parameter

*/

//  for a given string , tell me whether it has even numbers of character or not 

function evenSizedString (str){
    const length = str.length;

    console.log(str, length);
    if(length % 2 === 0){
        console.log('it is even number of character');
    }
    else{
        console.log('it is not even numbers of characters');
    }
}

 evenSizedString('Dhaka');
 evenSizedString('Faka');

 

//  boolean as a parameter of a function

function doDoubleOrTriple (number, doDouble){
    if (doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log('the result is ' , doDoubleOrTriple(5, true));
console.log('the result is ' , doDoubleOrTriple(8, false));

// array as a parameter of a function

function numberOfElements (numbers){
    const length = numbers.length;
    return length;
}

const numbers = [ 10, 20, 30, 40, 50];

const result = numberOfElements(numbers);
console.log('the number of elements of an array ' , result);

// object as a parameter of a function

function getAge (person){
    const age = person.age;
    return age;
}

const person = {
    name : 'rahim',
    age : 45
}

 console.log(getAge(person))