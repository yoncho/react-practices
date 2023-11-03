import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this._getCurrnetTime()
        };
    }

    componentDidMount() {
        setInterval((() => {
            this.updateCurrentTime();
        }).bind(this), 1000);
      }
    
    updateCurrentTime() {
        this.setState({ currentTime: this._getCurrnetTime() });
    }

    _getCurrnetTime(){
        const d = new Date();
        return {
            hours:d.getHours(),
            minutes:d.getMinutes(),
            seconds:d.getSeconds(),
            session:d.getHours() > 12 ? 'pm':'am'
        }
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={('00'+ this.state.currentTime.hours).slice(-2)}
                        minutes={('00'+ this.state.currentTime.minutes).slice(-2)}
                        seconds={('00'+ this.state.currentTime.seconds).slice(-2)}
                        session={('00'+ this.state.currentTime.session).slice(-2)}
                    />
            </div>
        );
    }
}