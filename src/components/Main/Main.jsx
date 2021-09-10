import React from 'react';
import MainVideo from './MainVideo';
import MainBodyContent from './MainBodyContent';
import Contact from './Contact';
import { Container, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    mainText: {
        zIndex: 1000,
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
            [theme.breakpoints.down('sm')]: {
                fontSize: "25px",
                height: "80px",
              },
            },
            
    mainTextSec: {
        fontSize: "25px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
            height:"50px"
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

    }

}));


const Main = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mainText}>
                <h1 className={classes.mainTextFir} >THE VISUALIZED CRIME DATA IN SEOUL</h1>
                <h2 className={classes.mainTextSec} >Easy to Access & Free for Everyone</h2>
                <h4 className={classes.mainTextThi} >This website is created to provide people with usual information</h4>
                <h4 className={classes.mainTextFour} >in an interesting way</h4>
            </div>
            <MainVideo videoSrc="video/project_main.mp4" />
           
            <Container maxWidth="lg" className={classes.writingContainer}>
                <MainBodyContent />
                <Contact />
            </Container>
        </>
    );
};

export default Main;