import { Task } from "../interfaces";
import { ul } from "../main";
import complete from "./complete";
import edit from "./edit";
import remove from "./remove";

export default function populateUI(_ul: HTMLUListElement, _tasks: Task[]) {
  _ul.innerHTML = "";
  _tasks.map((task) => {
    const li = document.createElement("li");
    li.id = task.id.toString();
    li.className = "flex items-center gap-2 justify-start px-3 py-1";

    const span = document.createElement("span");
    span.innerText = task.task;

    const editButton = document.createElement("img");
    editButton.src = "./src/assets/pen.png";
    editButton.className = "size-8";
    if (!task.onedit) {
      editButton.src = "./src/assets/pen.png";
    } else {
      editButton.src = "./src/assets/onedit.png";
    }
    editButton.addEventListener("click", function () {
      edit(ul, _tasks, task.id, editButton);
      console.log(editButton);
      console.log(task);
    });

    const completeButton = document.createElement("img");
    completeButton.className = "size-8";
    if (!task.completed) {
      completeButton.src = "./src/assets/check.png";
      span.className = "mr-auto bg-white py-2 px-5 w-full rounded-lg";
    } else {
      completeButton.src = "./src/assets/uncheck.png";
      span.className =
        "mr-auto bg-white py-2 px-5 w-full rounded-lg line-through";
    }
    completeButton.addEventListener("click", function () {
      complete(_tasks, task.id);
      populateUI(_ul, _tasks);
    });

    const deleteButton = document.createElement("img");
    deleteButton.className = "size-8 opacity-70";
    deleteButton.src = "./src/assets/delete.png";
    deleteButton.addEventListener("click", function () {
      remove(_tasks, task.id), populateUI(_ul, _tasks);
    });

    li.append(editButton, span, completeButton, deleteButton);
    _ul.append(li);
  });
}
