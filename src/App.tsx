import { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { Task } from './components/Task';
import { ITask } from './interface/ITask'

import './global.css';

import clipboard from './assets/clipboard.svg';
import styles from './App.module.css';
import { TaskControl } from './components/TaskControl';




export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, checked: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: 2, checked: true, text: 'e e está quem é diminutivo a vale mais do' },
    { id: 3, checked: false, text: 'coisa você a you do discordo, que morre que comendo nada vêm não vêm de enche é de separado quanto' },
    { id: 4, checked: true, text: 'porque sem Onde osso. O pelo Moisés, tarde nada é o LSD mais a mais' },
    { id: 5, checked: false, text: 'contigo. uma tarde Se ninguém sei enche não um sonho barriga jacaré acabou. Evite doce, é tarde. motorista Por separado' },
    { id: 6, checked: true, text: 'em tarde. Se the certa: O elas é cobrador… tarde tarde. say que I' },

  ]);

  function createTask(text: string) {
    const newTask = {
      id: tasks.length + 1,
      checked: false,
      text
    }

    setTasks([...tasks, newTask]);
  }

  function checkedTask(id: number) {
    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          id: task.id,
          checked: !task.checked,
          text: task.text
        }
      } else {
        return task;
      }
    });

    setTasks(updateTasks);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return id !== task.id;
    });
    setTasks(tasksWithoutDeletedOne);
  }


  const completedTask = tasks.filter(task => task.checked === true);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput createTask={createTask} />
        <TaskControl numberOfTasks={tasks.length} completedTask={completedTask.length} />
        <div className={styles.content}>
          {
            tasks.length > 0
              ?
              <div>
                {tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      checkedTask={checkedTask}
                      task={task}
                      deleteTask={deleteTask}
                    />
                  )
                })}



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


