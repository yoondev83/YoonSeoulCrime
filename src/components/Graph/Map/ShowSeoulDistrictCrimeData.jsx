import React from 'react';
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
      height: "550px",
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
  },
});

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
            <TableRow key={d.Total_Incidents+Math.random()*2}>
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