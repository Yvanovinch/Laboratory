
var no1 = parseFloat(prompt('first number: '));
var no2 = parseFloat(prompt('second number: '));

var operator = prompt('Choose operator ADD(+),SUBTRACT (-), MULTIPLY(*) or DIVIDE/ ): ');

let reslt;

// using if...else if... else
if (operator == '+') {
    reslt = no1 + no2;;
}
else if (operator == '-') {
    reslt = no1 - no2;
}
else if (operator == '*') {
    reslt = no1 * no2;
}
else {
    reslt = no1 / no2;
}

console.log(`${no1} ${operator} ${no2} = ${reslt}`);