import { Task } from "../interfaces";
import { input } from "../main";

export default function createTask(
  _tasks: Task[],
  _id: number,
  _task: string,
  _completed: boolean,
) {
  if (input.value !== "") {
    _tasks.unshift({
      id: _id,
      task: _task,
      completed: _completed,
    });
  }
}
