import React, {useState} from "react";
import './assets/scss/App.scss';
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data.json';
import data from './data';
function App(){
    const [emails, setEmails] = useState(data);
    const searchEmail = (keyword)=>{
        console.log(keyword);
        
        const newEmails = data.filter(function(email) {
            return (email.firstName+email.lastName).indexOf(keyword) !== -1 ||  email.email.indexOf(keyword) !== -1;
        });
        setEmails(newEmails);
        
    };
    return (
        <div id={'App'}>
            Emaillist
            <RegisterForm/>
            <SearchBar searchEmail={searchEmail}/>
            <Emaillist emails={emails}/>
        </div>
    );
}

export {App};                                                                                                                                   