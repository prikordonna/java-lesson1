//alert('hello world!');
console.log('Hello World!');

var helloWorld = 'HelloWorld!';

const userName = prompt('Enter your name');

prn(helloWorld + '<br>' + userName);

//Data types
const num = 42; // Number, Infinity, NaN
const str = '<p>Some text</p>'; //String
const bool = true; //Boolean - true/false

const undef = undefined; // undefined
const n = null; //null

const obj = {}; // Object

const sym = Symbol(); //Symbol

const age = Number(prompt('Your age'));
prn('You are: ' + checkAge(age));
const nextAge = age + 1;
prn('<br>Next year you will be: ' + age);

function prn(val) {
    document.write('<br>' + val);
}

// >  <  >=  <=  !== ===
function checkAge(age) {
    if ( (age >= 18) && (age <= 60) ) {
        return 'Adult';
    } else if (age < 18) {
        return 'Child'
    }
    return 'Old';
}