const taskList = document.getElementById("taskList");
var task = document.querySelectorAll("li");
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

//click to add "done" strike-through class to task
taskList.addEventListener("click", (event) => {
	const targetId = event.target.getAttribute("id");
	const currentTask = document.getElementById(targetId);
	currentTask.classList.toggle("done");
});
