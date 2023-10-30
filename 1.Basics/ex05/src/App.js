import React from "react";
function App(){
    // const App = document.createElement('div');
    // App.textContent = "hello webpack :D";
    
    React.createElement('div', null, 'hello react api : )');
    return App;

    //JSX (위 REACT 코드와 100% 동일..!) 
    // return (
    //     <div>
    //         hello react api world :D
    //         <ul>
    //             {
    //                 ['1st', '2nd'].map((e)=>{
    //                     return <li>${e}</li>;
    //                 })
    //             }
    //         </ul>
    //     </div>
    // )
}

export {App};                                                                                                                                   