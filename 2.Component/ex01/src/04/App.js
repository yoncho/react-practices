import React from "react";
import MyComponent from "./MyComponent";

function App(){
    return (
        <div id={'App'}>
            <MyComponent
                props02={251923}
                props03={true}
                props04={{no:10, name:'dooly'}}
                props05={['hello', 'posco', 'samsung', 'kakao']}
                props06={()=>'function return example'}
                props07={10}
                props08={[true, false]}
                props09={{no:1, name:'dooly', email:'dooly@naver.com'}}/>
        </div>
    );
}

export {App};                                                                                                                                   