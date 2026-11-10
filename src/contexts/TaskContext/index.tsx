import { createContext } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskModel } from '../../models/TaskModel';

type TaskContextProps = {
  state: TaskStateModel;
  handleStartTask(newTask: TaskModel): void;
  handleInterruptTask(): void;
  handleResetState(): void;
};

export const TaskContext = createContext({} as TaskContextProps);
