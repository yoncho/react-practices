import React from "react";
import Kanbanboard from "./Kanbanboard";
import './assets/scss/App.scss';
import data from './assets/json/data.js';
function App(){
    console.log(data);
    return (
        <div id={'App'}>
            <Kanbanboard/>
        </div>
    );
}

export {App};                                                                                                                                   