import { Grid, Paper, Typography } from "@material-ui/core";
import {useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Container} from "@material-ui/core"
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
    paper:{
        paddingLeft: "10px",
        borderRadius: "0",
        boxShadow: "none",
        padding: "1.2rem" ,
        backgroundColor: "#343a40",
        "& span":{
            fontSize: "1.4rem",
            fontWeight: 500,
        }
    },
    postInfoUser:{
        color: "#52CDB9",
        paddingLeft: "0.3rem",
    },
    content:{
        marginTop:"4.4rem",
        color: "#ced4da",
    },
    heart:{
        width: "4.2rem",
        height: "4.2rem",
        paddingBottom: 0,
        marginRight: "1.2rem"
    },
    brokenHeart:{
        width: "4.2rem",
        height: "4.6rem",
        marginTop:"0.5rem"
    },
    iconGrid:{
        textAlign:"center",
        paddingRight: "1.5rem",
        },
});

const Post = props => {
    const classes                    =   useStyles();
    const [heart, setHeart]          =   useState(props.data.heart);
    const [brokenHeart, setBrkHeart] =   useState(props.data.brokenHeart);
    const [heartPoint, setHeartPoint]=   useState(1);
    const isAuth                     =   useSelector(state => state.auth.isAuthenticated);
    const heartBtnHandler            =  () =>{
        if(heartPoint < 1){
            return;
        }
        else{
            setHeartPoint(heartPoint-1);
            setHeart(heart+1);
            axios.patch("/api/board/boardlist",{
                postNum: props.data.articleNum,
                heart: heart+1
            }).then(console.log("성공"))
            .catch(err => console.log(err));
        }
    }
    const brokenHeartBtnHandler      =  () =>{
        if(heartPoint < 1){
            return;
        }
        else{
        setHeartPoint(heartPoint-1);
        setBrkHeart(brokenHeart+1);
        axios.patch("/api/board/boardlist",{
            postNum: props.data.articleNum,
            brokenHeart: brokenHeart+1,
        }).then(console.log("성공"))
        .catch(err => console.log(err));
        }
    }
    return(
            <Container >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography component={'span'} variant={'body2'}  className={classes.postInfoUser}>userid</Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography component={'span'} variant={'body2'} className={classes.content}>{props.data.content}</Typography>
                    </Paper>
                </Grid>
                {isAuth &&
                <Grid item xs={12} className={classes.iconGrid}>
                    <IconButton aria-label="heart" onClick={heartBtnHandler}>
                        <img className={classes.heart} src="/icons/heart.png" alt="heart"/>
                        <Typography component={'span'} variant={"subtitle1"} className={classes.content}>{heart}</Typography>
                    </IconButton>
                    <IconButton aria-label="brokenHeart" onClick={brokenHeartBtnHandler}>
                        <img className={classes.brokenHeart} src="/icons/broken_heart.png" alt="broken heart"/>
                        <Typography component={'span'} variant={"subtitle1"} className={classes.content}>{brokenHeart}</Typography>
                    </IconButton>
                </Grid>
                }
            </Container>

    );
};

export default Post;