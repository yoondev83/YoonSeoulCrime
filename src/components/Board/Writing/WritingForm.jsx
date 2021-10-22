import React, { useState } from "react";
import { Fab, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios";
const useStyles = makeStyles(() =>({
    inputTxt:{
        color: "#fff",
    },

    wrtInput:{
        border: "2px solid #fff",
        width: "80%",
        backgroundColor:"#1f1f1f",
    },
    wrtBtn:{
        marginRight:"10%",
        marginTop: "20px",
    },
    section: {
        paddingTop:"10%",
        height: "80vh"
      },
}));


const WritingForm = (props) => {
    const classes                       =   useStyles();
    const [postTitle, setPostTitle]     =   useState(null);
    const [postContent, setPostContent] =   useState(null);

    const titleChangeHandler        = event =>{
        setPostTitle(event.target.value);
    };
    const contentChangeHandler      = event =>{
        setPostContent(event.target.value);
    };

    const submitPostHandler = event => {
        event.preventDefault();
        axios.post("/api/board/boardlist", {
            title: postTitle,
            content: postContent,
            userId: props.userId,
        })
        .then(() => {
            props.isChanged(true);
            window.location.replace("/api/board/boardlist");
        })
        .catch(err => console.log(err));

        setPostTitle("");
        setPostContent("");
    };

    return(
        <>
        <section className={classes.section}>
                <form noValidate autoComplete="off" >
                    <Grid container spacing={0} alignItems="flex-start" justifyContent="center" >
                        <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.wrtInput} InputLabelProps={{ className: classes.inputTxt}} InputProps={{className:classes.inputTxt }} onChange={titleChangeHandler} />
                        <TextField id="outlined-basic" label="Content" variant="outlined" multiline rows={12} className={classes.wrtInput} InputLabelProps={{ className: classes.inputTxt}} InputProps={{className:classes.inputTxt }} onChange={contentChangeHandler}/>
                    </Grid>
                    <Grid container spacing={0} alignItems="flex-start" justifyContent="flex-end" >
                        <Fab color="secondary" aria-label="edit" className={classes.wrtBtn} onClick={submitPostHandler}>
                            <EditIcon />
                        </Fab>
                    </Grid>
                </form>
        </section>
        </>
    );
};

export default WritingForm;