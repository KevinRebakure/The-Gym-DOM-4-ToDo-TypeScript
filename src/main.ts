import createTask from "./actions/create";
import { tasks } from "./interfaces";

const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("input") as HTMLInputElement;
// const ul = document.getElementById("list") as HTMLUListElement;

let count = 0

form.addEventListener('submit', function(e:SubmitEvent){
    e.preventDefault()
    console.log('submitted✅')
    createTask(tasks, count, input.value, false)
    generateId()
    console.log(tasks)
})


function generateId() {
    count++
}