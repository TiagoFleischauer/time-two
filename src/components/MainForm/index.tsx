import { useRef } from 'react';

import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';

import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';

import { getNextCycle } from '../../utils/getNextCycle';
import { getCycleType } from '../../utils/getCycleType';
import { formatSecondsToMinutes } from '../../utils/formatTime';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getCycleType(nextCycle);

  const nextCycleDuration = state.config[nextCycleType];

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Por favor, insira um nome para a tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = state.config[nextCycleType] * 60;

    setState(prev => ({
      ...prev,
      config: { ...prev.config },
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining: nextCycleDuration * 60,
      formattedTime: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prev.tasks, newTask],
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          labelText='task:'
          type='text'
          placeholder='Ex.: limpar o quarto'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {nextCycleDuration} min.</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
