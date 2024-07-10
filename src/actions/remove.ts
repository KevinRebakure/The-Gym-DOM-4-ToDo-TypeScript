import { Task } from "../interfaces";

export default function remove(_tasks: Task[], _id: number) {
  const index = _tasks.findIndex((task) => task.id == _id);
  _tasks.splice(index, 1);
}
