import React from 'react';



const Covidapi = () => {
    // let [newData , setnewData]= useState([]);

    const getData = async () => {
        try{
        const data = await fetch("https://api.covid19india.org/data.json");
        let actualData = await data.json();
    //    setnewData(actualData);
    console.log(actualData.statewise)
    return(
        <>
        <div>Hello</div>
        <div>{actualData.statewise[0]}</div>
        </> 
       );
       
    }catch(error){
        console.log(error)
    }

}
    getData();
    return(
        <h1> hey </h1>
    )
}
export default Covidapi;