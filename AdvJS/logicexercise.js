//unordered arrays for testing
const given = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const zeroTest = [32,12,15,32,3,8473,33,32,15,9,0];
const negativeTest = [12,-21,0,12,0,-1,15,3];
const letterTest = [3,"K",3,15,"3",0,-23,-3,12,"a","k","a"];
const stringTest = [6,21,-2,"j","O","h",21,0,6,5465,"O","hello",-15,0,21,"hello","how are you","All for one","one for all",6];

//expected output for related unordered array
const givenGoal = [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591];
const zeroTestGoal = [0,3,9,12,[15,15],[32,32,32],33,8473];
const negativeTestGoal = [-21,-1,[0,0],3,[12,12],15];
const letterTestGoal = [-23,-3,0,[3,3],"3",12,15,"K",["a","a"],"k"];
const stringTestGoal = [-15,-2,[0,0],[6,6,6],[21,21,21],5465,"All for one",["O","O"],"h",["hello","hello"],"how are you","j","one for all"];

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//take given array of strings and/or numbers and sort it low-to-high
const sortArray = (arr) => arr.toSorted().toSorted((a,b) => a-b);

//nest any repeating values together
const nestMatchesInArray = (arr) => {
	let oldArray = arr;
	let newArray = [];
	const findAllMatches = (n, i, arr) => n === arr[0];

	//add oldArray[0] and any matching values from oldArray into matches array
	//then concat matches as nested array to newArray
	while (oldArray.length) {
		matches = oldArray.filter(findAllMatches);
		newArray = newArray.concat([matches]);
		oldArray = oldArray.filter(value => value !== oldArray[0]);
	}
	return newArray
};

//flatten any nested arrays with only one element in them
const flattenSingleElementNestedArrays = (arr) => {
	let flattenedArray = arr.map(n => (n.length === 1) ? n[0] : n);
	return flattenedArray
};

//run a given array through sorting, nesting, and flattening functions above
const sortNestAndFlatten = (arr) => {
	return flattenSingleElementNestedArrays(nestMatchesInArray(sortArray(arr)))
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// single-function version of above sortNestAndFlatten()
const isolatedSortNestFlatten = (arr) =>{
	let sortedArray = arr.toSorted().toSorted((a,b) => a-b);
	let arrayAfterNesting = [];
	const findAllMatches = (n, i, arr) => n === arr[0];

	//add sortedArray[0] and any matching values from sortedArray into matches array
	//then concat matches as nested array to arrayAfterNesting
	while (sortedArray.length) {
		matches = sortedArray.filter(findAllMatches);
		arrayAfterNesting = arrayAfterNesting.concat([matches]);
		sortedArray = sortedArray.filter(value => value !== sortedArray[0]);
	};

	//flatten any nested arrays with only one element in them
	arrayAfterNesting = arrayAfterNesting.map(n => (n.length === 1) ? n[0] : n);
	return arrayAfterNesting
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//adapted from stack overflow user xdazz at thread
//https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
//checks that both arrays are of same length and the value at each index is the same for both
//modified to work with any-depth nested arrays via recursion and turned into function for reusability
const sameArrayVerifier = (array1, array2) => {
	return (array1.length === array2.length) && array1.every(function(element, index) {
		return (typeof element === "object") ? (sameArrayVerifier(element, array2[index])) : (element === array2[index]);
	});
};

//wrap sorting array, verifying against goal array, and logging result in function to make running test cleaner
const verifySortNestAndFlatten = (array, goal) => {
	let sortedArray = sortNestAndFlatten(array);
	console.log(sortedArray);
	console.log("Array has sorted and nested correctly: ", sameArrayVerifier(goal, sortedArray));
};

const verifyIsolatedSortNestFlatten = (array, goal) => {
	let sortedArray = isolatedSortNestFlatten(array);
	console.log(sortedArray);
	console.log("Array has sorted and nested correctly: ", sameArrayVerifier(goal, sortedArray));
};

//run tests
verifySortNestAndFlatten(given, givenGoal);
verifySortNestAndFlatten(zeroTest, zeroTestGoal);
verifySortNestAndFlatten(negativeTest, negativeTestGoal);
verifySortNestAndFlatten(letterTest, letterTestGoal);
verifySortNestAndFlatten(stringTest, stringTestGoal);
verifySortNestAndFlatten(given, zeroTestGoal); // expect return false

verifyIsolatedSortNestFlatten(given, givenGoal);
verifyIsolatedSortNestFlatten(zeroTest, zeroTestGoal);
verifyIsolatedSortNestFlatten(negativeTest, negativeTestGoal);
verifyIsolatedSortNestFlatten(letterTest, letterTestGoal);
verifyIsolatedSortNestFlatten(stringTest, stringTestGoal);
verifyIsolatedSortNestFlatten(given, zeroTestGoal); // expect return false
