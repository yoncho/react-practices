import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [time, setTime] = useState(new Date());
    const [ticks, setTicks] = useState(0);

    useEffect(()=>{
        const tickInterval = setInterval(()=>{
            setTime(new Date());
            setTicks(ticks+1);
        }, 1000);

        return ()=>clearInterval(tickInterval);
    },[ticks])
    
    return (
        <Clock
        message={`ex05: useEffect Hook ticks: ${ticks}`}
        hours={('00'+time.getHours()).slice(-2)}
        minutes={('00'+time.getMinutes()).slice(-2)}
        seconds={('00'+time.getSeconds()).slice(-2)}/>
    );
}