import React from 'react';

function Months({brthMonth}){

    const date = new Date();
    const curMonth = date.getMonth() + 1;
    var diffMonth = 0;
    const totalMonths = 12;


    //calculating diff month
    //this function is called to check whether the to round of the year is correct or not   
    if(brthMonth <= curMonth){
        diffMonth = curMonth - brthMonth;
    }else{
        var diff = brthMonth - curMonth;
        diffMonth = totalMonths - diff;
    }
               

    return <span style={{color: "#854dff"}}> {diffMonth} </span>;
}
export default Months;