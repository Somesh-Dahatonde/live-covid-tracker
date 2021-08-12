import React from 'react';

function CovidData(){

    const data = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise[0]);
    return actualData;
    
};

    return (
        <React.Fragment>
        <div >
            <h1>{data()}</h1>
        </div>
        </React.Fragment>
    );

}

export default CovidData;
