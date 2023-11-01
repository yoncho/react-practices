import React from "react";
import Kanbanboard from "./Kanbanboard";
// import './assets/css/App.css';
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