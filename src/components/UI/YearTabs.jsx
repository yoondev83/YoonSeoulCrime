import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      appbar:{
        display: "inline-block",
        backgroundColor: "#868e96",
      },
    link:{
      display: "inline-block",
      textDecoration:"none",
      color: "black",
      "&:link, &:visited":{
        display: "inline-block",
        transition: "all 0.3s",
      },
      "&:hover, &:active":{
        color:"#fff"
      },
    },
    selectedLink:{
      display: "inline-block",
      textDecoration:"none",
      color:"#fff",
    },
    typography:{
      margin: "0.5rem",
      paddingLeft: "0.6rem",
      paddingRight: "2rem",
      fontSize: "1.2rem",
      textAlign: "center"
    },
  
}));


const YearTabs = () => {
    const classes = useStyles();
    const location = useLocation();
    let currentLocation = location.pathname.slice(15);
    let currentChartLocation = location.pathname.slice(15);
    return(
        <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Grid container  direction="row" justifyContent="space-between" alignItems="center">
            <Link to="/api/graph/map/2019" className={currentLocation==="2019"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2019</Typography></Link>
            <Link to="/api/graph/map/2018" className={currentLocation==="2018"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2018</Typography></Link>
            <Link to="/api/graph/map/2017" className={currentLocation==="2017"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2017</Typography></Link>
            <Link to="/api/graph/map/2016" className={currentLocation==="2016"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2016</Typography></Link>
            <Link to="/api/graph/map/2015" className={currentLocation==="2015"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2015</Typography></Link>
            <Link to="/api/graph/map/2014" className={currentLocation==="2014"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2014</Typography></Link>
            
            <Link to={{pathname: `/api/graph/map/bargraph/2019`, state: {year: 2019}}} className={currentChartLocation==="bargraph/2019"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2019 Graph</Typography></Link>
            <Link to={{pathname: `/api/graph/map/bargraph/2018`, state: {year: 2018}}} className={currentChartLocation==="bargraph/2018"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2018 Graph</Typography></Link>
            <Link to={{pathname: `/api/graph/map/bargraph/2017`, state: {year: 2017}}} className={currentChartLocation==="bargraph/2017"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2017 Graph</Typography></Link>
            <Link to={{pathname: `/api/graph/map/bargraph/2016`, state: {year: 2016}}} className={currentChartLocation==="bargraph/2016"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2016 Graph</Typography></Link>
            <Link to={{pathname: `/api/graph/map/bargraph/2015`, state: {year: 2015}}} className={currentChartLocation==="bargraph/2015"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2015 Graph</Typography></Link>
            <Link to={{pathname: `/api/graph/map/bargraph/2014`, state: {year: 2014}}} className={currentChartLocation==="bargraph/2014"? classes.selectedLink:classes.link}><Typography variant="subtitle2" className={classes.typography}>2014 Graph</Typography></Link>
          </Grid>
        </AppBar>
       
      </div>
    );
};

export default YearTabs;