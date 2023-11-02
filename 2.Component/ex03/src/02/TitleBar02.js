import React, { Component } from "react";

function TitleBar02(){
    const onClickHandler = function(){
        console.log("TitleBar02 Clicked");
    }
    return (
        <div>
            <h1
                onClick={onClickHandler}
            > function handler</h1>
        </div>

    )
}

export default TitleBar02;