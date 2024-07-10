import { tasks } from "./interfaces";
import createTask from "./actions/create";
import populateUI from "./actions/populateUI";

const form = document.getElementById("form") as HTMLFormElement;
export const input = document.getElementById("input") as HTMLInputElement;
export const ul = document.getElementById("list") as HTMLUListElement;

let count = 0

form.addEventListener('submit', function(e:SubmitEvent){
    e.preventDefault()
    createTask(tasks, count, input.value, false, false, false)
    populateUI(ul, tasks)
    cleanUp()
})


function cleanUp() {
    count++
    input.value = ''
}
