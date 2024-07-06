"use strict";
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("list");
const DELETE = document.getElementById("delete");
const DONE = document.getElementById("done");
const tasks = [];
let id = 0;
form.addEventListener("submit", function (e) {
    console.log("FORM CALLBACK FUNCTION");
    console.log("-".repeat(20));
    e.preventDefault();
    createTask();
    populateUI();
    erase();
});
function erase() {
    console.log("ERASE FUNCTION");
    input.value = "";
    id++;
    console.log("Incremented id:", id);
}
function createTask() {
    console.log("CREATE TASK FUNCTION");
    const TASK = {
        id: id,
        task: input.value,
        completed: false,
    };
    tasks.unshift(TASK);
    console.log("TASKS:", tasks);
}
function populateUI() {
    const elements = tasks.map((task) => {
        console.log("CREATE ELEMENTS FUNCTION");
        const li = document.createElement("li");
        const span = document.createElement("span");
        const doneButton = document.createElement("button");
        li.className = "flex items-center justify-end bg-yellow-100 px-3 py-1";
        li.id = `${task.id}`;
        span.innerText = task.task;
        span.id = "task";
        span.className = "mr-auto";
        doneButton.innerText = "Done";
        doneButton.id = "done";
        doneButton.className = "border bg-blue-500 px-3 py-1 text-white";
        doneButton.addEventListener("click", checkTask);
        li.append(span, doneButton);
        console.log(li);
        return li;
    });
    elements.reverse();
    ul.innerHTML = "";
    elements.forEach((element) => {
        ul.appendChild(element);
    });
}
function checkTask() {
    console.log("😂😂😂");
}
