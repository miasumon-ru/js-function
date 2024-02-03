// how function works and Argument vs Parameter

function doubleIt (number){
    const doubled = number*2;
    console.log('the doubled number is : ', number,  doubled)
}
doubleIt(5);

// calling function with variable
const number = 10;

doubleIt(number);

function difference (num1, num2){
                
    const diff = num1 - num2;
    console.log('the difference is :', diff)
}

const myFatherAge = 40;
const myAge = 20;


difference(myFatherAge, myAge);