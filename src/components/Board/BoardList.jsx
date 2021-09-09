import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {Container} from "@material-ui/core"
import WritingBtn from './WritingBtn';
import SearchBtn from './SearchBtn';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#1f1f1f",
},
tableRowText: {
    color: "#fff",
    fontSize: "25px"
    
  },
  postTitle:{
    color: "#2196f3",
    fontSize: "35px",
    fontWeight: "bold",
    border: "none",
    width: "90%",
    paddingBottom: 0,
    paddingLeft: 0
    
  },
  postContent:{
    color: "#fff",
    fontSize: "25px",
    paddingLeft: 0,
  },
  
  postDate:{
    border: "none",
    color: "#fff",
    fontSize: "25px",
    textAlign: "right",
    verticalAlign: "bottom",
    
  },
  
  Heart:{
    width: "45px",
    height: "55px",
    paddingBottom: 0,
    
  },
  BrokenHeart:{
    width: "45px",
    height: "45px",
    paddingBottom: 0
  },
  
  userID:{
    color: "#fff",
    fontSize: "25px",
    verticalAlign: "top",
  },

  section: {
    paddingBottom: "100px",
    paddingTop: 120,
  }
});

function createData(name, calories, fat, carbs, protein) {
  
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('This is post 1', "Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led...", 
  "09/12/2021", 24, 4.0),
  createData('This is post 2', 237, "09/12/2021", 37, 4.3),
  createData('This is post 3', 262, "09/13/2021", 24, 6.0),
  createData('This is post 4', 305, "09/14/2021", 67, 4.3),
  createData('This is post 5', 356, "09/15/2021", 49, 3.9),
];


const BoardList = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
    return(
      <section className={classes.section}>
            <Container maxWidth="lg">
            <TableContainer component={Paper} className={classes.table}>
              <WritingBtn />
              <SearchBtn />
              

                <Table aria-label="simple table">
                    <TableBody>
                    {rows.map((row) => (
                        <>
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row" className={classes.postTitle} key={row.name+2}>
                            <TableCell align="left" className={classes.postTitle}> 
                              <Link href="/post" className={classes.postTitle}>
                                {row.name}
                              </Link>
                            </TableCell>
                            <TableCell align="left" className={classes.postDate}>{row.fat}</TableCell>
                          </TableCell>
                          <TableCell align="center" className={classes.postDate}><img className={classes.Heart} src="/icons/heart.png"/>{row.carbs}</TableCell>
                          <TableCell align="center" className={classes.postDate}><img className={classes.BrokenHeart} src="/icons/broken_heart.png"/>{row.carbs}</TableCell>
                        </TableRow>
                        <TableRow key={row.name+1}>
                          <TableCell component="th" scope="row" className={classes.postContent}>
                              {row.calories}
                          </TableCell>
                          <TableCell colSpan="2" align="right" className={classes.userID}>sdfgsdfgdsfdsfasfsd</TableCell>
                        </TableRow>
                        </>
                    ))}
                    </TableBody>
                </Table>
    </TableContainer>

            </Container>
        </section>
    );
};

export default BoardList;