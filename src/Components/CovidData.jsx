import React from 'react';
import  ReactDOM  from 'react';
function CovidData(){

    const data = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData);
    return (
        <React.Fragment>
        <div >
            <h1>{actualData.statewise}</h1>
        </div>
        </React.Fragment>
    )
    
}
    return  data();
}

export default CovidData;
