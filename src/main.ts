import { tasks } from "./interfaces";
import createTask from "./actions/create";
import populateUI from "./actions/populateUI";

const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("input") as HTMLInputElement;
export const ul = document.getElementById("list") as HTMLUListElement;

let count = 0

form.addEventListener('submit', function(e:SubmitEvent){
    e.preventDefault()
    // console.log('submitted✅')
    createTask(tasks, count, input.value, false)
    // console.log(tasks)
    populateUI(ul, tasks)
    cleanUp()
})


function cleanUp() {
    count++
    input.value = ''
}
