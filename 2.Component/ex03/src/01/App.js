import React from "react";

function App(){
    return (
        <div id={'App'}>
            <h1 
                onClick={function(){
                    console.log('click');
                }}
            >inline handler</h1>
        </div>
    );
}

export {App};                                                                                                                                   