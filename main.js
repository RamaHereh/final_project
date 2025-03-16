document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");

  document.getElementById("addTask").addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = "✔";
    checkBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "×";
    removeBtn.addEventListener("click", function () {
      li.remove();
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    taskActions.appendChild(checkBtn);
    taskActions.appendChild(removeBtn);

    li.appendChild(taskActions);
    li.appendChild(span);
    taskList.appendChild(li);

    taskInput.value = "";
  });
});
