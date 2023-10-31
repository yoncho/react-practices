import React from 'react';

function Clock01(props) {
    const now = new Date();
    let hours= now.getHours();
    let minutes= now.getMinutes();
    let seconds = now.getSeconds();
    
    let session = 'AM';
    if(hours > 12){
        session ='PM';
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    return (
        <div>
            {hours}:{minutes}:{seconds} {session}
        </div>
    );
}

export default Clock01;