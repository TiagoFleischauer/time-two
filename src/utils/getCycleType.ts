import type { TaskModel } from '../models/TaskModel';

export function getCycleType(cycle: number): TaskModel['type'] {
  if (cycle % 8 === 0) return 'longBreak';
  if (cycle % 2 === 0) return 'shortBreak';
  return 'workTime';
}
