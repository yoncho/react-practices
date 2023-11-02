import React from "react";
import Kanbanboard from "./Kanbanboard";
import './assets/scss/App.scss';
import data from './assets/json/data.js';
function App(){
    return (
        <div id={'App'}>
            <Kanbanboard data={data}/>
        </div>
    );
}

export {App};                                                                                                                                   