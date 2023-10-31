import React from "react";

const str = 'hello world:';

function App(){
    // React.createElement('div', null, 'hello react api : )');
    // return App;

    //JSX (위 REACT 코드와 100% 동일..!) 
    return (
        <div>
            <h1>01</h1>
            <p>특징1: HTML과의 차이점</p>
            {/*
               1. 속성은 Camel Case 
             */}
             <input type="text" maxLength='10'/>

            {/*
               2. element 꼭 닫는다.
             */}
             <br/>
             <hr/>
             <img src=""/>

            {/*
               3. jsx element의 속성 이름은 DOM API와 일치한다.
            */}
            <h4 id="title" className="header">타이틀</h4> 
        </div>
        
    );
}

export {App};                                                                                                                                   