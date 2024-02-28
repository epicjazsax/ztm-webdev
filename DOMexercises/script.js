const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("newTaskInput");
const taskSubmit = document.getElementById("newTaskSubmit");
const trashCans = document.getElementById("trashCans");

// //take taskInput.value and add it to taskList ul, then clear taskInput box
// function newTask() {
// 	if (taskInput.value) {
// 		let task = document.createElement("li");
// 		task.appendChild(document.createTextNode(taskInput.value));
// 		taskList.appendChild(task);
// 		//clear input box
// 		taskInput.value = "";
// 	}
// }
// //make Enter key in taskInput box click submit button
// taskInput.addEventListener("keydown", function(event) {
// 	if (event.key ==="Enter") {
// 		taskSubmit.click();
// 	}
// });
// //make submit button add newTask to taskList
// taskSubmit.addEventListener("click", newTask);

//click to add "done" strike-through class to task
document.querySelectorAll("tr td:nth-child(even)")
.forEach(e => e.addEventListener("click", function() {
	e.classList.toggle("done");
}));

//function to delete row, called by trash can in HTML
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("todoList").deleteRow(i);
}
