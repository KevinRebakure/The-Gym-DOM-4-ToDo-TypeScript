import createTask from "./actions/create";
import { tasks } from "./interfaces";
const form = document.getElementById("form");
const input = document.getElementById("input");
let count = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submitted✅');
    createTask(tasks, count, input.value, false);
    generateId();
    console.log(tasks);
});
function generateId() {
    count++;
}
