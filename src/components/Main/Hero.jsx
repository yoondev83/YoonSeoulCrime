import Grid from '@material-ui/core/Grid';
import MainVideo from './MainVideo';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroGrid:{
        position: "relative"
    },
    heroText:{
        zIndex: 10,
        padding: "0 3.2rem",
        position: "absolute",
        top: "50%",
        left: "1%",
        transform: "translate(0, -50%)",
        "& h1":{
            fontSize: "3.6rem",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            lineHeight: 1.05,
        },
        "& h2":{
            fontSize: "3rem",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
            marginBottom: "0.5rem"
        },
        "& h6":{
            fontSize: "1.6rem",
            fontWeight: 400,
            letterSpacing: "-0.5px",
            lineHeight: 1.2
        },
    }
}));
const Hero = () =>{
    const classes = useStyles();
    return(
        <section className={classes.sectionHero}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.heroGrid}>
                <MainVideo videoSrc="video/project_main.mp4" />
                <div className={classes.heroText}>
                    <Typography variant="h1" align="left">THE VISUALIZED CRIME DATA IN SEOUL </Typography>
                    <Typography variant="h2" align="left">Easy to Access & Free for Everyone </Typography>
                    <Typography variant="subtitle1" align="left">This website is created to show you visualized data</Typography>
                    <Typography variant="subtitle1" align="left" >so that you would have better understandings of Seoul, South Korea </Typography>
                </div>
            </Grid>
        </section>
    );
}

export default Hero;