import { Task } from "../interfaces";
import { ul } from "../main";
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
        span.innerText = task.task;

        const editButton = document.createElement("button");
        editButton.className = "border bg-green-500 px-3 py-1 text-white";
        if (!task.onedit) {
            editButton.innerText = "Edit"
        } else {
            editButton.innerText = "Done"
        }
        editButton.addEventListener('click', function(){
            edit(ul, _tasks, task.id, editButton)
        })

        const completeButton = document.createElement("button");
        completeButton.className = "border bg-blue-500 px-3 py-1 text-white";
        if (!task.completed) {
            completeButton.innerText = "Check"
            span.className = 'mr-auto'
        } else {
            completeButton.innerText = "Completed"
            span.className = 'mr-auto line-through'
        }
        completeButton.addEventListener('click', function() {
            complete(_tasks, task.id)
            populateUI(_ul, _tasks)
        })

        const deleteButton = document.createElement("button");
        deleteButton.className = "border bg-red-500 px-3 py-1 text-white";
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", function() {
             remove(_tasks, task.id),
             populateUI(_ul, _tasks)
        });

        li.append(span, editButton, completeButton, deleteButton);
        _ul.append(li)
    })
}