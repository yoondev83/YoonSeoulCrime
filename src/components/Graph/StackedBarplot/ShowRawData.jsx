import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LoadingSpinner from '../../UI/LoadingSpinner';
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
        fontWeight: "bold",
        fontSize: "20px",
    },
    tableBody:{
        color:"grey",
        border: "none"
  }
});

const ShowRawData = props => {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
    {props.data.data === undefined? <LoadingSpinner />:
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
            <TableRow key={d.Year}>
              <TableCell component="th" scope="row" className={classes.tableBody}>
                {d.Year}
              </TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Total_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Total_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Violent_crime_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Violent_crime_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Larceny_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Larceny_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Assault_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Assault_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.White_collar_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.White_collar_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Sexual_crime_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Sexual_crime_arrest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Other_crime_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Other_crime_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Special_act_violation_reports.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Special_act_violation_arrests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    }
    </TableContainer>
  );
}

export default ShowRawData;