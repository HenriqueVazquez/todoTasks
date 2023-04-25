import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './TaskInput.module.css';

export function TaskInput() {
  const [text, setText] = useState('');

  return (
    <div className={styles.taskInput}>
      <input
        name='taskInput'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Adicione uma nova tarefa' />
      <button>Criar  <PlusCircle size={16} /></button>
    </div>
  );

}