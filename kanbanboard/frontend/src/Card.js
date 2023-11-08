import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';

import TaskList from './TaskList';
import update from 'react-addons-update';
/*
  const index = tasks.findIndex((task)=>{return task.no === {json.data.no}});
  const newTasks = update(tasks, {
    [index]: {
      done: {
        $set: json.data.done
      }
    }
  })
*/
function Card({card}) {
  const [showDetail, setShowDetail] = useState(true);
  
  return (
      <div className={styles.Card}>
        <div className={ showDetail ? styles.Card__Title:styles.Card__Title__open} onClick={()=>{setShowDetail(!showDetail)}}>{card.title}</div>
        { // [styles.Card__Title, styles.Card__Title__open].join(' ');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          !showDetail ? 
          <div className={styles.Card__Details}>
            {card.description}
            <TaskList no={card.no}/>
          </div>:<></>
        }
      </div>
  );
}

export default Card;