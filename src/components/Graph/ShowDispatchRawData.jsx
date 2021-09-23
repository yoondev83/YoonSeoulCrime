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
      height: "100%",
      marginTop: 80,
      marginBottom: 50
    },
    tableHead:{
        color:"#fff",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center"
    },
    tableBody:{
        color:"grey",
        border: "none",
        textAlign: "center"
  }
});

const ShowDispatchRawData = props => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
          { props.data.columns.map(column => (
                <TableCell key={column} align="right" className={classes.tableHead}>{column}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((d) => (
            <TableRow key={d.Year}>
              <TableCell component="th" scope="row" className={classes.tableBody}>
                {d.Year}
              </TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Place.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.The_Total_112_Dispatcher_Volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Within_5min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right" className={classes.tableBody}>{d.Within_5min_Rate+"%"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShowDispatchRawData;