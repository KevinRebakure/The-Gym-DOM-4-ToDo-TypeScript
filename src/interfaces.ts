export interface Task {
  id: number;
  task: string;
  completed: boolean;
  onedit: boolean
}

export const tasks: Task[] = [];
