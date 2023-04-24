import { useState } from 'react';

import clipboard from '../assets/clipboard.svg';
import styles from './TaskControl.module.css';

export function TaskControl() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.contentHeader}>
        <header className={styles.header}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </header>
      </div>
      <div className={styles.content}>
        {
          tasks.length > 0
            ?
            <p>oiiiii</p>
            :
            <div className={styles.empty}>
              <div className={styles.imgClipboard}>
                <img src={clipboard} alt='Clipboard img' />
              </div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        }
      </div>
    </div>
  )
}