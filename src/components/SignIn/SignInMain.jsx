import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import clsx from "clsx";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    section:{
        fontFamily: "twayair",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    loginBox:{
        paddingTop: "16%",
        textAlign:"right",
    },
    loginBtn:{
        fontFamily: "twayair",
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor:"#5c842c",
    },
    joinBtn:{
        fontFamily: "twayair",
        fontSize: "30px",
        paddingRight:0,
        marginTop:"10px",
        width: "400px",
        height: "50px",
        backgroundColor: "#b4bbd0"
    },
    loginInput:{
        width: "400px",
        height: "50px",
    },
    inputGrid:{
        textAlign:"center",
        margin: "20px 0px",
    },

    inputGridPadding:{
        paddingTop:"15px",
    },

    findTxt:{
        fontFamily: "twayair",
        color: "#b4bbd0",
        padding: "0 40px",
    },
    findTxtId:{
        borderRight: "solid"

    },
}));

const SignInMain = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        setTimeout(() => {
            setOpen(false);
            console.log("hi");
        }, 500);
    };

    return (
        <section className={classes.section}>
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <CircularProgress color="primary" />
        </Backdrop>
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.loginBox}>
            <form >
            <Grid item xs={12} >
                <Input type="text" name="userEmail" placeholder="이메일"
                       startAdornment={( <InputAdornment position="start">
                                            <EmailIcon className={classes.icon}/>
                                        </InputAdornment>)}
                       className={classes.loginInput}/>
            </Grid>
            <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                <Input type="password" name="userPass" placeholder="비밀번호"
                       startAdornment={( <InputAdornment position="start">
                           <LockIcon className={classes.icon}/>
                       </InputAdornment>)}
                       className={classes.loginInput}/>
            </Grid>
            <Grid item xs={12} className={classes.inputGrid}>
                <Typography  display="inline" align="left" className={clsx(classes.findTxt, classes.findTxtId)}>아이디 찾기</Typography>
                <Typography  display="inline" align="left" className={classes.findTxt}>비밀번호 찾기</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" className={classes.loginBtn} >로그인</Button>
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" href="/signUp" className={clsx(classes.joinBtn)}>회원가입</Button>
            </Grid>
            </form>
        </Grid>
    </section>
    );
}

export default SignInMain;