const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("input") as HTMLInputElement;
const ul = document.getElementById("list") as HTMLUListElement;

const DELETE = document.getElementById("delete") as HTMLButtonElement;
const DONE = document.getElementById("done") as HTMLButtonElement;

const tasks: Task[] = [];
let id = 0;

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

form.addEventListener("submit", function (e) {
  console.log("FORM CALLBACK FUNCTION");
  console.log("-".repeat(20));

  e.preventDefault();

  createTask();

  populateUI();

  erase();
});

// Erase, Generate id

function erase() {
  console.log("ERASE FUNCTION");
  input.value = "";
  id++;
  console.log("Incremented id:", id);
}

// Create task

function createTask() {
  console.log("CREATE TASK FUNCTION");

  const TASK: Task = {
    id: id,
    task: input.value,
    completed: false,
  };

  tasks.unshift(TASK);

  console.log("TASKS:", tasks);
}

// Populate UI

function populateUI() {
  const elements = tasks.map((task) => {
    console.log("CREATE ELEMENTS FUNCTION");
    const li = document.createElement("li");
    const span = document.createElement("span");
    // const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");

    li.className = "flex items-center justify-end bg-yellow-100 px-3 py-1";
    li.id = `${task.id}`;

    span.innerText = task.task;
    span.id = "task";
    span.className = "mr-auto";

    // deleteButton.innerText = "Delete";
    // deleteButton.id = "delete";
    // deleteButton.className = "border bg-red-500 px-3 py-1 text-white";
    // deleteButton.addEventListener("click", deleteTask);

    doneButton.innerText = "Done";
    doneButton.id = "done";
    doneButton.className = "border bg-blue-500 px-3 py-1 text-white";
    doneButton.addEventListener("click", checkTask);

    // li.append(span, deleteButton, doneButton);
    li.append(span, doneButton);
    console.log(li);
    return li.outerHTML;
  });
  ul.innerHTML = elements.join("");
  console.log(elements);
}

// Delete task

// function deleteTask(e: any) {
//   console.log("DELETE TASK FUNCTION");
//   // console.log("Parent element (Li) id:", e.target.parentElement.id);
//   // ul.removeChild(e.target.parentElement);
//   // console.log(typeof e.target.parentElement.id);
//   console.log(e.target.parentElement.id)
//   console.log(e.target.parentElement.id)
//   console.log(e.target.parentElement.id)
//   console.log(e.target.parentElement.id)
//   console.log(e.target.parentElement.id)
//   const removeIndex = tasks.findIndex(
//     (task: Task) => task.id === parseInt(e.target.parentElement.id),
//   );
//   tasks.splice(removeIndex, 1);
//   // console.log("Remove index:", removeIndex);
//   // console.log("All tasks", tasks);
//   populateUI()
// }

function checkTask() {
  console.log("😂😂😂");
}
