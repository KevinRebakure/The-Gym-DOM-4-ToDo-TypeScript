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
        li.addEventListener("mouseenter", function () {
          task.onhover = true;
          editButton.classList.remove("hidden");
          deleteButton.classList.remove("hidden");
        });

        li.addEventListener("mouseleave", function () {
          task.onhover = false;
          editButton.classList.add("hidden");
          deleteButton.classList.add("hidden");
        });



    const span = document.createElement("span");
    span.innerText = task.task;

    // const editButton = document.createElement("button");
    const editButton = document.createElement("img");
    editButton.src = "./src/assets/pen.png";
    // editButton.className = "bg-green-500 px-3 py-1 text-white";
    // editButton.className = "size-8";
    editButton.className = task.onhover
      ? "transition-all duration-100 size-8 opacity-70 block"
      : "transition-all duration-100 size-8 opacity-70 hidden";
    // if (!task.onedit) {
    //   //   editButton.innerText = "Edit";
    //   editButton.src = "./src/assets/pen.png";
    // } else {
    //   //   editButton.innerText = "Done";
    //   editButton.src = "./src/assets/onedit.png";
    // }
    editButton.addEventListener("click", function () {
      edit(ul, _tasks, task.id, editButton);
      console.log(editButton);
      console.log(task);
    });

    // const completeButton = document.createElement("button");
    const completeButton = document.createElement("img");
    // completeButton.className = "bg-blue-500 px-3 py-1 text-white";
    completeButton.className = "size-8";
    if (!task.completed) {
      // completeButton.innerText = "Check";
      completeButton.src = "./src/assets/check.png";
      span.className = "mr-auto bg-white py-2 px-5 w-full rounded-lg";
    } else {
      // completeButton.innerText = "Completed";
      completeButton.src = "./src/assets/uncheck.png";
      span.className =
        "mr-auto bg-white py-2 px-5 w-full rounded-lg line-through";
    }
    completeButton.addEventListener("click", function () {
      complete(_tasks, task.id);
      populateUI(_ul, _tasks);
    });

    // const deleteButton = document.createElement("button");
    const deleteButton = document.createElement("img");
    // deleteButton.className = "bg-red-500 px-3 py-1 text-white";
    // deleteButton.className = 'size-8 opacity-70'
    deleteButton.className = task.onhover
      ? "transition-all duration-100 size-8 opacity-70 block"
      : "transition-all duration-100 size-8 opacity-70 hidden";
    // deleteButton.innerText = "Delete";
    deleteButton.src = "./src/assets/delete.png";
    deleteButton.addEventListener("click", function () {
      remove(_tasks, task.id), populateUI(_ul, _tasks);
    });

    li.append(editButton, span, completeButton, deleteButton);
    _ul.append(li);
  });
}
