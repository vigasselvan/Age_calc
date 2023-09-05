import React from 'react';

function Days({brthDay}){

    const date = new Date();
    const curDay = date.getDate();
    let days = 0;

    
    if(curDay >= brthDay){
        days = curDay - brthDay;
    }else{ 
        const currentMonth = date.getMonth();
        let max = new Date(date.getFullYear(), currentMonth, 0).getDate();
    
        days = max - curDay;
        days += Number(brthDay);
    }
    
    //css for numbers
    // const numStyle = {
    //     color: "#854dff"
    // };

    return <span style={{color: "#854dff"}}> {days} </span>;
}
export default Days;