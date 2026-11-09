import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getCycleType } from '../../utils/getCycleType';
import { getNextCycle } from '../../utils/getNextCycle';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const list = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <label>Ciclos:</label>
      <div className={styles.cycleDots}>
        {list.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getCycleType(nextCycle);

          return (
            <span
              key={index}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            />
          );
        })}
      </div>
    </div>
  );
}
