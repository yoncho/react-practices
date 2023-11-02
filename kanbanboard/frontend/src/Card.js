import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskListItem from './TaskListItem';
function Card({card}) {
  const [onClick, setOnClick] = useState(true);
  
  return (
      <div className={styles.Card}>
        <div className={ onClick ? styles.Card__Title:styles.Card__Title__open} onClick={()=>{setOnClick(!onClick)}}>{card.title}</div>
        {
          !onClick ? 
          <div className={styles.Card__Details}>
            {card.description}
            <div className={styles.TaskList}>
              <ul>
                {
                    card.tasks.map((task, i)=><TaskListItem key={i} task={task}/>)
                }
              </ul>
            </div>
          </div>:<></>
        }
      </div>
  );
}

export default Card;