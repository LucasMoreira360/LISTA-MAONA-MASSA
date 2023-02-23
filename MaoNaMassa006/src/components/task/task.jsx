import classNames from 'classnames'
import { useState } from 'react'

import styles from './task.module.css'

function Task ({text, completed}) {

  const [isCompleted, setIsCompleted]= useState(completed)
  return (
    <div onClick={() => setIsCompleted(!isCompleted,)}className={classNames(
      styles.task, {
        [styles.completed] : isCompleted
      }
    )}>
      {text}
    </div>
  )
}

export default Task