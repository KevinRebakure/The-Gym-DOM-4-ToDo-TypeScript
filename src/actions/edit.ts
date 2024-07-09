import { Task } from "../interfaces";
import { input } from "../main";
import populateUI from "./populateUI";
// import populateUI from "./populateUI";

export let clicked = false
export default function edit(_ul:HTMLUListElement, _tasks: Task[], _id: number, _editButton:HTMLButtonElement) {
    const index = _tasks.findIndex((task) => task.id == _id);
    if (!clicked) {
        input.value = _tasks[index].task
        _editButton.innerText = 'Done'
        clicked = true
    } else {
        if (input.value !== "" && clicked) {
            _tasks[index].task = input.value 
            clicked = false
            _editButton.innerText = 'Edit'
            input.value = ""
            console.log(_tasks[index])
            populateUI(_ul, _tasks)
        }
    }
}