import React from 'react';
import styles from './assets/scss/Card.scss';
import TaskListItem from './TaskListItem';
function Card({card}) {
    return (
        <div className={styles.Card}>
          <div className={styles.Card__Title}>{card.title}</div>
          <div className={styles.Card__Details}>
            {card.description}
            <div className={styles.TaskList}>
              <ul>
                {
                    card.tasks.map((task, i)=><TaskListItem key={i} task={task}/>)
                }
              </ul>
            </div>

          </div>
        </div>
    );
}

export default Card;