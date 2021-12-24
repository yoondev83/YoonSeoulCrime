import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  sectionFeature:{
    padding:"4.8rem 0 3.2rem 0",
    backgroundColor: "#1f1f1f"
  },
  container:{
    maxWidth: "120rem",
    padding: "0 3.2rem",
    margin: "0 auto"
  },
  title:{
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#ced4da",
    letterSpacing: "0.75px",
    marginBottom:"7.4rem",
  },
  icons: {
    fontSize: "150px",
    color: "#fff",
  },
  papers:{
    backgroundColor: "#1f1f1f",
    width: "100%",
    textAlign: "center",
    "& h3":{
      fontSize: "2.4rem",
    }
  },
  featureIconTitle:{
    fontWeight: "bold",
    color: "#ced4da",
  },
  featureContent:{
    color:"#ced4da",
    lineHeight:1.8,
    paddingTop: "7rem",
  },
}));

const MainBodyContent = () => {
  const classes = useStyles();

    return (
      <section className={classes.sectionFeature}>
         <Container fixed className={classes.container}>
          <Typography variant="h2" align="center" className={classes.title} >
            features
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.papers}>
                <AccountBoxIcon color="secondary" className={classes.icons}/>
                  <Typography variant="h3" align="center" className={classes.featureIconTitle} >
                    DATA
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.papers}>
                <EqualizerIcon className={classes.icons} />
                  <Typography variant="h3" align="center" className={classes.featureIconTitle} >
                    GRAPH
                  </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.papers} >
                <MoneyOffIcon className={classes.icons} />
                  <Typography variant="h3" align="center" className={classes.featureIconTitle} >
                    NO CHARGE
                  </Typography>
              </Paper>
            </Grid>
            <Grid item lg={12}>
              <Paper elevation={0} className={classes.papers} >
                  <Typography variant="h3" align="center" className={classes.featureContent}>
                  Data sources are from the Korea Institute of Criminology, the Supreme Prosecutors' Office of the Republic of Korea, and Data Seoul!
                  This website shows you a variety of graphs that you can read and analyze easily without any membership fee!
                  </Typography>
              </Paper>
            </Grid>
          </Grid>
          </Container>
      </section>
    );
};

export default MainBodyContent;