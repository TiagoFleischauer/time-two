import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

type TaskActionWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

type TaskActionWithoutPayload = {
  type: TaskActionTypes.INTERRUPT_TASK | TaskActionTypes.RESET_STATE;
};

export type TaskAction = TaskActionWithPayload | TaskActionWithoutPayload;
