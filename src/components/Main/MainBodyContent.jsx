import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import EqualizerIcon from '@material-ui/icons/Equalizer';

/*
  모바일 사이즈 정도 되었을때 메인바디컨텐츠와 컨택트가 겹쳐버림.
*/
const useStyles = makeStyles((theme) => ({
  bodyDiv:{
    paddingTop: "100px",
    height: "110vh",
    backgroundColor: "#252933",
    [theme.breakpoints.down('md')]: {
      height: "115vh",
    },
    [theme.breakpoints.down('sm')]: {
      height: "120vh",
    },
  },
  gridTitle: {
    paddingTop: "80px",
  },
  icons: {
    fontSize: "150px",
    color: "#fff",
  },
  papers:{
    backgroundColor: "#252933",
    width: "100%",
    textAlign: "center",
  },
  title:{
    paddingTop: "30px",
    fontWeight: "bold",
    color: "#fff",
  },
  featureIconTitle:{
    fontWeight: "bold",
    color: "#fff",
  },
  featureContent:{
    color:"#f2f2f2",
    paddingTop: 70,
  }
}));

const MainBodyContent = () => {
  const classes = useStyles();

    return (
      <div className={classes.bodyDiv}>
          <Typography variant="h3" align="center" className={classes.title} >
            FEATURES
          </Typography>
          <Grid container spacing={2} justifyContent="center" className={classes.gridTitle}>
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={0} className={classes.papers}>
                <AccountBoxIcon color="secondary" className={classes.icons}/>
                  <Typography variant="h5" align="center" className={classes.featureIconTitle} >
                    DATA
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={0} className={classes.papers}>
                <EqualizerIcon className={classes.icons} />
                  <Typography variant="h5" align="center" className={classes.featureIconTitle} >
                    GRAPH
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={0} className={classes.papers} >
                <MoneyOffIcon className={classes.icons} />
                  <Typography variant="h5" align="center" className={classes.featureIconTitle} >
                    NO CHARGE
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper elevation={0} className={classes.papers} >
                  <Typography variant="h5" align="center" className={classes.featureContent}>
                  Data sources are from the Korea Institute of Criminology, the Supreme Prosecutors' Office of the Republic of Korea, and Data Seoul!
                  This website shows you a variety of graphs that you can read and analyze easily without any membership fee!
                  </Typography>
              </Paper>
            </Grid>
          </Grid>
      </div>
    );
};

export default MainBodyContent;