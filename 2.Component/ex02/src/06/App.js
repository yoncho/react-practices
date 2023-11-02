import React from "react";
import styles from './assets/scss/App.scss';
import styled from 'styled-components';
const StyledH1 = styled.h1`
    width: 180px;
    font-size: 12px;
    text-align: center;
    margin: 100px auto;
    padding: 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce
`;

const StyledDiv = styled.div`
    text-align: center;
`;


function App(){
    return (
        <StyledDiv>
            <StyledH1>CSS in JS: Styled Component</StyledH1>      
        </StyledDiv>
    );
}

export {App};                                                                                                                                   