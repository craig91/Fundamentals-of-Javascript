// A variable is a name associated with a value.
// Variables allow you to store and manipulate data in your programs. 


i = 2;
console.log(i);
// the number 2 is assined to i, so if you console log i you would get 2, not i.

// most of the time, you would want to declare a variable using the "var" keyword.
// I'll explain why in a future tutorial.

var i = 2;

// one important thing to note that javascript is an "untyped" language, so variables are able to 
// hold any datatypes, unlike Java or C.

var i = 2;
var i = "two"
var k = function logToTen() {
    for(var i = 0; i < 10; i++){
        console.log(i)
    } 
}

var i = [1,2,3,4,5,6,7,8,9,10];
var i = {
    title: "This is an object",
    author: "Craig Dejean"
};

// these are several examples that demonstrate that variables can hold different datatypes.

// There are several ways you can declare variables:

a = 1;
var a = 1;

var sum, product;
// makes two variables in one declaration

var sum = 17, product = 45, result = 10;
// you can also declare and initialize more than one on one declaration

// If you delare a variable without assigning it something, its default value is undefined, until you give 
// the variable a value.

var i;

// variables can appear in for loops or functions as well:

for(var i = 0; i < 10; i++) {
    document.write(i , '<h1>')
}

