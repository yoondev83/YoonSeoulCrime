import React from 'react';
import MainVideo from './MainVideo';
import MainBodyContent from './MainBodyContent';
import classes from "./Main.module.css";
import Contact from './Contact';
import { Container } from '@material-ui/core';


const Main = () => {
    return (
        <>
            <div className={classes.mainText}>
                <h1 className={classes.mainTextFir} >THE VISUALIZED CRIME DATA IN SEOUL</h1>
                <h2 className={classes.mainTextSec} >Easy to Access & Free for Everyone</h2>
                <h4 className={classes.mainTextThi} >This website is created to provide people with usual information 
                    <br/>in an interesting way</h4>
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