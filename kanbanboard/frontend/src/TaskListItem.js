import React from 'react';
import styles from './assets/scss/Task.scss';
function TaskListItem({task, deleteTask}) {

    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' checked={task.done === 'Y' ? true:false} onChange={(e)=>{console.log(e.target)}} />
            {task.name}
            <a href='#' className={styles['TaskList__Task__remove']} onClick={()=>{deleteTask(task.no)}}></a>
        </li>
    );
}

export default TaskListItem;