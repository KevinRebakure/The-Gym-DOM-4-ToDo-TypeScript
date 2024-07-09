import { Task } from "../interfaces";

let clicked = false;
export default function complete(_tasks: Task[], _id: number) {
  const index = _tasks.findIndex((task) => task.id == _id);
  if (!clicked) {
    _tasks[index].completed = true;
    clicked = true;
  } else {
    _tasks[index].completed = false;
    clicked = false;
  }
}
