import { React, useEffect, useState } from "react";
import axios from "axios";

const Covidapi = () => {
    const [statewise, setStatewise] = useState([]);

    axios
        .get(
            "https://api.covid19india.org/data.json",
            {},
            {
                headers: { "Content-Type": "application/json; charset=utf-8" },
            }
        )
        .then((response) => {
            // console.log(response);
            setStatewise(response.data.statewise);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <>
            <div>
                <h1>API CALLING </h1>
                {statewise.map((item) => {
                    
                    return (
                        <div key={item.id}>
                            <p>Active Cases {item.active}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );

    //     const getData = async () => {
    //         try{
    //         const data = await fetch("https://api.covid19india.org/data.json");
    //         let actualData = await data.json();
    //         stateWise = await data.json();
    //         console.log(actualData.statewise[0].active)
    //     //    setnewData(actualData);
    //     // console.log(actualData.statewise)
    //     return(
    //         <>
    //         <div>Hello</div>
    //         <div>{actualData.statewise[0]}</div>
    //         </>
    //        );

    //     }catch(error){
    //         console.log(error)
    //     }

    // }
    // getData();
    // return(
    //     <h1> hey </h1>
    // )
};
export default Covidapi;
