import React from 'react';
import styles from './assets/scss/CardList.scss';
import Card from './Card';

function Cardlist({status, cards}) {
    return (
        <div className={styles.CardList}>
            <h1>{status}</h1>
            <ul>
            {
                cards.map((card)=> <Card key={card.no} card={card}/>)
            }
            </ul>
            
        </div>
    );
}

export default Cardlist;