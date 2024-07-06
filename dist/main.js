"use strict";
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("list");
const DELETE = document.getElementById("delete");
const DONE = document.getElementById("done");
const tasks = [];
let id = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const TASK = {
        id: id,
        task: input.value,
        completed: false,
    };
    tasks.push(TASK);
    console.log(tasks);
    createTask(id);
    input.value = "";
    id++;
    console.log(id);
});
function createTask(getId) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");
    li.className = "flex items-center justify-end bg-yellow-100 px-3 py-1";
    li.id = `${getId}`;
    console.log(li);
    span.innerText = tasks[getId].task;
    span.id = "task";
    span.className = "mr-auto";
    deleteButton.innerText = "Delete";
    deleteButton.id = "delete";
    deleteButton.className = "border bg-red-500 px-3 py-1 text-white";
    deleteButton.addEventListener("click", deleteTask);
    doneButton.innerText = "Done";
    doneButton.id = "done";
    doneButton.className = "border bg-blue-500 px-3 py-1 text-white";
    li.append(span, deleteButton, doneButton);
    ul.prepend(li);
}
function deleteTask(e) {
    console.log("Parent element (Li) id:", e.target.parentElement.id);
    ul.removeChild(e.target.parentElement);
    console.log(typeof e.target.parentElement.id);
    const removeIndex = tasks.findIndex((task) => task.id === parseInt(e.target.parentElement.id));
    tasks.splice(removeIndex, 1);
    console.log("Remove index:", removeIndex);
    console.log("All tasks", tasks);
}
