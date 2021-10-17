import React from 'react';
import MainVideo from './MainVideo';
import MainBodyContent from './MainBodyContent';
import Contact from './Contact';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    mainText: {
        zIndex: 3,
        color: "#fff",
        position: "absolute",
        top: "32%",
        left: "6%",
        [theme.breakpoints.down('sm')]: {
            top: "30%",
            left: "6%",
        },
    },
    mainTextFir: {
        fontSize: "35px",
        fontWeight: "bold",
        letterSpacing: "0.1px",
        height: "40px",
        paddingRight:"100px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
            height: "80px",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "25px",
            height: "100px",
        },
    },
            
    mainTextSec: {
        fontSize: "25px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
            height:"80px"
        },
    },
    
    mainTextThi: {
        fontsiz: "20px",
        [theme.breakpoints.down('sm')]: {
            display:"inline",
        },
    },
    mainTextFour: {
        fontsiz: "20px",
        display:"inline",
    },
    mainContentPaper:{
        backgroundColor: "#252933"
    },
    mainContactPaper:{
        backgroundColor: "#10203d"
    },
    mainContentContainer:{
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 800
        },
    }
}));

const Main = props => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainText}>
                <Typography variant="h1" align="left" className={classes.mainTextFir}>THE VISUALIZED CRIME DATA IN SEOUL </Typography>
                <Typography variant="h4" align="left" className={classes.mainTextSec}>Easy to Access & Free for Everyone </Typography>
                <Typography variant="subtitle1" align="left" className={classes.mainTextThi}>This website is created to show you visualized data</Typography>
                <Typography variant="subtitle1" align="left" className={classes.mainTextFour}>so that you would have better understandings of Seoul, South Korea </Typography>
            </div>
            <MainVideo videoSrc="video/project_main.mp4" />
            
            <Paper className={classes.mainContentPaper}>
                <Container maxWidth="lg" className={classes.mainContentContainer}>
                    <MainBodyContent />
                </Container>
            </Paper>
            <div>
                <Contact />
            </div>
        </>
    );
};

export default Main;