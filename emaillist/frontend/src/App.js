import React, {useEffect, useState} from "react";
import './assets/scss/App.scss';
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data.json';
// import data from './data';
function App(){
    const [emails, setEmails] = useState(null);
    const searchEmail = (keyword)=>{
        console.log(keyword);
        
        const newEmails = data.filter(function(email) {
            return (email.firstName+email.lastName).indexOf(keyword) !== -1 ||  email.email.indexOf(keyword) !== -1;
        });
        setEmails(newEmails);
        
    };
    
    const addEmail = async(email)=>{
        const response = await fetch('/api', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(email)
        });
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        if(json.result !== 'success'){
            throw new Error(`${json.result} ${json.message}`);
        }
        const updateEmail = [json.data, ...emails];
        console.log(updateEmail);

        setEmails(updateEmail);
    };

    const fetchList = async()=>{
        try{
            const response = await fetch('/api', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            console.log(json.data);

            setEmails(json.data);

        }catch(err){
            console.error(err);
        }
    };

    useEffect(()=>{
        fetchList();
    },[]);

    return (
        <div id={'App'}>
            Emaillist
            <RegisterForm addEmail={addEmail}/>
            <SearchBar searchEmail={searchEmail}/>
            {
                emails === null ?
                null:
                <Emaillist emails={emails}/>    
            }
        </div>
    );
}

export {App};                                                                                                                                   