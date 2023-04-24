import { PlusCircle } from 'phosphor-react';

import styles from './TaskInput.module.css';

export function TaskInput() {
  return (
    <div className={styles.taskInput}>
      <input placeholder='Adicione uma nova tarefa' />
      <button>Criar  <PlusCircle size={16} /></button>
    </div>
  );

}