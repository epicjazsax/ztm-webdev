// simple calculator using prompt and alert
function operate() {
	var first = Number(prompt("enter first number"));
	if (!first) {
		alert("MUST SUBMIT A NUMBER");
		setTimeout(operate,0);
		return;
	}
	var operator = prompt("enter operator [+, -, /, *]");
	if (operator != "+" && operator != "-" && operator != "/" && operator != "*") {
		alert("MUST SUBMIT VALID OPERATOR [+, -, /, *]");
		setTimeout(operate,0);
		return;
	}
	var second = Number(prompt("enter second number"));
	if (!second) {
		alert("MUST SUBMIT A NUMBER");
		setTimeout(operate,0);
		return;
	}
	if (operator === "+") {
		answer = first + second;
	} else if (operator === "-") {
		answer = first - second;
	} else if (operator === "/") {
		answer = first / second;
	} else if (operator === "*") {
		answer = first * second;
	}
	alert(`${first} ${operator} ${second} = ${answer}`)
}

// keyless car exercise using prompt to verify age
function driverAge() {
	var age = Number(prompt("enter your age so we can check your suitability"));
	if (age <= 0) {
		alert("THE UNBORN CANNOT DRIVE");
	} else if (age >= 70) {
		alert("SKELETONS CANNOT DRIVE");
	} else {
		if (age > 16) {
			alert("Drive safe you little devil you");
		} else if (age < 16) {
			alert("CHILDREN CANNOT DRIVE");
		} else if (age === 16) {
			alert("Don't crash it'll stay on your insurance for way longer than you'd think necessary");
		} else {
			alert("MUST SUBMIT A VALID AGE");
			setTimeout(driverAge, 1);
			return;
		}
	}
}

//build facebook exercise
var timothy = {
	username: "tinytimmy",
	password: "bigtim",
};

var database = [timothy];
database.push(
	{
		username: "mrmercedes",
		password: "kingofstephen",
	},
	{
		username: "mpoirot",
		password: "curtain",
	},
);

var userList = [];
database.forEach((element) => {
	userList.push(element.username);
});

var newsFeed = [
	{
		username: "",
		timeline: "",
	},
	{
		username: "",
		timeline: "",
	},
	{
		username: "",
		timeline: "",
	},
];

function securityPrompt() {
	var usernamePrompt = prompt("what is your username?");
	var passwordPrompt = prompt("what is your password?");
	function logIn(name, code) {
		if (userList.includes(name)) {
			info = database.find(element => element.username === name);
			if (code === info.password) {
				alert(`congratulations ${name}, you remember your password!`);
			}
			else {
				alert("password does not match our records");
				setTimeout(securityPrompt, 1);
				return;
			}
		}else {
			alert(`username ${name} not found`);
			setTimeout(securityPrompt, 1);
			return;
		}
	}
	logIn(usernamePrompt, passwordPrompt);
}

securityPrompt();
