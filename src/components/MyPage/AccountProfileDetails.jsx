import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, makeStyles, TextField} from '@material-ui/core';
import {useSelector} from "react-redux";
import useInput from "../hooks/use-input";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useState } from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { authActions } from '../../store/auth-slice';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
    joinInput:{
        // width: "400px",
        height: "63px",
        color:"#fff",
        [theme.breakpoints.down('xs')]: {
          },
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
    deleteText:{
      color: "#b40e0e",
      textAlign:"left",
      float:"left",
      paddingRight: 20,
      fontSize: 15
    },
    deleteBtn:{
      float: "left",
      padding: 0,
      color:"#b40e0e",
      fontSize: 15
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

}));



const AccountProfileDetails = (props) => {
    const classes                          = useStyles();
    const [isAnswerYes, setIsAnswerYes]    = useState(false);
    const handleClose = () => {
      setIsAnswerYes(false);
    };

    const userId                           = useSelector(state => state.auth.userId);
    const userEmail                        = useSelector(state => state.auth.userEmail);
    const dispatch                         = useDispatch();
    const { value: enteredPass,
        valueChangeHandler: passChangeHandler,
        inputBlurHandler: passBlurHandler,
        hasError: passInputHasError,
        reset: resetPassInput}            = useInput(value => value.trim() !=='' && value.length >= 6);
    const {value: enteredRePass,
        valueChangeHandler: rePassChangeHandler,
        inputBlurHandler: rePassBlurHandler,
        hasError: rePassInputHasError,
        reset: resetRePassInput}          = useInput(value => value.trim() !=='' && value.length >= 6 && value === enteredPass);
    const passInputClasses                = passInputHasError? clsx(classes.joinInput, classes.invalid) : classes.joinInput;
    const confirmPassInputClasses         = rePassInputHasError? clsx(classes.joinInput, classes.invalid) : classes.joinInput;
    const lastCheckAlert                  = () => confirmAlert({
      title: "Delete your account",
      message: "Do you really want to delete your account?",
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteBtnHandler(),
        },
        {
          label: 'No',
        }
      ]
    });;
    const deleteBtnHandler                = (event) =>{
      event.preventDefault();
      dispatch(authActions.logout());
      axios.post("/api/account/removal", {userEmail: userEmail}, {
        headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }})
      .then(res => {
             window.location.replace("/main");
           })
           .catch(err => console.log(err));
    };
    const changePassHandler = (event) =>{
        event.preventDefault();

        if(!passInputHasError && !rePassInputHasError && enteredPass !== ''){
          axios.patch("/api/account/change", {userEmail: userEmail, userPass: enteredPass}, {
            headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }})
          .then(res => {
            setIsAnswerYes(true);
          })
          .catch(err => console.log(err));
          
        }
        resetPassInput();
        resetRePassInput();
    }

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="You can change your info here" title="Profile"/>
        <Divider />
        <CardContent>
    {isAnswerYes &&  <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={classes.modal}
                            open={isAnswerYes} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}  
                            BackdropProps={{timeout: 500,}}>
                      <Fade in={isAnswerYes}>
                        <div className={classes.paper}>
                          <h2 id="transition-modal-title">Success!</h2>
                          <p id="transition-modal-description">Your password has successfully changed!</p>
                        </div>
                      </Fade>
                    </Modal>}
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // helperText="You"
                label="Email"
                name="firstName"
                disabled
                value={userEmail}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="ID"
                disabled
                value={userId}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Password" name="password" onChange={passChangeHandler} onBlur={passBlurHandler}
                type="password" required variant="outlined" value={enteredPass} className={passInputClasses}/>
               {passInputHasError && <Typography className={classes.errorText} align="center">Password should be more than 6 letters</Typography>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Confirm Password" onChange={rePassChangeHandler} onBlur={rePassBlurHandler} type="password"
                variant="outlined" required value={enteredRePass} className={confirmPassInputClasses}/>
                {rePassInputHasError && <Typography className={classes.errorText} align="center">Check Your Password</Typography>}
            </Grid>
           
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{display: 'flex', justifyContent: 'flex-end',  p: 2}}>
          <Button color="primary" variant="contained" onClick={changePassHandler}>
            Save details
          </Button>
        </Box>
      </Card>
            <Typography className={classes.deleteText} display={"inline"} align="center"> Do you want to delete your account?</Typography>
          <Button color="primary" className={classes.deleteBtn}  onClick={lastCheckAlert}>
            DELETE ACCOUNT
          </Button>
       
    </form>
  );
};

export default AccountProfileDetails;