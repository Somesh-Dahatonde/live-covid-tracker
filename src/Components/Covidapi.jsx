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
        },
    });

    const classes = useStyles();

    return (
        <>
            <div>
                <h1>API CALLING </h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                            <StyledTableCell >State</StyledTableCell>
                                <StyledTableCell align="right">Covid Cases </StyledTableCell>
                                <StyledTableCell align="right">Active </StyledTableCell>
                                <StyledTableCell align="right">Total Deaths </StyledTableCell>
                                <StyledTableCell align="right">Total Recovered </StyledTableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {statewise.map((data) => (
                                <StyledTableRow class=" MuiTableRow-hover">
                                    <StyledTableCell  component="th" scope="row">
                                    {data.state}
                                    </StyledTableCell>
                                    <StyledTableCell  align="right">{data.active}</StyledTableCell>
                                    <StyledTableCell align="right">{data.confirmed}</StyledTableCell>
                                    <StyledTableCell align="right">{data.deaths}</StyledTableCell>
                                    <StyledTableCell align="right">{data.recovered}</StyledTableCell>
                                    

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
