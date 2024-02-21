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

operate();