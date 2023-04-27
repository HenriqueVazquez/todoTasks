import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './TaskInput.module.css';

interface TasksProps {
  createTask: (text: string) => void;
}

export function TaskInput({ createTask }: TasksProps) {
  const [text, setText] = useState('');

  function handleCreateTask() {
    createTask(text);
    setText('');
  }

  const isNewTaskEmptyOrInvalid = text.length <= 8;

  return (
    <div className={styles.taskInput}>
      <input
        name='taskInput'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Adicione uma nova tarefa' />
      <button onClick={handleCreateTask} disabled={isNewTaskEmptyOrInvalid}>Criar  <PlusCircle size={16} /></button>
    </div>
  );

}