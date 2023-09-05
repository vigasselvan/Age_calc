import React from 'react';

function Year({brthYr, brthMonth}){
    
    let date = new Date();  
    let curYr = date.getFullYear();
    let diffYr = curYr - brthYr;

    //to reduce yr-1 if the round off isn't correct
    const curMonth = date.getMonth() + 1;
    if(brthMonth >= curMonth){
        diffYr -= 1;
    }

    return <span style={{color: "#854dff"}}> {diffYr} </span>;
}
export default Year;