import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import clsx from "clsx";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    section:{
        height:"100vh",
        [theme.breakpoints.down('md')]: {
            height:"100%",
          },
    },
    loginBox:{
        paddingTop: "8%",
        [theme.breakpoints.down('md')]: {
            paddingTop: "20%",
          },
        [theme.breakpoints.down('xs')]: {
            paddingTop: "40%",
          },
    },
    loginBtn:{
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#2699FB",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
    },
    joinBtn:{
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor: "#b4bbd0",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
    },
    loginInput:{
        width: "400px",
        height: "50px",
        borderColor:"#fff",
        color: "#fff",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
    },
    inputGrid:{
        textAlign:"center",
        margin: "20px 0px",
    },

    inputGridPadding:{
        paddingTop:"15px",
        backgroundColor:"#1f1f1f",
    },
    inputIdGrid:{
        backgroundColor:"#1f1f1f"
    },

    findTxt:{
        color: "#b4bbd0",
        padding: "0 40px",
    },
}));

const SignInMain = () => {
    const classes = useStyles();
    const [userId, setUserId] = useState(null);
    const [userPass, setUserPass] = useState(null);
   
    const idHandler = event=>{
        setUserId(event.target.value);
    };
    const passHandler = event=>{
        setUserPass(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        axios.post("/login", {
            userMemberId: userId,
            userMemberPass: userPass
        });
    };

    return (
        <section className={classes.section}>
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
            <form onSubmit={submitHandler}>
            <Grid item xs={12} className={classes.inputIdGrid}>
                <Input type="text" name="userId" placeholder="ID" onChange={idHandler}
                       startAdornment={( <InputAdornment position="start">
                                            <EmailIcon className={classes.icon}/>
                                        </InputAdornment>)}
                       className={classes.loginInput}/>
            </Grid>
            <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                <Input type="password" name="userPass" placeholder="Password" onChange={passHandler}
                       startAdornment={( <InputAdornment position="start">
                           <LockIcon className={classes.icon}/>
                       </InputAdornment>)}
                       className={classes.loginInput}/>
            </Grid>
            <Grid item xs={12} className={classes.inputGrid}>
                <Typography  display="inline" align="left" className={clsx(classes.findTxt, classes.findTxtId)}>Forgot your password?</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" className={classes.loginBtn} >Login</Button>
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" href="/signUp" className={clsx(classes.joinBtn)}>Sign Up</Button>
            </Grid>
            </form>
        </Grid>
    </section>
    );
}

export default SignInMain;