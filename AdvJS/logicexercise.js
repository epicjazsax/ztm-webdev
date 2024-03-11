//goal = [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591];
const given = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const lowFirst = given.toSorted((a,b) => a-b);
const highFirst = given.toSorted((a,b) => b-a);

//move latter or both of these to smaller scope eventually
let newArray = [];
let repetitions;

//grab all elements in array that match array[0]
//only used to find How Many repeats there are (is there a more elegant solution?)
const findRepeats = (n, i, arr) => {
	return n === arr[0]
};

//find how many repeats of array[0], then splice them out as nested array
repetitions = lowFirst.filter(findRepeats).length;
newArray = newArray.concat([lowFirst.splice(0, repetitions)]);

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
