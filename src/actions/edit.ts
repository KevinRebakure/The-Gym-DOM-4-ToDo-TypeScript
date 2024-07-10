import { Task } from "../interfaces";
import { input } from "../main";
import populateUI from "./populateUI";

export let clicked = false
export default function edit(_ul:HTMLUListElement, _tasks: Task[], _id: number, _editButton:HTMLImageElement) {
    const index = _tasks.findIndex((task) => task.id == _id);
    if (!clicked) {
        _tasks[index].onedit = true
        input.value = _tasks[index].task
        // _editButton.innerText = 'Done'
        _editButton.src = './src/assets/onedit.png'
        clicked = true
    } else {
        if (input.value !== "" && clicked) {
            _tasks[index].onedit = false
            _tasks[index].task = input.value 
            clicked = false
            // _editButton.innerText = 'Edit'
            _editButton.src = "./src/assets/pen.png";
            input.value = ""
            populateUI(_ul, _tasks)
        }
    }
}

/*
    Attention here. "clicked" is a global variable which all tasks will depend on. As a 
    consequence, you can only edit one task at a time. To swap it so you can edit multiple
    tasks at a time, you can use "_tasks[index].onedit" instead. 
*/