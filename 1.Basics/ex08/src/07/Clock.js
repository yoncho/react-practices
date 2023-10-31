import React from 'react';

function Clock(props) {
    const now = new Date();
    let hours= now.getHours();
    let minutes= now.getMinutes();
    let seconds = now.getSeconds();
    
    return (
        /*
            comment01: JSX 밖은 JavaScript 구문(주석 구문)이 가능하다.
        */

        <div /* comment02: 비추!! */>
            {/*
                comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석 달기 (강추!!!)
            */}
            {('0'+(hours > 12 ? hours - 12 : hours)).slice(-2)}
            {':'}
            {('0'+minutes).slice(-2)}
            {/*
                comment04: JSX는 HTML이 아니라서 HTML의 주석인 <!-- -->를 달 수 없음...!!
            */}
            {':'}
            {('0'+seconds).slice(-2)}
            {' '}{hours > 12? 'PM':'AM'}
        </div>
    );
}

export default Clock;