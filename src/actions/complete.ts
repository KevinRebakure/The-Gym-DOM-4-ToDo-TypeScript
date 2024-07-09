import { Task } from "../interfaces";

let clicked = false;
export default function complete(_tasks: Task[], _id: number) {
  const index = _tasks.findIndex((task) => task.id == _id);
  if (!clicked) {
    _tasks[index].completed = true;
    clicked = true;
    _tasks.push(_tasks[index])
    _tasks.splice(index, 1)
  } else {
    _tasks[index].completed = false;
    clicked = false;
  }
}
