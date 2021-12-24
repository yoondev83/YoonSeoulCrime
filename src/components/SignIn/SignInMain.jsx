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
import {useDispatch} from "react-redux";
import {authActions} from "../../store/auth-slice";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth: "120rem",
        padding: "0 3.2rem",
        margin: "6.4rem auto 7.4rem auto"
      },
    inputIdGrid:{
        backgroundColor:"#1f1f1f",
        borderRadius: "3%",
    },
    loginInput:{
        width: "100%",
        height: "4rem",
        borderColor:"#fff",
        color: "#fff",
    },
    icon:{
        margin: "0 1rem"
    },
    errorText:{
        color: "#b40e0e",
        fontSize: "1rem",
    },

    loginBtn:{
        fontSize: "2rem",
        paddingRight:0,
        marginTop:"2rem",
        width: "100%",
        height: "4rem",
        backgroundColor:"#2699FB",
    },
    joinBtn:{
        fontSize: "2rem",
        paddingRight:0,
        marginTop:"1rem",
        width: "30rem",
        height: "4rem",
        backgroundColor: "#b4bbd0",
    },
    
    inputGrid:{
        textAlign:"center",
        margin: "1.5rem 0px",
    },
}));

const SignInMain = (props) => {
    const classes                       = useStyles();
    const dispatch                      = useDispatch();
    const [userEmail, setUserEmail]     = useState(null);
    const [userPass, setUserPass]       = useState(null);
    const [loginError, setLoginError]   = useState(false);
   
    const emailHandler = event=>{
        setUserEmail(event.target.value);
    };
    const passHandler = event=>{
        setUserPass(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        axios.post("https://guarded-plains-97482.herokuapp.com/api/signin",
            {
            userMemberEmail: userEmail,
            userMemberPass: userPass
            }, 
        )
        .then(res =>{
            if(res.data.authentication === true){
                dispatch(authActions.login({userEmail: res.data.userEmail, userId: res.data.userId}));
                localStorage.setItem("userEmail", res.data.userEmail);
                localStorage.setItem("userPass", userPass);
                props.history.push("/main");
            }else{
                setLoginError(true);
            }
                })
        .catch(err => console.log(err));

        setUserEmail("");
        setUserPass("");
    };

    return (
        <Container fixed className={classes.container}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <form onSubmit={submitHandler}>
            <Grid item xs={12} className={classes.inputIdGrid}>
                <Input type="email" name="userEmail" placeholder="Email" onChange={emailHandler}
                       startAdornment={( <InputAdornment position="start">
                                            <EmailIcon className={classes.icon}/>
                                        </InputAdornment>)}
                       className={classes.loginInput}/>
            </Grid>
            <Grid item xs={12} className={classes.inputIdGrid}>
                <Input type="password" name="userPass" placeholder="Password" onChange={passHandler}
                       startAdornment={( <InputAdornment position="start">
                           <LockIcon className={classes.icon}/>
                       </InputAdornment>)}
                       className={classes.loginInput}/>
            </Grid>
            {loginError &&  <Typography className={classes.errorText} align="center">Check Your Email or Password!</Typography>}
            <Grid item xs={12} className={classes.inputGrid}>
                {/* <Typography  display="inline" align="left" className={clsx(classes.findTxt, classes.findTxtId)}>Forgot your password?</Typography> */}
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" className={classes.loginBtn} >Login</Button>
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" href="/api/signup" className={clsx(classes.joinBtn)}>Sign Up</Button>
            </Grid>
            </form>
        </Grid>
    </Container>
    );
}

export default SignInMain;