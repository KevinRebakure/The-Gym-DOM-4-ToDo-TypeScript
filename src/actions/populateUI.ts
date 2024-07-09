import { Task } from "../interfaces";
import complete from "./complete";
import edit from "./edit";
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

        const editButton = document.createElement("button");
        editButton.className = "border bg-green-500 px-3 py-1 text-white";
        editButton.innerText = "Edit"
        editButton.addEventListener('click', function(){
            edit(_tasks, task.id, editButton)
            // populateUI(_ul, _tasks)
        })

        const checkButton = document.createElement("button");
        checkButton.className = "border bg-blue-500 px-3 py-1 text-white";
        checkButton.innerText = "Check"
        checkButton.addEventListener('click', function() {
            complete(task.id, checkButton)
        })

        const deleteButton = document.createElement("button");
        deleteButton.className = "border bg-red-500 px-3 py-1 text-white";
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", function() {
             remove(_tasks, task.id),
             populateUI(_ul, _tasks)
        });

        // li.append(span, editButton, deleteButton);
        li.append(span, editButton, checkButton, deleteButton);
        _ul.append(li)
    })
}