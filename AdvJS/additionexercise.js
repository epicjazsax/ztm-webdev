//write function to return an array of which two numbers of given array add up to given integer
const numPlusArrayElementEqualsSum = (num, arr, sum) => {
	for (element of arr) {
		if (num + element === sum) {
			return [num, element]
		}
	};
}

//will return duplicates of answer-arrays if the original given array contains multiple of the same integer that belongs in an answer-array
//ex. given array [1,1,2] and target sum of 3, return of allArraysThatAddToSum will be [[1,2],[1,2]] (one match for each 1)
//is this even a problem we should solve?
//idea: eliminate duplicates from given array at start?
const whichTwoAdd = (arr, sum) => {
	let remainingArray = [];
	let allArraysThatAddToSum = [];
	remainingArray = remainingArray.concat(arr);
	console.log("array: ", arr);
	console.log("sum integer: ", sum);
	console.log("initial 'remaining array': ", remainingArray);
	console.log("initial 'allArrays': ", allArraysThatAddToSum);
	while (remainingArray.length > 1) {
		let num = remainingArray.shift();
		let elementsThatAddToSum = numPlusArrayElementEqualsSum(num, remainingArray, sum);
		console.log("current element: ", num);
		console.log("'remaining array': ", remainingArray);
		console.log("array of current element and remainingArray element that add to sum: ", elementsThatAddToSum);
		if (typeof elementsThatAddToSum === "object") {
			allArraysThatAddToSum = allArraysThatAddToSum.concat([elementsThatAddToSum]);
			console.log("allArrays updated to: ", allArraysThatAddToSum)
		};
	};
	return allArraysThatAddToSum
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
//test input variables
const givenArr = [1,2,3];
const givenSum = 4;
const secondArr = [3,5,2];
const secondSum = 7;
const doubleArr = [7,2,1,3,4];
const doubleSum = 5;
const duplicateArr = [6,1,2,1];
const duplicateSum = 3;

//test output variables
const givenGoal = [[1,3]];
const secondGoal = [[5,2]];
const doubleGoal = [[2,3],[1,4]];
const duplicateGoal = [[1,2]];

//-------------------------------------------------------------------------------------------------------------------------------------------------
//test
	//adapted from stack overflow user xdazz at thread
	//https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
	//orders both arrays to make comparing simpler
	//checks that both ordered arrays are of same length and the value at each index is the same for both


//UPDATE VERIFIER FUNCTIONS TO ACCOUNT FOR NESTED ARRAYS
const sameArrayVerifier = (arr1, arr2) => (arr1.length === arr2.length) && arr1.every(function(e, i) {return e === arr2[i]})

const whichTwoFunctioningProperly = (arr, sum, goal) => {
	const whichTwoOutputSorted = whichTwoAdd(arr, sum).toSorted((a,b) => a-b);
	const goalSorted = goal.toSorted((a,b) => a-b);
	return sameArrayVerifier(whichTwoOutputSorted, goalSorted)
};

//unit tests
const testNumIntoInt = (num, arr, sum, name) => {
	const elementTest = numPlusArrayElementEqualsSum(num, arr, sum);
	console.log(name, "numIntoInt function returns object: ", typeof elementTest === "object");
	console.log(name, "numIntoInt function returns: ", elementTest);
	if (elementTest) {
		console.log(name, "numIntoInt return adds up to given sum from Given values: ", elementTest[0] + elementTest[1] === sum);
	};
};

const testWhichTwoAdd = (arr, sum, name) => {
	const addTest = whichTwoAdd(arr, sum);
	console.log(name, "whichTwoAdd function returns object: ", typeof addTest === "object");
	console.log(name, "whichTwoAdd function returns: ", addTest);
	if (addTest) {
		//UPDATE TO ACCOUNT FOR NESTED ARRAYS
		console.log(name, "whichTwoAdd return adds up to given sum: ", addTest[0] + addTest[1] === sum);
	};
};

testWhichTwoAdd(givenArr, givenSum, "given");
testWhichTwoAdd(secondArr, secondSum, "second");
testWhichTwoAdd(doubleArr, doubleSum, "double");
testWhichTwoAdd(duplicateArr, duplicateSum, "duplicate");

//-------------------------------------------------------------------------------------------------------------------------------------------------
//acceptance tests-ish
console.log("given variables have passed: ", whichTwoFunctioningProperly(givenArr, givenSum, givenGoal));

console.log("second variables have passed: ", whichTwoFunctioningProperly(secondArr, secondSum, secondGoal));

console.log("simple variables have passed: ", whichTwoFunctioningProperly(simpleArr, simpleSum, simpleGoal));
