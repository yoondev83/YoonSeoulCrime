import { Container, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    sectionContact:{
        padding: "9.6rem 0",
    },
    container:{
        maxWidth: "120rem",
        padding: "0 3.2rem",
        margin: "0 auto"
      },
    formTitle:{
        fontSize: "5.2rem",
        fontWeight: "700",
        letterSpacing: 0.75,
        transform: "translate(0, -20%)"
    },
    grid:{
        padding:"2rem 0"
    },
    inputLabel:{
        color:"#ced4da",
        fontSize: "1.4rem",
        fontWeight: "500",
        letterSpacing: 0.75,
    },
    inputText:{
        color:"#fff",
        fontSize: "1.6rem",
    },
    logoBox:{
        position: "relative",
        display: "flex",
    },
    logo:{
        width: "100%",
        marginBottom: "4.4rem"
    },
    emailBoxText:{
        fontSize: "4.4rem",
        fontWeight: "700",
        letterSpacing: 0.75,
    },
    youText:{
        color:"#4dabf7"
    },
    email:{
        fontSize: "2rem",
        fontWeight: "500",
    },
    contactBtn:{
        margin: "0 auto",
        width: "100%"
    },
    sendBtn:{
        width: "98%",
        "& h6":{
            fontSize: "1.4rem",
        }
    },
    [theme.breakpoints.down('md')]: {
        container:{
            padding: "1rem",
          },
        logo:{
            marginBottom: "10.4rem"
        },
    }
  

}
));
  
    
const Contact = () => {
    const classes = useStyles();


    return (
    <section className={classes.sectionContact}>
        <Container fixed className={classes.container}>
            <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={2}>
                <Grid item className={classes.contactForm} xs={12} sm={12} md={6}>
                    <Typography variant="h2" align="left" className={classes.formTitle} >
                            Hello, Let's get in touch
                    </Typography>
                    <form noValidate autoComplete="off">
                        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
                            <Grid className={classes.grid} item xs={12} sm={12} md={6}>
                                <TextField id="standard-required" label="First Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputText}} />
                            </Grid>
                            <Grid className={classes.grid} item xs={12} sm={12} md={6}>
                                <TextField required id="standard-required" label="Last Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputText}} />
                            </Grid>
                            <Grid className={classes.grid} item xs={12} sm={12}>
                                <TextField required id="standard-required" label="Email" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputText}} />
                            </Grid>
                            <Grid className={classes.grid} item xs={12} sm={12}>
                                <TextField required id="standard-multiline-static" label="Message" fullWidth multiline rows={4} InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputText }} />
                            </Grid>
                            <div className={classes.contactBtn}>
                                <Button variant="contained" color="secondary" className={classes.sendBtn} href="mailto:yoondev83@gmail.com"> <Typography variant="h6" align="center">Send</Typography></Button>
                            </div>
                        </Grid>    
                    </form>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div classes={classes.logoBox}>
                        <img src="./image/logo1.jpeg" className={classes.logo} alt="contact logo"/>
                    </div>
                    <div className={classes.emailBox}>
                        <Typography variant="h2" align="left" className={classes.emailBoxText} >
                                I'd Love to Hear From <span className={classes.youText}>You</span>
                        </Typography>
                        <Typography variant="h2" align="left" className={classes.email} >
                                yoondev83@gmail.com
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>        
    </section>
      );
    };
    
    export default Contact;