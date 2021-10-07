import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
    paper:{
        paddingLeft: "10px",
        borderRadius: "0",
        boxShadow: "none"
    },
    postInfoUser:{
        fontSize: "24px",
        color: "#52CDB9",
        paddingLeft: "3px",
        paddingTop:"10px"
    },
    content:{
        color:"#6B6B6B"
    },
    heart:{
        width: "68px",
        height: "80px",
        paddingBottom: 0,
        marginRight: 30
    },
    brokenHeart:{
        width: "60px",
        height: "65px",
        marginTop:"10px"
    },
    iconGrid:{
        textAlign:"center",
        paddingRight: "15px",
        paddingTop: 50
        },
});

const Post = props => {
    const classes                    =   useStyles();
    const [heart, setHeart]          =   useState(props.data.heart);
    const [brokenHeart, setBrkHeart] =   useState(props.data.brokenHeart);
    const heartBtnHandler            =  () =>{
        setHeart(heart+1);
        console.log(heart);
        axios.patch("/api/board/boardlist",{
            postNum: props.data.articleNum,
            heart: heart+1
        }).then(console.log("성공"))
        .catch(err => console.log(err));
    }
    const brokenHeartBtnHandler      =  () =>{
        setBrkHeart(brokenHeart+1);
        
        axios.patch("/api/board/boardlist",{
            postNum: props.data.articleNum,
            brokenHeart: brokenHeart+1,
        }).then(console.log("성공"))
        .catch(err => console.log(err));
    }

    return(
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0}>
                <Grid item xs={12}>
                    <Paper className={clsx(classes.paper)}><Typography component={'span'} variant={'body2'}  className={classes.postInfoUser}>{props.data.userId}</Typography></Paper>
                    <Paper className={clsx(classes.paper)}><Typography component={'span'} variant={'body2'} className={classes.content}>{props.data.content}</Typography></Paper>
                </Grid>
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
            </Grid>

    );
};

export default Post;