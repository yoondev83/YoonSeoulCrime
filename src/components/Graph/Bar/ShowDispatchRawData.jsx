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
    height: "25vh",
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
      textAlign: "center"
    },
    tableBody:{
      color:"grey",
      fontSize: "1.2rem",
      border: "none",
  }
});

const ShowDispatchRawData = props => {
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