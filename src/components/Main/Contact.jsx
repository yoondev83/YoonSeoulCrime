import react from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import MyButton from "../UI/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
        paddingLeft: "5%",
        display: 'flex',
        flexWrap: 'wrap',
      },

    gridTitle: {
        paddingTop: "8px",
        height: "90vh",
      },
      
    inputLabel:{
        color: "#2699FB",
        fontSize: 25,
    },
        
    inputLongLineText:{
        color: "#fff",
        borderBottom: "solid #fff",
        width: "450px",
    },
    
    inputLongLineEmail:{
        color: "#fff",
        borderBottom: "solid #fff",
        width: "450px",
    },
    
    inputMsg:{
        color: "#fff",
        borderBottom: "solid #fff",
        width: "89%",

    },
        
    title:{
        padding: "35px 0 35px 0",
        color: "#2699FB",
    },
    grid:{
        paddingTop:"10px"
    },
    
    sendBtn:{
        marginTop: "20px",
        paddingRight: "12%"
    }
    
}
));
  
    
const Contact = () => {
    const classes = useStyles();


    return (
        <section className={classes.gridTitle}>
                <Typography variant="h3" align="center" className={classes.title} >
                    CONTACT
                </Typography>
                   
                    <Grid container spacing={0} alignItems="flex-start"  justifyContent="center" >
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid className={classes.grid} item xs={12} md={6}>
                            <TextField id="standard-required" label="First Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineText}} />
                        </Grid>
                        <Grid className={classes.grid} item xs={12} md={6}>
                            <TextField required id="standard-required" label="Last Name" InputLabelProps={{ className: classes.inputLabel }} InputProps={{className:classes.inputLongLineText }}/>
                        </Grid>
                        <Grid className={classes.grid} item xs={12} md={12}>
                            <TextField required id="standard-required" label="Email"  InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputLongLineEmail}}  />
                        </Grid>
                        <Grid className={classes.grid} item xs={12} md={12}>
                            <TextField required id="standard-multiline-static" label="Message" fullWidth multiline rows={4} InputLabelProps={{ className: classes.inputLabel }} InputProps={{className: classes.inputMsg }} />
                        </Grid>
                    </form>
                    </Grid>
                    <Grid className={classes.sendBtn} container spacing={0} justifyContent="flex-end">
                            <MyButton  color="primary" message="Send" icon={<SendIcon />} />
                    </Grid>
        </section>
      );
    };
    
    export default Contact;