/*
Conditionals, Functions, Scopes and Loops
 */

//Equals
//The 3 equals signs prevents the language from converting the variable type
//2 equals allows the type to be converted
let equals = 1 === 1; /*true*/
let equalsType = 1 == '1'; /*Would return true*/

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than or equal to
let greaterThanEq = 5 >= 5;

//Less than or equal to
let lessThanEq = 4 <= 9;

//Not Equals
let notEquals = 5 !== 2;


let storeA = 4.40;
let storeB = 4.10;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

/*control statement*/

console.log(!storeAIsLower);

function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
		console.log("Store A has a lower price.");
	} else if (storeB < storeA) {
		console.log("Store B has a lower price.");
	} else {
		console.log("Both stores have the same price.")
	}
}

compareStorePrices(3.20, 5.50);
compareStorePrices(5, 2);

// if (storeAIsLower) {
// 	console.log("Store A has a lower price.");
// } else if (storeB < storeA) {
// 	console.log("Store B has a lower price.");
// } else {
// 	console.log("Both stores have the same price.")
// }

function squareNum(number) {
	return number * number;
}

let squaredNumber = squareNum(5);

console.log(squareNum(4));
console.log(squaredNumber);

//Scope

//x is on the Global scope
let x = 10;

//n and m are on the Function Scope, can only be accessed inside the function
//Javascripts is 'lexically' scoped meaning the scope cascades down, e.g. 'x' can be accessed inside this function
//If x is declared again within the function, it will override the previous value of 'x'
function addNumbers(n, m, x) {
	console.log(x);
	//Block scope, "if" statements have their own scope
	if (1===1) {
		let b = 8;
	}
	return n + m;
}

//Arrays  Index:0  1  2  3  4  5[0]  5[1] 5[2]
let ourArray = [1, 2, 3, 4, 5, ['a', 'b', 'c']];

console.log(ourArray[2]); //3
console.log(ourArray[5][1]); //b

//Loops
//for(counter; comparison; incrementer) {
let arrLen = ourArray.length;
for(i = 0; i < arrLen; i++) {
	console.log('i is equal to: ' + ourArray[i]);
	//The inner loop will execute its entire loop every time the outer loop is run. In this case, it will run in its entirety
	//5 times.
	for(j = 0; j<10; j++) {
		console.log('j is equal to: ' + j);
	}
}

//while loop
let y = 0;
while (y < 10) {
	console.log('Ran');
	y++;
}


