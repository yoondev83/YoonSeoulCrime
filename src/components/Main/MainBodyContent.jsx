import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Customclasses from "./MainBodyContent.module.css";

/*
  모바일 사이즈 정도 되었을때 메인바디컨텐츠와 컨택트가 겹쳐버림.
*/
const useStyles = makeStyles(() => ({
  gridTitle: {
    paddingTop: "80px",
    height: "90vh",
  },
  icons: {
    fontSize: "150px",
    color: "#fff",
  },
  papers:{
    backgroundColor: "#1f1f1f",
  
    width: "100%",
    textAlign: "center",
  },
  title:{
    paddingTop: "70px",
    fontWeight: "bold",
    color: "#2699FB",
  },
  featureTitle:{
    fontWeight: "bold",
    color: "#fff",
  },

}));

const MainBodyContent = () => {
  const classes = useStyles();

    return (
      <section>
          <Typography variant="h3" align="center" className={classes.title} >
            FEATURES
          </Typography>
          <Grid container spacing={2} justifyContent="center" className={classes.gridTitle}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.papers}>
                <AccountBoxIcon color="secondary" className={classes.icons}/>
                  <Typography variant="h5" align="center" className={classes.featureTitle} >
                    DATA
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.papers}>
                <EqualizerIcon className={classes.icons} />
                  <Typography variant="h5" align="center" className={classes.featureTitle} >
                    GRAPH
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.papers} >
                <MoneyOffIcon className={classes.icons} />
                  <Typography variant="h5" align="center" className={classes.featureTitle} >
                    NO CHARGE
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper elevation={0} className={classes.papers} >
                  <Typography variant="h5" align="center" className={classes.featureTitle} >
                  Data sources are from the Korea Institute of Criminology, the Supreme Prosecutors' Office of the Republic of Korea, and the Korean National Police Agency.
                  This website shows you a variety of graphs that you can read and analyze easily without any membership fee!
                  </Typography>
              </Paper>
            </Grid>
          </Grid>
      </section>
    );
};

export default MainBodyContent;