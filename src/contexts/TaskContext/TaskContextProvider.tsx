import { useReducer } from 'react';

import { TaskContext } from '.';
import { initialTaskState } from './initialTaskState';

import { taskReducer } from './taskReducer';
import { TaskActionTypes } from './taskAction';
import type { TaskModel } from '../../models/TaskModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  function handleStartTask(newTask: TaskModel) {
    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  function handleResetState() {
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <TaskContext.Provider
      value={{ state, handleStartTask, handleInterruptTask, handleResetState }}
    >
      {children}
    </TaskContext.Provider>
  );
}
