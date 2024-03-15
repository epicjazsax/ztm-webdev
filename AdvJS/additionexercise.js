//write function to return an array of which two numbers of given array add up to given integer
const doesNumAddIntoInt = (num, arr, int) => {
	for (element of arr) {
		if (element + num === int) {
			return [element, num]
		}
	};
}

//currently doesn't work if arr[0] is not one of the numbers that adds to int
const whichTwoAdd = (arr, int) => {
	for (num of arr) {
		let currentElementTest = doesNumAddIntoInt(num, arr, int);
		console.log(num, arr, int, currentElementTest);
		if (currentElementTest) {
			return currentElementTest, "if return"
		}
	};
};

//-------------------------------------------------------------------------------------------------------------------------------------------------
//test input variables
const givenArr = [1,2,3];
const givenInt = 4;
const secondArr = [3,5,2];
const secondInt = 7;
const simpleArr = [5,6,7];
const simpleInt = 11;

//test output variables
const givenGoal = [1,3];
const secondGoal = [5,2];
const simpleGoal = [5,6];

//-------------------------------------------------------------------------------------------------------------------------------------------------
//test
	//adapted from stack overflow user xdazz at thread
	//https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
	//orders both arrays to make comparing simpler
	//checks that both ordered arrays are of same length and the value at each index is the same for both

const sameArrayVerifier = (arr1, arr2) => (arr1.length === arr2.length) && arr1.every(function(e, i) {return e === arr2[i]})

const whichTwoFunctioningProperly = (arr, int, goal) => {
	const whichTwoOutputSorted = whichTwoAdd(arr, int).toSorted((a,b) => a-b);
	const goalSorted = goal.toSorted((a,b) => a-b);
	return sameArrayVerifier(whichTwoOutputSorted, goalSorted)
};

//unit tests
const givenElementTest = doesNumAddIntoInt(1, givenArr, givenInt);
console.log("numIntoInt function returns array from Given values: ", typeof givenElementTest === "object");
console.log("numIntoInt function return from Given values: ", givenElementTest);
console.log("numIntoInt return adds up to given int from Given values: ", givenElementTest[0] + givenElementTest[1] === givenInt);

const givenAddTest = whichTwoAdd(givenArr, givenInt);
console.log("whichTwoAdd function returns array from Given values: ", typeof givenAddTest === "object");
console.log("whichTwoAdd function return from Given values: ", givenAddTest);
console.log("whichTwoAdd return adds up to given int from Given values: ", givenAddTest[0] + givenAddTest[1] === givenInt);

const secondElementTest = doesNumAddIntoInt(3, secondArr, secondInt);
console.log("numIntoInt function returns array from Second values: ", typeof secondElementTest === "object");
console.log("numIntoInt function return from Second values: ", secondElementTest);
console.log("numIntoInt return adds up to given int from Second values: ", secondElementTest[0] + secondElementTest[1] === secondInt);

const secondAddTest = whichTwoAdd(secondArr, secondInt);
console.log("whichTwoAdd function returns array from Second values: ", typeof secondAddTest === "object");
console.log("whichTwoAdd function return from Second values: ", secondAddTest);
console.log("whichTwoAdd return adds up to given int from Second values: ", secondAddTest[0] + secondAddTest[1] === secondInt);

//-------------------------------------------------------------------------------------------------------------------------------------------------
//acceptance tests-ish
console.log("data type of return value of whichTwoAdd for given values is object: ", (typeof whichTwoAdd(givenArr, givenInt) === "object"));
console.log("given variables have passed: ", whichTwoFunctioningProperly(givenArr, givenInt, givenGoal));

console.log("data type of return value of whichTwoAdd for second values is object: ", (typeof whichTwoAdd(secondArr, secondInt) === "object"));
console.log("second variables have passed: ", whichTwoFunctioningProperly(secondArr, secondInt, secondGoal));

console.log("data type of return value of whichTwoAdd for simple values is object: ", (typeof whichTwoAdd(simpleArr, simpleInt) === "object"));
console.log("simple variables have passed: ", whichTwoFunctioningProperly(simpleArr, simpleInt, simpleGoal));
