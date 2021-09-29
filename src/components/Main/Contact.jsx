import { Container, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    contactFirPap:{
        backgroundColor: "#121212",
        display: "inline-block",
        width: "50%",
        // height: 40,
        [theme.breakpoints.down('md')]: {
            width: "55%",
            display: "block",
            height: 550
          },
          [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
    },
    contactFirContainer:{
        paddingLeft: 40,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
          },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
        },
    },
    leftTitle:{
        paddingLeft:25,
        paddingTop: 100,
        color: "#667081",
        [theme.breakpoints.down('md')]: {
            paddingLeft:53,
            paddingTop: 30,
          },
        [theme.breakpoints.down('sm')]: {
            paddingLeft:20,
            paddingTop: 30,
          },
        
    },
    contactForm: {
        paddingTop: 50,
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
        },
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
            paddingLeft: 50,
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
            },
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10,
          },
    },

    inputLabel:{
        color: "#f2f2f2",
        fontSize: 25,
    },
    inputLongLineText:{
        borderBottom: "solid white",
        width: "500px",
        color: "#fff",
        
        [theme.breakpoints.down('md')]: {
            width: "520px",
          },
        [theme.breakpoints.down('sm')]: {
            width: "500px",
          },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
          },
    },

    sendBtn:{
        marginTop: 50,
        width:"50%",
        float: "right",
        fontWeight: 400,
        
        [theme.breakpoints.down('md')]: {
            marginTop: 10,
            width:"100%"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginRight:0,
            float: "right",
          },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            marginRight:0,
            float: "right",
          },
        
    },
    contactSecPap:{
        paddingTop:200,
        display: "inline-block",
        backgroundColor: "#10203d",
        width: "50%",
        height: "1000px",
        [theme.breakpoints.down('md')]: {
            display: "block",
            width: "100%",
            height: "600px",
          },
    },
    contactSecContainer:{
        paddingRight: 60,
        [theme.breakpoints.down('md')]: {
            paddingRight: 15,
            display: "block"
          },
    },
    rightTitle:{
        marginBottom: 120,
        fontWeight: 400,
        color: "#284168",
        [theme.breakpoints.down('sm')]: {
            marginBottom: 50
          },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 0
          },
    },
    rightSmallTitle:{
        fontWeight: 500,
        color: "#476597",
    },
    emailAddr:{
        fontWeight: 400,
        color:"#384e72",

    }

}
));
  
    
const Contact = () => {
    const classes = useStyles();


    return (
        <div>
             <Paper className={classes.contactFirPap}>
                <Container maxWidth="sm" className={classes.contactFirContainer}>
                    <Typography variant="h6" align="left" className={classes.leftTitle} >
                            Hello, Let's get in touch
                    </Typography>
                    <form className={classes.contactForm} noValidate autoComplete="off">
                            <Grid className={classes.grid} item sm={12} md={12}>
                                {/* <TextField id="standard-required" label="First Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineText}} /> */}
                                <TextField id="standard-required" label="First Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineText}} />
                            </Grid>
                            <Grid className={classes.grid} item sm={12} md={12}>
                                <TextField id="standard-required" label="Last Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineText}} />
                            </Grid>
                            <Grid className={classes.grid} item sm={12} md={12}>
                                <TextField id="standard-required" label="Email" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineText}} />
                            </Grid>
                            <Grid className={classes.grid} item sm={12} md={12}>
                                <TextField required id="standard-multiline-static" label="Message" fullWidth multiline rows={4} InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineText }} />
                            </Grid>
                            <Grid className={classes.grid} item sm={12} md={12}>
                                <Button variant="contained" color="secondary" className={classes.sendBtn}> <Typography variant="h6" align="center">Send</Typography></Button>
                            </Grid>
                            
                        </form>
                </Container>
             </Paper>
             <Paper className={classes.contactSecPap}>
                <Container maxWidth="sm" className={classes.contactSecContainer}>
                    <div className={classes.rightTitleDiv}>
                    <Typography variant="h2" align="left" className={classes.rightTitle} >
                            I'd Love to Hear From <span className={classes.rightSmallTitle}>You</span>
                    </Typography>
                    <Typography variant="h6" align="left" className={classes.emailAddr} >
                            yoondev83@gmail.com
                    </Typography>
                    </div>
                </Container>
             </Paper>
                
        </div>
      );
    };
    
    export default Contact;