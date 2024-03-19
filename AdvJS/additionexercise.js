//given a number and an array, return the number and its respective array element which add up to given target sum
const numPlusArrayElementEqualsSum = (num, arr, sum) => {
	for (element of arr) {
		if (num + element === sum) {
			return [num, element]
		}
	};
};

//remove duplicates from given array
const removeDuplicates = (arr) => {
	let arrayWithoutDuplicates = [];
	for (element of arr) {
		if (!arrayWithoutDuplicates.includes(element)) {
			arrayWithoutDuplicates = arrayWithoutDuplicates.concat(element);
		};
	};
	return arrayWithoutDuplicates
};

//return which two numbers of given array add up to given target sum
//if there are multiple ways to reach the sum, each pair of numbers is nested in its own array
//removes duplicates from given array to avoid returning the same pair multiple times
const whichTwoAdd = (arr, sum) => {
	let allArraysThatAddToSum = [];
	let remainingArray = removeDuplicates(arr);
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

//verify that the values returned by numPlusArrayElementEqualsSum actually add up to target sum
//currently not using test but kept just in case
const testNumPlusArrayElementEqualsSum = (num, arr, sum, name) => {
	const numAndElement = numPlusArrayElementEqualsSum(num, arr, sum);
	console.log(name, "numPlusArrayElementEqualsSum function returns: ", numAndElement);
	if (numAndElement) {
		console.log(name, "numPlusArrayElementEqualsSum return adds up to given sum from Given values: ", numAndElement[0] + numAndElement[1] === sum);
	};
};

//given an array of integers, target sum, and related name, run the whichTwoAdd function
//log what whichTwoAdd returns, and if it returns an object, verify that each nested array in that object adds up to target sum
const testWhichTwoAdd = (arr, sum, name) => {
	const addTest = whichTwoAdd(arr, sum);
	console.log(name, "whichTwoAdd function returns: ", addTest);
	if (typeof addTest === "object") {
		console.log(name, "whichTwoAdd return adds up to given sum: ", testNestedArraySumsAgainstTargetSum(addTest, sum));
	};
};

//run testWhichTwoAdd on test variables
testWhichTwoAdd(givenArr, givenSum, "given");
testWhichTwoAdd(secondArr, secondSum, "second");
testWhichTwoAdd(doubleArr, doubleSum, "double");
testWhichTwoAdd(duplicateArr, duplicateSum, "duplicate");
