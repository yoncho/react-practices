import React from 'react';
import data from './assets/json/data.js';
import Cardlist from './Cardlist.js';
import styles from './assets/scss/Kanbanboard.scss';
function Kanbanboard(props) {
    const categorys = ['ToDo', 'Doing', 'Done'];

    return (
        <div className={styles.Kanbanboard}>
            {
                categorys.map((category, i)=><Cardlist key={i} status={category} cards={data.filter(card => card.status == category)}/>)
            }
        </div>
    );
}

export default Kanbanboard;