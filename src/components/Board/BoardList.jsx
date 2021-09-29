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
import Footer from '../Main/Footer';
import axios from 'axios';

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
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(20),
    },
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
    tableLayout: "fixed",
    [theme.breakpoints.down('xs')]: {
      width: "5px",
      paddingRight: 40,
    },
  },
  dateTxt: {
    fontSize: theme.typography.pxToRem(18),
    paddingTop: "2%",
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(15),
    },
  },
  heartDiv:{
    width: 100,
    textAlign:"center",
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      height: "100%",
    },
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  heart:{
    width: "30px",
    height: "30px",
    paddingBottom: 0,
    textAlign:"center"
  },
  heartTxt:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize: 15
    },
  },
  brokenHeartDiv:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      width: "100px",
    },
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  brokenHeart:{
    width: "30px",
    height: "30px",
  },
  brokenHeartTxt:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize: 15
    },
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

const getBoardList = props =>{
  axios.get("/board", {
    title: "",
    date: "",
    heartNum: "",
    brkhrtNum: "",
  });
};

const BoardList = () => {
  const classes = useStyles();
    return(
            <>
              <Container maxWidth="lg" className={classes.boardContainer}>
                <Navbar/>
                <div className={classes.root}>
                <WritingBtn />
                <SearchBtn />
                  {rows.map((row) => (
                  <Accordion key={row.date+Math.random()*10} className={classes.accodrionBoard}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.accodrionSummary}>
                      <div className={classes.titleDiv}>
                      <Typography className={classes.titleHeading}>{row.title}</Typography>
                      </div>
                      <div className={classes.dateDiv}>
                      <Typography className={classes.dateTxt}>{row.date}</Typography>
                      </div>
                      <div className={classes.heartDiv}>
                        <img className={classes.heart} src="/icons/heart.png" alt="heart"/>
                        <Typography className={classes.heartTxt}>{row.heart}</Typography>
                      </div>
                      <div className={classes.brokenHeartDiv}>
                        <img className={classes.brokenHeart} src="/icons/broken_heart.png" alt="broken heart"/>
                        <Typography className={classes.brokenHeartTxt}>{row.brokenHeart}</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Post />
                    </AccordionDetails>
                  </Accordion>
                  ))}
                </div>
              </Container>
          <Footer/>
          </>
    );
};

export default BoardList;