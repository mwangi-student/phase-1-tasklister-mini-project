document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");

  // Event listener to handle form submission
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const taskDescription = document.getElementById(
      "new-task-description"
    ).value;
    const taskPriority = document.getElementById("task-priority").value; // Capture priority

    if (taskDescription.trim() !== "") {
      addTaskToList(taskDescription, taskPriority);
      taskForm.reset(); // Clear the input field after submission
    }
  });
});

// Function to add a task to the list
function addTaskToList(task, priority) {
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = task;

  // Set task color based on priority
  if (priority === "high") {
    newTask.style.color = "red";
  } else if (priority === "medium") {
    newTask.style.color = "yellow";
  } else {
    newTask.style.color = "green";
  }

  // Add delete button to remove task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove(); // Removes the task from the list
  });

  newTask.appendChild(deleteButton); // Append the delete button to the task item
  taskList.appendChild(newTask); // Append the task to the task list
}
