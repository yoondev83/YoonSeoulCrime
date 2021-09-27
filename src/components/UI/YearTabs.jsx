import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    appbar:{
        display: "inline-block",
      },
    link:{
      display: "inline-block",
      textDecoration:"none",
      color: "black",
    },
    typography:{
      margin: 5,
      paddingLeft:6,
      paddingRight: 20,
      textAlign: "center"
    },
  
}));


const YearTabs = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
            <Link to="/graph/seoulCrimeMap/2019" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2019</Typography></Link>
            <Link to="/graph/seoulCrimeMap/2018" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2018</Typography></Link>
            <Link to="/graph/seoulCrimeMap/2017" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2017</Typography></Link>
            <Link to="/graph/seoulCrimeMap/2016" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2016</Typography></Link>
            <Link to="/graph/seoulCrimeMap/2015" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2015</Typography></Link>
            <Link to="/graph/seoulCrimeMap/2014" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2014</Typography></Link>
            <Link to="/graph/seoulCrimeMap/graph2019" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2019 Graph</Typography></Link>
            <Link to="/graph/seoulCrimeMap/graph2018" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2018 Graph</Typography></Link>
            <Link to="/graph/seoulCrimeMap/graph2017" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2017 Graph</Typography></Link>
            <Link to="/graph/seoulCrimeMap/graph2016" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2016 Graph</Typography></Link>
            <Link to="/graph/seoulCrimeMap/graph2015" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2015 Graph</Typography></Link>
            <Link to="/graph/seoulCrimeMap/graph2014" className={classes.link}><Typography variant="subtitle2" className={classes.typography}>2014 Graph</Typography></Link>
        </AppBar>
       
      </div>
    );
};

export default YearTabs;