import React, {useState} from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "@material-ui/core/Input";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import clsx from "clsx";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useInput from "../hooks/use-input";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    joinBox:{
        paddingTop: "5%",
        paddingBottom: "100px",
        textAlign:"right",
        height:"100vh",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "12%",
            width: "100%",
          },
        [theme.breakpoints.down('xs')]: {
            paddingTop: "30%",
            width: "100%",
          },
    },
    joinBtn:{
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#2699FB",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
          },
    },
    joinInput:{
        width: "400px",
        height: "50px",
        color:"#fff",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
          },
    },
    inputIdGrid:{
        backgroundColor:"#1f1f1f",
    },
    inputGridPadding:{
        paddingTop:"15px",
        backgroundColor:"#1f1f1f",
    },
    invalid:{
        border: "1px solid #b40e0e",
        backgroundColor: "#fddddd",
        "&.Mui-focused": {
            backgroundColor: "#fbe8d2",
            borderColor:"#ff8800",
        },
    },
    errorText:{
        color: "#b40e0e"
    },

}));

const SignUp = props => {
    const classes                       = useStyles();
    const [open, setOpen]               = useState(false);
    //custom hook
    const { value: enteredEmail ,
        validation: emailValidation,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandlerWithEmailValidation: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput}         = useInput(value => value.trim() !=='' && value.includes('@'));
    const { value: enteredId ,
        validationId: idValidation,
        isValid: enteredIdIsValid,
        hasError: idInputHasError,
        valueChangeHandlerWithIdValidation: idChangeHandler,
        inputBlurHandler: idBlurHandler,
        reset: resetIdInput}            = useInput(value => value.trim() !=='' && value.length >= 6);
    const { value: enteredPass ,
        isValid: enteredPassIsValid,
        hasError: passInputHasError,
        valueChangeHandler: passChangeHandler,
        inputBlurHandler: passBlurHandler,
        reset: resetPassInput}            = useInput(value => value.trim() !=='' && value.length >= 6);
    const {
        isValid: enteredRePassIsValid,
        hasError: rePassInputHasError,
        valueChangeHandler: rePassChangeHandler,
        inputBlurHandler: rePassBlurHandler,
        reset: resetRePassInput}          = useInput(value => value.trim() !=='' && value.length >= 6 && value === enteredPass);
    const idInputClasses                  = idInputHasError? clsx(classes.joinInput, classes.invalid): classes.joinInput;
    const emailInputClasses               = emailInputHasError? clsx(classes.joinInput, classes.invalid) : classes.joinInput;
    const passInputClasses                = passInputHasError? clsx(classes.joinInput, classes.invalid) : classes.joinInput;
    
    const handleClose = () => {
        setOpen(false);
    };

    const fetchJoinInfo = (event) =>{
        event.preventDefault();

        if(!enteredIdIsValid || !enteredEmailIsValid || !enteredPassIsValid || !enteredRePassIsValid || !emailValidation || !idValidation){
            return;
        }
        axios.post("/api/signup", {
            userMemberId: enteredId,
            userMemberEmail : enteredEmail,
            userMemberPass: enteredPass,
        })
        .then(res => {
            props.history.push("/main");
        })
        .catch(err => console.log(err) );
        
        resetEmailInput();
        resetIdInput();
        resetPassInput();
        resetRePassInput();
    }
    return (
        <section>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="primary" />
            </Backdrop>

            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.joinBox}>
                <form onSubmit={fetchJoinInfo}>
                    <Grid item xs={12} className={clsx(classes.inputIdGrid)}>
                        <Input type="text" name="userName" placeholder="ID" onChange={idChangeHandler} onBlur={idBlurHandler}
                            value={enteredId}
                               startAdornment={( <InputAdornment position="start">
                                    <AssignmentIndIcon />
                                    </InputAdornment>)}
                               className={idInputClasses}
                        />
                        {idInputHasError && <Typography className={classes.errorText} align="center">Enter A Valid ID</Typography>}
                        {!idValidation && <Typography className={classes.errorText} align="center">This ID Has Been Already Used</Typography>}
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}> 
                        <Input type="text" name="userEmail" placeholder="Email" onChange={emailChangeHandler} onBlur={emailBlurHandler}
                               value={enteredEmail}
                               startAdornment={( <InputAdornment position="start">
                                   <EmailIcon />
                                   </InputAdornment>)}
                               className={emailInputClasses}
                        />
                        {!emailValidation && <Typography className={classes.errorText} align="center">Your Email Has Been Already Used</Typography>}
                        {emailInputHasError && <Typography className={classes.errorText} align="center">Enter A Valid Email Address</Typography>}
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="Password" onChange={passChangeHandler} onBlur={passBlurHandler}
                               value={enteredPass}
                               startAdornment={( <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>)}
                               className={passInputClasses}
                        />
                        {passInputHasError && <Typography className={classes.errorText} align="center">Enter Valid Password</Typography>}
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPassCheck" placeholder="Confirm Password" onChange={rePassChangeHandler} onBlur={rePassBlurHandler}
                               startAdornment={( <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>)}
                               className={passInputClasses}
                        />
                        {rePassInputHasError && <Typography className={classes.errorText} align="center">Check Your Password</Typography>}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" className={classes.joinBtn} >Sign Up</Button>
                    </Grid>
                </form>
            </Grid>
        </section>
    );
};

export default SignUp;