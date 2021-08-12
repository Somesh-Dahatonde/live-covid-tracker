import { React, useState } from "react";
import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css';

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
            // console.log(response.data.statewise);
            setStatewise(response.data.statewise);
        })
        .catch((error) => {
            console.log(error);
        });



    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


    const useStyles = makeStyles({
        table: {
            minWidth: 700,
            backgroundColor:'#00C1D4'
        },
        header : {
            backgroundColor : "#512D6D"
        }
    });

    const classes = useStyles();

    return (
        <>
            <div className= "Main-container">
                <h1>Live Delta Tracker </h1>
             
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow className={classes.header}>
                            <StyledTableCell align="center">State</StyledTableCell>
                                <StyledTableCell align="center"> Total Delta Cases </StyledTableCell>
                                {/* <StyledTableCell align="center">Active </StyledTableCell> */}
                                <StyledTableCell align="center">Total Deaths by Delta</StyledTableCell>
                                <StyledTableCell align="center">Total Recovered </StyledTableCell>
                                <StyledTableCell align="center"> Data Update Date</StyledTableCell>
                                

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {statewise.map((data) => (
                                <StyledTableRow class=" MuiTableRow-hover">
                                    <StyledTableCell  component="th" scope="row">
                                    {data.state}
                                    </StyledTableCell>
                                    <StyledTableCell  className='confirmed-box' align="right">{data.deltaconfirmed}</StyledTableCell>
                                    <StyledTableCell className='Death-box' align="right">{data.deltadeaths}</StyledTableCell>
                                    <StyledTableCell className='Recovered-box' align="right">{data.deltarecovered}</StyledTableCell>
                                    <StyledTableCell align="right">{data.lastupdatedtime}</StyledTableCell>

                                </StyledTableRow>
                             ))} 
                        </TableBody>
                        
                    </Table>
                </TableContainer>
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
