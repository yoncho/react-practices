import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentTime: this._getCurrnetTime();
        }
    }

    _getCurrnetTime(){
        const d = new Date();
        return {
            hours:1,
            minutes:1,
            seconds:1,
            session:''
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(function(){
            //time
        },1000);
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={2}
                        minutes={10}
                        seconds={33}
                        session={'pm'}
                    />
            </div>
        );
    }
}