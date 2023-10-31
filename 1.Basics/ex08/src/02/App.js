import React from "react";
/**
 * React Component 는 단일 루트 노드만 렌더링 할 수 있다.
 * 
 * 오류 : 
 *      return (
 *          <h2>01</h2>
 *          <p>특징2: single root</p>
 *      )
 * 이유 :
 *      - transpile01
 *      return (
 *          React.createElement('h2', null, "01");
 *          React.createElement('p', null, "특징2: single root");
 *      )
 *      - transpile02
 *      return (
 *          React.createElement('div', null, React.createElement('div', null, React.createElement('p', null, "특징2: single root")));
 *      )
 */

function App(){
    // React.createElement('div', null, 'hello react api : )');
    // return App;

    //JSX (위 REACT 코드와 100% 동일..!) 
    return (
        <>
            <div>
                <h1>01</h1>
                <p> 특징2: Single Root</p>
            </div> 
            <div>
                
            </div>   
        </>
       
    );
}

export {App};                                                                                                                                   