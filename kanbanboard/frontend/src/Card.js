import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskListItem from './TaskListItem';
function Card({card}) {
  const [showDetail, setShowDetail] = useState(true);
  
  return (
      <div className={styles.Card}>
        <div className={ showDetail ? styles.Card__Title:styles.Card__Title__open} onClick={()=>{setShowDetail(!showDetail)}}>{card.title}</div>
        { // [styles.Card__Title, styles.Card__Title__open].join(' ');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          !showDetail ? 
          <div className={styles.Card__Details}>
            {card.description}
            <div className={styles.TaskList}>
              <ul>
                {
                    card.tasks.map((task, i)=><TaskListItem key={i} task={task}/>)
                }
              </ul>
            </div>
            <input type='text'
                placeholder={'태스크 추가'}
                className={styles.TaskList__add_task}></input>
          </div>:<></>
        }
      </div>
  );
}

export default Card;