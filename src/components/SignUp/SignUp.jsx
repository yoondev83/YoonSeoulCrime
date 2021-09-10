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

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    joinBox:{
        paddingTop: "10%",
        textAlign:"right",
    },
    joinBtn:{
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#2699FB",
    },
    joinInput:{
        width: "400px",
        height: "50px",
        color:"#fff"
    },
    inputIdGrid:{
        backgroundColor:"#1f1f1f",
    },
    inputGridPadding:{
        paddingTop:"15px",
        backgroundColor:"#1f1f1f",
    },

}));

const SignUp = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        setTimeout(() => {
            setOpen(false);
        }, 500);
    };



    const fetchJoinInfo = (event) =>{
        event.preventDefault();
        console.log("email: "+ event.target.userEmail.value);
        console.log("pass: " + event.target.userPass.value);
        console.log("name: " + event.target.userName.value);
        console.log("phone: " + event.target.userPhone.value);
        axios.post("/create", {
            email : event.target.userEmail.value,
            pass: event.target.userPass.value,
            name: event.target.userName.value,
            phone: event.target.userPhone.value,
        }).then(res => {
            console.log("Post success! + res.data: " + res.data);
        }).catch(err => {
            console.log("Login Failed");
            handleToggle();
        });
    }


    return (
        <section>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="primary" />
            </Backdrop>

            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.joinBox}>
                <form onSubmit={fetchJoinInfo}>
                    <Grid item xs={12} className={clsx(classes.inputIdGrid)}>
                        <Input type="text" name="userName" placeholder="ID"
                               startAdornment={( <InputAdornment position="start">
                                    <AssignmentIndIcon />
                                    </InputAdornment>)}
                               className={classes.joinInput}

                        />
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="text" name="userEmail" placeholder="Email"
                               startAdornment={( <InputAdornment position="start">
                                   <EmailIcon />
                                   </InputAdornment>)}
                               className={classes.joinInput}
                        />
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="Password"
                               startAdornment={( <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>)}
                               className={classes.joinInput}
                        />
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPassCheck" placeholder="Password"
                               startAdornment={( <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>)}
                               className={classes.joinInput}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" className={classes.joinBtn} >회원가입</Button>
                    </Grid>
                </form>
            </Grid>
        </section>
    );
};

export default SignUp;