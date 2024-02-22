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

driverAge()