import { Task } from "../interfaces";
import remove from "./remove";

export default function populateUI(_ul:HTMLUListElement, _tasks:Task[]) {
    _ul.innerHTML = ''
    _tasks.map((task)=>{
        const li = document.createElement("li");
        li.id = task.id.toString() 
        li.className = "flex items-center justify-end bg-yellow-100 px-3 py-1";

        const span = document.createElement("span");
        span.className = "mr-auto";
        span.innerText = task.task;

        const doneButton = document.createElement("button");
        doneButton.className = "border bg-blue-500 px-3 py-1 text-white";
        doneButton.innerText = "Done"

        const deleteButton = document.createElement("button");
        deleteButton.className = "border bg-red-500 px-3 py-1 text-white";
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", function() {
             remove(_tasks, task.id),
             populateUI(_ul, _tasks)
        });

        li.append(span, deleteButton, doneButton);
        _ul.append(li)
    })
}