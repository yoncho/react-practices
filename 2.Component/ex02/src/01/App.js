import React from "react";

function App(){
    const h1Style = {
        width: 200,
        height: '50px',
        color: '#f00',
        backgroundColor: '#eeff99'
    };
    return (
        <div id={'App'}>
            <h1 style={h1Style}>Inline Styling</h1>
        </div>
    );
}

export {App};                                                                                                                                   