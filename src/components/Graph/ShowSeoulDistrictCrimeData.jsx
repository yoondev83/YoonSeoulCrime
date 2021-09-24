import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer:{
      backgroundColor:"#1f1f1f",
      width: "100%",
      height: "480px",
      marginTop: 80,
      marginBottom: 30
    },
    tableHead:{
        color:"#fff",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: "20px",
    },
    tableBody:{
        color:"grey",
        textAlign:"center",
        fontSize: "15px",
        border: "none"
  }
});

const ShowSeoulDistrictCrimeData = props => {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
          <TableRow>
          { props.data.columns.map(column => (
                <TableCell key={column+Math.random()*2} align="right" className={classes.tableHead}>{column}</TableCell>
          ))}
          </TableRow>
        <TableBody>
          {props.data.map((d) => (
            <TableRow key={d.Total_Incidents+Math.random()*2}>
              <TableCell component="th" scope="row" className={classes.tableBody} colSpan="1">
                {d.Year}
              </TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.District}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Total_Incidents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Total_Arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Murder_Incidents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Murder_Arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Robbery_Incidents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Robbery_Arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Sex_Crimes_Incidents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Sex_Crimes_Arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Theft_Incidents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Theft_Arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Violence_Incidents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Violence_Arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShowSeoulDistrictCrimeData;