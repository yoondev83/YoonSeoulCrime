import React from 'react';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "65rem",
  },
  tableContainer:{
    backgroundColor:"#212529",
    width: "100%",
    height: "60vh",
    marginTop: "6.4rem",
    marginBottom: "6.4rem",
    [theme.breakpoints.down('sm')]: {
      marginTop: "3.4rem",
  },
    },
    tRow:{
      "&:nth-child(odd)": {
        backgroundColor: "#343a40",
      }
    },
    tableHead:{
        textAlign:"center",
        color:"#ced4da",
        fontWeight: "500",
        fontSize: "1.2rem",
    },
    tableBody:{
      color:"grey",
      fontSize: "1.2rem",
      border: "none",
      textAlign: "center"
  },
}));

const ShowSeoulDistrictCrimeData = props => {
  const classes = useStyles();
  const tableData = props.data.data.filter(d => d.Year === props.year);
  
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
          {props.data.meta.fields.map(column => (
                <TableCell key={column+Math.random()*2} align="right" className={classes.tableHead}>{column}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((d) => (
            <TableRow key={d.Total_Incidents+Math.random()*2} className={classes.tRow}>
              <TableCell component="td" scope="row" className={classes.tableBody} colSpan="1">
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