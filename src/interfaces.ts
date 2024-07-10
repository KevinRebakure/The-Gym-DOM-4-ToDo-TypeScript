export interface Task {
  id: number;
  task: string;
  completed: boolean;
  onedit: boolean
  onhover: boolean
}

export const tasks: Task[] = [];
