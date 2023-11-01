import React from "react";
import styles from './assets/css/App.css';
import Banner01 from "./Banner01";
import Banner02 from "./Banner02";
function App(){
    console.log(styles.Header);
    return (
        <div id={'App'}>
            <h1 className={'Header'}>CSS Module II</h1>      
            <Banner01/>
            <Banner02/>      
        </div>
    );
}

export {App};                                                                                                                                   