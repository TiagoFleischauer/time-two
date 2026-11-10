import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatTime';
import { TaskActionTypes, type TaskAction } from './taskAction';
import { getNextCycle } from '../../utils/getNextCycle';

export function taskReducer(
  state: TaskStateModel,
  action: TaskAction,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK:
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        secondsRemaining,
        activeTask: newTask,
        currentCycle: nextCycle,
        formattedTime: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    case TaskActionTypes.INTERRUPT_TASK:
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedTime: '00:00',
        tasks: state.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return {
              ...task,
              interruptedDate: Date.now(),
            };
          }
          return task;
        }),
      };
    case TaskActionTypes.RESET_STATE:
      return state;
  }
}
