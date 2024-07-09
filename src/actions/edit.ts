import { Task } from "../interfaces";
import { input } from "../main";

let clicked = false
export default function edit(_tasks: Task[], _id: number, _editButton:HTMLButtonElement) {
    const index = _tasks.findIndex((task) => task.id == _id);
    if (!clicked) {
        input.value = _tasks[index].task
        clicked = true
    } else {
        if (input.value !== '' && clicked) {
            _tasks[index].task = input.value 
            clicked = false
            input.value = ''
        }
    }
}