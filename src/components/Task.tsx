import { Trash } from 'phosphor-react'
import { ITask } from '../interface/ITask';

import styles from './Task.module.css';



interface TaskProps {
  task: ITask,
  checkedTask: (id: number) => void;
  deleteTask: (id: number) => void;
}


export function Task({ task, checkedTask, deleteTask }: TaskProps) {
  function handleCheckedTask() {
    checkedTask(task.id);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" id={`myCheckbox${task.id}`} checked={task.checked} onClick={handleCheckedTask} />
        <span className={styles.checkmark}></span>
      </label>

      <p
        className={task.checked ? styles.textTaskChecked : styles.textTask}
      >
        {task.text}
      </p>
      <div className={styles.wrapperTrash}>
        <Trash onClick={handleDeleteTask} className={styles.trash} />
      </div>

    </div>
  )
}