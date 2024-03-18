//write function to return an array of which two numbers of given array add up to given target sum
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
	while (remainingArray.length > 1) {
		let num = remainingArray.shift();
		let elementsThatAddToSum = numPlusArrayElementEqualsSum(num, remainingArray, sum);
		if (typeof elementsThatAddToSum === "object") {
			allArraysThatAddToSum = allArraysThatAddToSum.concat([elementsThatAddToSum]);
		};
	};
	return allArraysThatAddToSum
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
//test variables
const givenArr = [1,2,3];
const givenSum = 4;

const secondArr = [3,5,2];
const secondSum = 7;

const doubleArr = [7,2,1,3,4];
const doubleSum = 5;

const duplicateArr = [6,1,2,1];
const duplicateSum = 3;

//-------------------------------------------------------------------------------------------------------------------------------------------------
//test functions

//verify that the values in nested arrays returned by whichTwoAdd actually add up to target sum
const addNestedArrayValues = (arr) => arr[0] + arr[1]; 
const testNestedArraySumsAgainstTargetSum = (arr, sum) => {
	let doValuesEqualTarget = [];
	for (nested of arr) {
		doValuesEqualTarget = doValuesEqualTarget.concat(`${nested[0]} + ${nested[1]} = ${sum}: ${addNestedArrayValues(nested) === sum}`);
	};
	return doValuesEqualTarget
};

//unused but kept just in case
const testNumPlusArrayElementEqualsSum = (num, arr, sum, name) => {
	const elementTest = numPlusArrayElementEqualsSum(num, arr, sum);
	console.log(name, "numIntoInt function returns object: ", typeof elementTest === "object");
	console.log(name, "numIntoInt function returns: ", elementTest);
	if (elementTest) {
		console.log(name, "numIntoInt return adds up to given sum from Given values: ", elementTest[0] + elementTest[1] === sum);
	};
};

//given an array of integers, target sum, and related name, test the whichTwoAdd function
//tests that the return is an object, logs said object, and tests that nested arrays in object add up to given target sum
const testWhichTwoAdd = (arr, sum, name) => {
	const addTest = whichTwoAdd(arr, sum);
	console.log(name, "whichTwoAdd function returns object: ", typeof addTest === "object");
	console.log(name, "whichTwoAdd function returns: ", addTest);
	if (addTest) {
		console.log(name, "whichTwoAdd return adds up to given sum: ", testNestedArraySumsAgainstTargetSum(addTest, sum));
	};
};

//run testWhichTwoAdd on test variables
testWhichTwoAdd(givenArr, givenSum, "given");
testWhichTwoAdd(secondArr, secondSum, "second");
testWhichTwoAdd(doubleArr, doubleSum, "double");
testWhichTwoAdd(duplicateArr, duplicateSum, "duplicate");
