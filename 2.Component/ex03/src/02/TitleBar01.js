import React, { Component } from "react";

export default class TitleBar01 extends Component{
    constructor(props){
        super(props);
    }

    onClickHandler(){
        console.log("TitleBar01 Clicked");
    };

    render(){
        return (
            <div>
            <h1
                onClick={this.onClickHandler}> 
                function handler</h1>
        </div>
        )
    }
}