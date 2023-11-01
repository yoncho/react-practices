import React from "react";
import './assets/scss/App.scss';
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data.json';
import data from './data';
function App(){
    console.log(data);
    return (
        <div id={'App'}>
            Emaillist
            <RegisterForm/>
            <SearchBar/>
            <Emaillist emails={data}/>
        </div>
    );
}

export {App};                                                                                                                                   