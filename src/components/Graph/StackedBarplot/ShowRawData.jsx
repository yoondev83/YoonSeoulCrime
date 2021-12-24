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
    minWidth: "65rem",
  },
  tableContainer:{
      backgroundColor:"#212529",
      width: "100%",
      height: "60vh",
      marginTop: "6.4rem",
      marginBottom: "6.4rem",
    },
    tRow:{
      "&:nth-child(odd)": {
        backgroundColor: "#343a40",
      }
    },
    tableHead:{
      color:"#ced4da",
      fontWeight: "500",
      fontSize: "1.2rem",
    },
    tCol:{
      color:"grey",
      fontSize: "1.2rem",
      border: "none",
  }
});

const ShowRawData = props => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
   
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
          { props.data.meta.fields.map(column => (
                <TableCell key={column} align="right" className={classes.tableHead}>{column}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.data.map((d) => (
            <TableRow key={d.Year} className={classes.tRow}>
              <TableCell component="th" scope="row" className={classes.tCol}>
                {d.Year}
              </TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Total_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Total_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Violent_crime_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Violent_crime_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Larceny_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Larceny_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Assault_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Assault_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.White_collar_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.White_collar_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Sexual_crime_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Sexual_crime_arrest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Other_crime_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Other_crime_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Special_act_violation_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tCol}>{d.Special_act_violation_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </TableContainer>
  );
}

export default ShowRawData;