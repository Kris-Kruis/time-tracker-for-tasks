export interface Task {
  id: string;
  label: string;
  taskTime: number;
  hasDone: boolean;
}

export interface ToolbarButton {
  icon: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface TodoListState {
  tasks: Task[];
  activeTask: Task | null;
  stopwatchStarted: boolean;
}

export interface TodoListAction {
  type: string;
  payload?: any;
}
