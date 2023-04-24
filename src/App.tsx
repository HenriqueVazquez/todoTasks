import { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import './global.css';
import styles from './App.module.css';
import { TaskControl } from './components/TaskControl';


export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput />
        <TaskControl />
      </div>
    </div>
  )
}


