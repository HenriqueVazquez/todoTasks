import { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { Task } from './components/Task';

import './global.css';

import clipboard from './assets/clipboard.svg';
import styles from './App.module.css';
import { TaskControl } from './components/TaskControl';


interface Task {
  id: string;
  checked: boolean,
  text: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([1]);


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput />
        <TaskControl numberOfTasks={tasks.length} />
        <div className={styles.content}>
          {
            tasks.length > 0
              ?
              <div>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />

              </div >
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
    </div>
  )
}


