//test variables
//look at turning into dictionary to potentially turn the testing section into a loop
const hex1 = "#000000";
const rgb1 = "rgb(0, 0, 0)";

const hex2 = "#ffffff";
const rgb2 = "rgb(255, 255, 255)";

const hex3 = "#109db4";
const rgb3 = "rgb(16, 157, 180)";

//-----------------------------------------------------------------------------------------
//note for rgbToHex: use integerVariableName.toString(16) to turn r, g, then b to hex

//check that argument given is a valid HEX color code
const isItAHexColorCode = (colorCode) => (typeof colorCode === "string" && colorCode.length === 7 && colorCode[0] === "#");

//converts HEX color code to rgb
const convertHexToRGB = (hex) => {
	const hexArray = [hex.slice(1,3), hex.slice(3,5), hex.slice(5,7)];
	const [red, green, blue] = hexArray.map(hexColor => parseInt(hexColor, 16));
	return `rgb(${red}, ${green}, ${blue})`
};

//potentially add a switch for hex/rgb/default instead of if/else
const translateColorCode = (code) => {
	if (isItAHexColorCode(code)) {
		return convertHexToRGB(code)
	} else {
		console.log("PLEASE INPUT A HEX COLOR CODE WITH FORMAT '#123456'");
	};
};

//-----------------------------------------------------------------------------------------
//test functions
const logIsTestVariableHexCode = (testVariable, name) => {
	console.log(`${name}: ${testVariable} is a HEX color code: `, isItAHexColorCode(testVariable));
};

const testConvertHexToRGB = (hex, rgb, name) => {
	console.log(`${name}: ${hex} has converted to ${rgb} properly with HexToRGB: `, convertHexToRGB(hex) === rgb);
};

const testTranslateColorCode = (inputCode, expectation, name) => {
	console.log(`${name}: ${inputCode} has converted to ${expectation} properly with TranslateColorCode: `, translateColorCode(inputCode) === expectation);
};

//-----------------------------------------------------------------------------------------
//run tests

logIsTestVariableHexCode(hex1, "hex1");
logIsTestVariableHexCode(rgb1, "rgb1");
logIsTestVariableHexCode(hex2, "hex2");
logIsTestVariableHexCode(rgb2, "rgb2");
logIsTestVariableHexCode(hex3, "hex3");
logIsTestVariableHexCode(rgb3, "rgb3");

testConvertHexToRGB(hex1, rgb1, "hex1");
testConvertHexToRGB(hex2, rgb2, "hex2");
testConvertHexToRGB(hex3, rgb3, "hex3");

testTranslateColorCode(hex1, rgb1, "hex1");
testTranslateColorCode(hex2, rgb2, "hex2");
testTranslateColorCode(hex3, rgb3, "hex3");
