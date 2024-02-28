const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("newTaskInput");
const taskSubmit = document.getElementById("newTaskSubmit");
const trashCans = document.getElementById("trashCans");

//take taskInput.value and add it to taskList ul, then clear taskInput box
function newTask() {
	if (taskInput.value) {
		let task = document.createElement("li");
		task.appendChild(document.createTextNode(taskInput.value));
		taskList.appendChild(task);
		//clear input box
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
	let targetId = event.target.getAttribute("id");
	if (targetId != "taskList") {
		let currentTask = document.getElementById(targetId);
		currentTask.classList.toggle("done");
	}
});

//click trashcan icon to delete its related task
trashCans.addEventListener("click", (event) => {
	let trashId = event.target.getAttribute("id");
	if (trashId != "trashCans") {
		let trashIcon = document.getElementById(trashId);
		let taskId = "task" + trashId.slice(4);
		let task = document.getElementById(taskId);
		trashIcon.remove();
		task.remove();
		console.log(`${taskId} removed`);
	}
})
