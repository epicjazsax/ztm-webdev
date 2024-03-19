//test variables
//is there any better way to deal with hex and/or rgb values than as strings?
//ex. array for rgb?
//note: will probably need a stringToArray function since input for translateColorCode should probably only take one type of data (i.e. string)
const hex1 = "#000000";
const rgb1 = "0, 0, 0";

const hex2 = "#ffffff";
const rgb2 = "255, 255, 255";

const hex3 = "#109db4";
const rgb3 = "16, 157, 180";

//-----------------------------------------------------------------------------------------
//function to convert HEX code to RGB
//later add ability to convert either direction with auto-detect format
const translateColorCode = (inputCode) => {};

//-----------------------------------------------------------------------------------------
//tests
const testTranslateColorCode = (inputCode, expectation) => {
	let translation = translateColorCode(inputCode);
	console.log(`${inputCode} translates to: `, translation);
	console.log("code has translated correctly: ", translation === expectation);
};

testTranslateColorCode(hex1, rgb1);
