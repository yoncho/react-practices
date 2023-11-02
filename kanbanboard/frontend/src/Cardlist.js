import React from 'react';
import styles from './assets/scss/CardList.scss';
import Card from './Card';

function Cardlist({status, cards}) {
    console.log(status + " cardlist");
    console.log(cards);
    return (
        <div className={styles.CardList}>
            <h1>{status}</h1>
            <ul>
            {
                cards.map((card, i)=> <Card key={i} card={card}/>)
            }
            </ul>
            
        </div>
    );
}

export default Cardlist;