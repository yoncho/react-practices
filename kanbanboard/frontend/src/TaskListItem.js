import React from 'react';
import styles from './assets/scss/Card.scss';
function TaskListItem({task}) {
    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' checked={task.done} onChange={(e)=>{console.log(e.target)}} />
            {task.name}
            <a href='#' className={styles['TaskList__Task__remove']}></a>
        </li>
    );
}

export default TaskListItem;