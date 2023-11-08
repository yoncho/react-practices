import React from 'react';
import styles from './assets/scss/Task.scss';
function TaskListItem({task, deleteTask, changeTaskDone}) {

    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' checked={task.done === 'Y'} onChange={(e)=>{changeTaskDone(task.no, task.done === 'Y' ? 'N':'Y')}} />
            {task.name}
            <a href='#' className={styles['TaskList__Task__remove']} onClick={(e)=>{
                e.preventDefault();
                deleteTask(task.no)}}></a>
        </li>
    );
}

export default TaskListItem;