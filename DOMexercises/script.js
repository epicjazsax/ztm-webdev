const todoList = document.getElementById("todoList");
const taskInput = document.getElementById("newTaskInput");
const taskSubmit = document.getElementById("newTaskSubmit");

//function to delete row, called by trash can in HTML
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  todoList.deleteRow(i);
}

//function to add taskInput.value to todoList table, then clear taskInput box
function newTask() {
	if (taskInput.value) {
		let row = todoList.insertRow();
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);

		//set up cell1 (delete button cell)
		let trashCell = document.createElement("input");
		trashCell.type = "button";
		trashCell.value = "🗑";
		trashCell.setAttribute("onclick", "deleteRow(this)");
		cell1.appendChild(trashCell);

		//set up cell2 (task cell)
		let taskCell = document.createElement("div");
		taskCell.appendChild(document.createTextNode(taskInput.value));
		cell2.appendChild(taskCell);
		cell2.addEventListener("click", function() {
			cell2.classList.toggle("done");
		});

		//clear taskInput box
		taskInput.value = "";
	}
}

//make submit button run newTask function to add taskInput to todoList
taskSubmit.addEventListener("click", newTask);

//make Enter key in taskInput box click submit button
taskInput.addEventListener("keydown", function(event) {
	if (event.key ==="Enter") {
		taskSubmit.click();
	}
});

//click to add "done" strike-through class to task
document.querySelectorAll("table td")
.forEach(e => e.addEventListener("click", function() {
	e.classList.toggle("done");
}));
