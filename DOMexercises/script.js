const taskList = document.getElementById("taskList");
var task = document.querySelectorAll("a");
const taskInput = document.getElementById("newTaskInput");
const taskSubmit = document.getElementById("newTaskSubmit");

//take taskInput.value and add it to taskList ul, then clear taskInput box
function newTask() {
	if (taskInput.value) {
		let task = document.createElement("li");
		task.appendChild(document.createTextNode(taskInput.value));
		taskList.appendChild(task);
		taskInput.value = "";
	}
}
//make Enter key in taskInput box click submit button
taskInput.addEventListener("keydown", function(event) {
	if (event.key ==="Enter") {
		taskSubmit.click();
	}
});
//make submit button add newTask to taskList
taskSubmit.addEventListener("click", newTask);

//toggle task Done class
// function taskDone(task) {
// 	const element = document.querySelector(task);
// 	element.classList.toggle("done");
// }

//use eventListener and function expression to complete clicked task
task.addEventListener("onclick", function() {
	console.log("hello");
});
