import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container} from "@material-ui/core"
import WritingBtn from './WritingBtn';
import SearchBtn from './SearchBtn';
import { Link } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  boardContainer: {
    paddingBottom: "100px",
    paddingTop: 120,
  },
  root: {
    width: '100%',
  },
  titleHeading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
    paddingTop: "1.5%",
  },
  accodrionBoard:{
    backgroundColor: "#fff",
    marginBottom:15,
    verticalAlign: "bottom",
  },
  accodrionSummary:{
    backgroundColor: "#252933",
    color: "white",
    
  },
  titleDiv:{
    width: "100%",
  },
  dateDiv:{
    paddingTop: "2%",
    marginRight: 15,
    textAlign: "right",
    tableLayout: "fixed"
  },
  dateTxt: {
    fontSize: theme.typography.pxToRem(18),
    paddingTop: "2%",
  },
  heartDiv:{
    width: 100,
    textAlign:"center",
    paddingRight: 20
  },
  heart:{
    width: 100,
    width: "30px",
    height: "30px",
    paddingBottom: 0,
    textAlign:"center"
  },
  heartTxt:{
    textAlign:"center"
  },
  brokenHeartDiv:{
    textAlign:"center"
  },
  brokenHeart:{
    width: "30px",
    height: "30px",
  },
  brokenHeartTxt:{
    textAlign:"center"
  },
}));

function createData(title, content, date, heart, brokenHeart) {
  
  return { title, content, date, heart, brokenHeart };
}

const rows = [
  createData('This is post 1', "Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led...", 
  "09/12/2021", 20004, 400.0),
  createData('This is post 2', 237, "09/12/2021", 37, 4.3),
  createData('This is post 3', 262, "09/13/2021", 24, 6.0),
  createData('This is post 4', 305, "09/14/2021", 67, 4.3),
  createData('This is post 5', 356, "09/15/2021", 49, 3.9),
];


const BoardList = () => {
  const classes = useStyles();
    return(
            <Container maxWidth="lg" className={classes.boardContainer}>
              <Navbar/>
              <div className={classes.root}>
              <WritingBtn />
              <SearchBtn />
                {rows.map((row) => (
                <Accordion className={classes.accodrionBoard}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.accodrionSummary}>
                    <div className={classes.titleDiv}>
                    <Typography className={classes.titleHeading}>{row.title}</Typography>
                    </div>
                    <div className={classes.dateDiv}>
                    <Typography className={classes.dateTxt}>{row.date}</Typography>
                    </div>
                    <div className={classes.heartDiv}>
                      <img className={classes.heart} src="/icons/heart.png"/>
                      <Typography className={classes.heartTxt}>{row.heart}</Typography>
                    </div>
                    <div className={classes.brokenHeartDiv}>
                      <img className={classes.brokenHeart} src="/icons/broken_heart.png"/>
                      <Typography className={classes.brokenHeartTxt}>{row.brokenHeart}</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Post />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                ))}
              </div>
                          {/* <div className={classes.userPost}>
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row" className={classes.postTitle} key={row.name+2}>
                              <TableCell align="left" className={classes.postTitle}> 
                                <Link to="/post" className={classes.postTitle}>
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
                          </div> */}
              {/* <TableContainer component={Paper} className={classes.table}>
                <WritingBtn />
                <SearchBtn />

                  <Table aria-label="simple table">
                      <TableBody>
                      ))}
                      </TableBody>
                  </Table>
              </TableContainer> */}

            </Container>
    );
};

export default BoardList;