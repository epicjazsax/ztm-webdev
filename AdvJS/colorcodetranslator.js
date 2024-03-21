//test variables
//look at turning into dictionary to potentially turn the testing section into a for/of loop
const hex1 = "#000000";
const rgb1 = "rgb(0, 0, 0)";

const hex2 = "#ffffff";
const rgb2 = "rgb(255, 255, 255)";

const hex3 = "#109db4";
const rgb3 = "rgb(16, 157, 180)";

//-----------------------------------------------------------------------------------------
//create function to convert HEX code to RGB
//later add ability to convert either direction with auto-detect format
//use integerVariableName.toString(16) to turn r, g, then b to hex

//check that argument given is a valid HEX color code
const dataIsHex = (colorCode) => (typeof colorCode === "string" && colorCode.length === 7 && colorCode[0] === "#");

//use parseInt(string, radix = 16)
const convertHexToRGB = (hex) => {
	//idea: use function to create array of hex slices
	const [red, green, blue] = [hex.slice(1,3), hex.slice(3,5), hex.slice(5,7)];
	const hexToDecimal = (color) => parseInt(color, 16);
	console.log("sliced hex code is: ", red, green, blue);
	//create array of hex rgb to iterate through with hexToDecimal
	console.log("rgb values are: ", hexToDecimal(red), hexToDecimal(green), hexToDecimal(blue));
};

const convertHexToRGBArrayVersion = (hex) => {
	let hexArray = [];
	let rgb = [];
	const hexToDecimal = (color) => parseInt(color, 16);
	for (let i=1; i<6; i+=2) {
		hexArray.push(hex.slice(i,i+2));
	};
	for (color of hexArray) {
		rgb.push(hexToDecimal(color));
	};
	console.log("hex array is: ", hexArray);
	console.log("rgb array is: ", rgb);
};

convertHexToRGB(hex1);
convertHexToRGB(hex2);
convertHexToRGB(hex3);

convertHexToRGBArrayVersion(hex1);
convertHexToRGBArrayVersion(hex2);
convertHexToRGBArrayVersion(hex3);

const translateColorCode = (code) => {
	if (dataIsHex(code)) {
		console.log("YOU HAVE INPUT A HEX COLOR CODE");
	} else {
		console.log("PLEASE INPUT A HEX COLOR CODE FORMAT '#123456'");
	};
};

//-----------------------------------------------------------------------------------------
//test functions
const testTranslateColorCode = (inputCode, expectation) => {
	let translation = translateColorCode(inputCode);
	console.log(`${inputCode} translates to: `, translation);
	console.log("code has translated correctly: ", translation === expectation);
};

const logIsTestVariableHexCode = (colorCode, variableName) => {
	console.log(`${variableName} is a HEX color code: `, dataIsHex(colorCode));
};

//-----------------------------------------------------------------------------------------
//run tests

logIsTestVariableHexCode(hex1, "hex1");
logIsTestVariableHexCode(rgb1, "rgb1");
logIsTestVariableHexCode(hex2, "hex2");
logIsTestVariableHexCode(rgb2, "rgb2");
logIsTestVariableHexCode(hex3, "hex3");
logIsTestVariableHexCode(rgb3, "rgb3");

testTranslateColorCode(hex1, rgb1);
