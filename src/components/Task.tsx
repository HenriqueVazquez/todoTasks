import { Trash } from 'phosphor-react'

import styles from './Task.module.css';


export function Task() {
  const task = { checked: false };
  return (
    <div className={styles.wrapper}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" id="myCheckbox" />
        <span className={styles.checkmark}></span>
      </label>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <div className={styles.wrapperTrash}>
        <Trash className={styles.trash} />
      </div>

    </div>
  )
}