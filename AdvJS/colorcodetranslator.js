//test variables
const testVariables = {
	"black": ["#000000", "rgb(0, 0, 0)"],
	"white": ["#ffffff", "rgb(255, 255, 255)"],
	"blue": ["#109db4", "rgb(16, 157, 180)"],
};

const hex1 = "#000000";
const rgb1 = "rgb(0, 0, 0)";

const hex2 = "#ffffff";
const rgb2 = "rgb(255, 255, 255)";

const hex3 = "#109db4";
const rgb3 = "rgb(16, 157, 180)";

//-----------------------------------------------------------------------------------------
//check that argument given is a valid HEX or RGB color code
const isItAHexColorCode = (colorCode) => (typeof colorCode === "string" && colorCode.length === 7 && colorCode[0] === "#");
const isItAnRGBColorCode = (colorCode) => (typeof colorCode === "string" && colorCode.slice(0,4) === "rgb(" && colorCode.slice(-1) === ")");
const isItHexOrRGB = (colorCode) => {
	if (isItAHexColorCode(colorCode)) {
		return "HEX"
	} else if (isItAnRGBColorCode(colorCode)) {
		return "RGB"
	};
};

//converts HEX color code to rgb
	//create array of hex values for red, green, blue
	//translate hex array to base 16 and name each color
const convertHexToRGB = (hex) => {
	const hexArray = [hex.slice(1,3), hex.slice(3,5), hex.slice(5,7)];
	const [red, green, blue] = hexArray.map(hexColor => parseInt(hexColor, 16));
	return `rgb(${red}, ${green}, ${blue})`
};

//converts RGB color code to HEX
	//slice the "rgb()" off of the string, then split the integers into array
	//turn rgb values into Number type, change to base 16, and pad with 0 if value isn't already two digits
const convertRGBToHex = (rgb) => {
	const rgbArray = rgb.slice(4,-1).split(", ");
	const [red, green, blue] = rgbArray.map(color => Number(color).toString(16).padStart(2,"0"));
	return `#${red}${green}${blue}`
};

//takes given HEX or RGB color code and translates it to the other type of color code
const translateColorCode = (code) => {
	switch (isItHexOrRGB(code)) {
		case "HEX":
			return convertHexToRGB(code)
		case "RGB":
			return convertRGBToHex(code)
		default:
			return "please input a valid HEX code (ex. #123456) or RGB code (ex. rgb(1,10,100) )"
	};
};

//-----------------------------------------------------------------------------------------
//test functions
const logIsTestVariableHexCode = (testVariable, name) => {
	console.log(`${name}: ${testVariable} is a HEX color code: `, isItAHexColorCode(testVariable));
};

const logIsTestVariableRGBCode = (testVariable, name) => {
	console.log(`${name}: ${testVariable} is an RGB color code: `, isItAnRGBColorCode(testVariable));
};

const testIsItHexOrRGB = (testVariable, name) => {
	console.log(`${name}: ${testVariable} is HEX or RGB color code: `, isItHexOrRGB(testVariable));
};

const testConvertHexToRGB = (hex, rgb, name) => {
	console.log(`${name}: ${hex} has converted to ${rgb} properly with HexToRGB: `, convertHexToRGB(hex) === rgb);
};

const testConvertRGBToHex = (rgb, hex, name) => {
	console.log(`${name}: ${rgb} has converted to ${hex} properly with RGBToHex: `, convertRGBToHex(rgb) === hex);
};

const testTranslateColorCode = (inputCode, expectation, name) => {
	console.log(`${name}: ${inputCode} has converted to ${expectation} properly with TranslateColorCode: `, translateColorCode(inputCode) === expectation);
};

//-----------------------------------------------------------------------------------------
//run tests
console.log("Run all Test Variables to see if they are HEX codes");
for (color in testVariables) {
	logIsTestVariableHexCode(testVariables[color][0], color);
	logIsTestVariableHexCode(testVariables[color][1], color);
};

logIsTestVariableHexCode(hex1, "hex1");
logIsTestVariableHexCode(rgb1, "rgb1");
logIsTestVariableHexCode(hex2, "hex2");
logIsTestVariableHexCode(rgb2, "rgb2");
logIsTestVariableHexCode(hex3, "hex3");
logIsTestVariableHexCode(rgb3, "rgb3");
console.log("-----------------------------------------------------------------------------");
console.log("Run all Test Variables to see if they are RGB codes");
logIsTestVariableRGBCode(hex1, "hex1");
logIsTestVariableRGBCode(rgb1, "rgb1");
logIsTestVariableRGBCode(hex2, "hex2");
logIsTestVariableRGBCode(rgb2, "rgb2");
logIsTestVariableRGBCode(hex3, "hex3");
logIsTestVariableRGBCode(rgb3, "rgb3");
console.log("-----------------------------------------------------------------------------");
console.log("Run all Test Variables and some false values through HEX or RGB function");
testIsItHexOrRGB(hex1, "hex1");
testIsItHexOrRGB(rgb1, "rgb1");
testIsItHexOrRGB(hex2, "hex2");
testIsItHexOrRGB(rgb2, "rgb2");
testIsItHexOrRGB(hex3, "hex3");
testIsItHexOrRGB(rgb3, "rgb3");
testIsItHexOrRGB(1234, "1234");
testIsItHexOrRGB("hello", "hello");
console.log("-----------------------------------------------------------------------------");
console.log("Run all HEX variables through ConvertHexToRGB");
testConvertHexToRGB(hex1, rgb1, "hex1");
testConvertHexToRGB(hex2, rgb2, "hex2");
testConvertHexToRGB(hex3, rgb3, "hex3");
console.log("-----------------------------------------------------------------------------");
console.log("Run all RGB Variables through ConvertRGBToHex");
testConvertRGBToHex(rgb1, hex1, "rgb1");
testConvertRGBToHex(rgb2, hex2, "rgb2");
testConvertRGBToHex(rgb3, hex3, "rgb3");
console.log("-----------------------------------------------------------------------------");
console.log("run all Test Variables through TranslateColorCode");
testTranslateColorCode(hex1, rgb1, "hex1");
testTranslateColorCode(hex2, rgb2, "hex2");
testTranslateColorCode(hex3, rgb3, "hex3");
testTranslateColorCode(rgb1, hex1, "rgb1");
testTranslateColorCode(rgb2, hex2, "rgb2");
testTranslateColorCode(rgb3, hex3, "rgb3");
