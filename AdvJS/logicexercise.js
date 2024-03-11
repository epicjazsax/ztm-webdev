//goal = [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591];
const given = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const zeroTest = [32,12,15,32,3,8473,33,32,15,9,0];
const negativeTest = [12,-21,0,12,0,-1,15,3];
const letterTest = [3,"K",3,15,0,-23,-3,12,"a","k","a"];
const stringTest = [6,21,-2,"j","O","h",21,0,6,5465,"O","hello",-15,0,21,"hello","how are you","All for one","one for all",6];
const arrTest = [2,["beta","charlie"],"a",["echo",11],14,[3,"golf"],"h",[5],2,[4,5,6],"hello",0,[2,2,2],"Amazing",[2],["hello"],[12],[5,5,5],["L","k"]];
let newArray = [];

//take given array and sort it low-to-high and group any repeating values in a nested array
const sortAndNest = (arr) => {

	//sort given array low-to-high with strings at end, reset newArray, and define necessary variables
	const sortedArr = arr.toSorted().toSorted((a,b) => a-b);
	newArray = [];
	let repetitions;
	const findRepeats = (n, i, arr) => n === arr[0];

	//if there are any matches to sortedArr[0], add all as nested array(thus the bracekts in concat([]) under if statement)
	//else just add the value without nesting
	while (sortedArr.length > 0) {
		repetitions = sortedArr.filter(findRepeats).length;
		if (repetitions > 1) {
			newArray = newArray.concat([sortedArr.splice(0, repetitions)]);
		} else {
			newArray = newArray.concat(sortedArr.splice(0, 1));
		}
	}
	//since repetitions searches entire array but splice takes from beggining,
	//possible issues could arise if all instances of a value aren't grouped together properly
	return newArray
}

//idea: function to flatten all single-value nested arrays at end (not tested)
// const smallFlat = (arr) => {
// 	for (nested of arr) {
// 		if (nested.length = 1) {
// 			return nested[0]
// 		}
// 	}
// }

//idea: add all nested arrays and single values before sorting
// ---arr.filter(findRepeats) for array of all instances of given value
// ---arr.filter(value => value !=== insert_arr[0]_value_here) to give arr without the values that were just filtered out
// ---issue: sorting arrays where array[0] is a string seems to sort correctly by array[0] BUT
// --- ---arrays with a length > 1 and array[0] as an integer are sorted as being larger than single integers
