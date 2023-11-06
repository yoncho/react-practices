import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [time, setTime] = useState(new Date());
    const [ticks, setTicks] = useState(0);

    useEffect(()=>{
        const tickInterval = setInterval(()=>{
            setTime(new Date());
            setTicks(x => x+1);
        }, 1000);

        return ()=>clearInterval(tickInterval);
    }, [])
    
    return (
        <>
        {
            ticks % 10 === 0 ?
            null:
            <Clock
            message={`ex05: useEffect Hook ticks: ${ticks}`}
            hours={('0'+time.getHours()).slice(-2)}
            minutes={('0'+time.getMinutes()).slice(-2)}
            seconds={('0'+time.getSeconds()).slice(-2)}/>
        }
        </>
    );
}