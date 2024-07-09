import { Task } from "../interfaces";

export default function createTask(
  _tasks: Task[],
  _id: number,
  _task: string,
  _completed: boolean,
) {
  _tasks.unshift({
    id: _id,
    task: _task,
    completed: _completed,
  });
}
