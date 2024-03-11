//goal = [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591];
const given = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const secondTest = [32,12,15,32,3,8473,33,32,15,9,0];
const thirdTest = [12,-21,0,12,0,-1,15,3];
const letterTest = [3,"K",3,15,0,-23,-3,12,"a","k","a"];
const stringTest = [6,21,-2,"j","O","h",21,0,6,5465,"O","hello",-15,0,21,"hello","how are you","All for one","one for all",6];
let newArray = [];

//draft - second idea
const sortAndNest = (arr) => {

	//sort given array strings then numbers, reset newArray, and define necessary variables
	const sortedArr = arr.toSorted().toSorted((a,b) => a-b);
	newArray = [];
	let repetitions;
	const findRepeats = (n, i, arr) => n === arr[0];

	//loop through sorted array
	while (sortedArr.length > 0) {
		repetitions = sortedArr.filter(findRepeats).length;
		console.log("sortedArr", sortedArr);
		console.log("repetitions", repetitions);

		//if there are any matches to sortedArr[0], add all as nested array
		//else just add the value without nesting
		if (repetitions > 1) {
			newArray = newArray.concat([sortedArr.splice(0, repetitions)]);
		} else {
			newArray = newArray.concat(sortedArr.splice(0, 1));
		}
	}
	return newArray
}

sortAndNest(given);
sortAndNest(secondTest);
sortAndNest(thirdTest);
sortAndNest(letterTest);

//function to flatten all single-number nested arrays at end
//other option is check for single numbers before concat
const smallFlat = (arr) => {
	for (nested of arr) {
		if (nested.length = 1) {
			return nested[0]
		}
	}
}


//const lowToHigh = (arr) => arr.toSorted((a,b) => a-b);
//const highToLow = (arr) => arr.toSorted((a,b) => b-a);
//if statement after arrow is positive, b is sorted before a (sorting high-to-low)

//first idea: create function to pop (or shift) numbers one at a time from sorted array into new smaller array
// ---upon finding a new number, start a new array
// ---at end, concat all arrays back together to get full array with nested arrays of each number

//second idea: use arrayName.filter(num => {if (num === arrayName[-1]) return num}) or something similar
// ---grab all of a given number at a time and create array with that
// ---main problem: how to make sure it doesn't add the same array multiple times?

//third idea: use Object. or Map.groupBy()
// ---problem: sounds like it's for objects not arrays?

//fourth idea: use Array(quantity).fill(value)
// ---get quantity and value from main list (is sorting necessary?)
// ---make sure to skip to next value in list to avoid making a quantity amount of arrays for each value

//fifth idea: use slice to grab numbers of sorted array
// ---might just be filter idea but worse
// ---yet again how to get items out of original array when copying to new one
