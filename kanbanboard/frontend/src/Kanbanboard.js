import React, { useEffect, useState } from 'react';
import Cardlist from './Cardlist.js';
import styles from './assets/scss/Kanbanboard.scss';
function Kanbanboard(props) {
    const categorys = ['ToDo', 'Doing', 'Done'];
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetchCards();
    }, []);

    const fetchCards = async()=>{
        try{
            const response = await fetch('/api/card', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            console.log(json.data);

            setData(json.data);

        }catch(err){
            console.error(err);
        }
    };

    return (
        <div className={styles.Kanbanboard}>
            {
                categorys.map((category, i)=><Cardlist key={i} status={category} cards={data.filter(card => card.status == category)}/>)
            }
        </div>
    );
}

export default Kanbanboard;