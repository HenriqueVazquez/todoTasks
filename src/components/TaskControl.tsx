import { useState } from 'react';
import styles from './TaskControl.module.css';

interface tasksInfo {
  numberOfTasks: number;
  completedTask: number;
}

export function TaskControl({ numberOfTasks, completedTask }: tasksInfo) {


  return (
    <div className={styles.containerWrapper}>
      <div className={styles.contentHeader}>
        <header className={styles.header}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{numberOfTasks}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>{completedTask} de {numberOfTasks}</span>
          </div>
        </header>
      </div>

    </div>
  )
}