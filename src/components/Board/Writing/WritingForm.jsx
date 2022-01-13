import React, { useState } from "react";
import { Fab, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles(() =>({
    container:{
        maxWidth: "120rem",
        padding: "0 3.2rem",
        margin: "6.4rem auto"
      },
    inputTxt:{
        color: "#ced4da",
        fontSize: "1.2rem",
        fontWeight: 300,
    },

    wrtInput:{
        border: "2px solid #ced4da",
        width: "80%",
        backgroundColor:"#1f1f1f",
    },
    wrtBtn:{
        marginRight:"10%",
        marginTop: "1.5rem",
    },
}));


const WritingForm = (props) => {
    const classes                       =   useStyles();
    const [postTitle, setPostTitle]     =   useState(null);
    const [postContent, setPostContent] =   useState(null);
    const userId                         =  localStorage.getItem("userId");

    const titleChangeHandler        = event =>{
        setPostTitle(event.target.value);
    };
    const contentChangeHandler      = event =>{
        setPostContent(event.target.value);
    };

    const submitPostHandler = event => {
        event.preventDefault();
        axios.post("https://guarded-plains-97482.herokuapp.com/api/board/boardlist", {
            title: postTitle,
            content: postContent,
            userId: userId,
        })
        .then(() => {
            props.isChanged(true);
            window.location.replace("/YoonSeoulCrimeFront/api/board/boardlist");
        })
        .catch(err => console.log(err));

        setPostTitle("");
        setPostContent("");
    };

    return(
       <Container fixed className={classes.container}>
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
        </Container>
    );
};

export default WritingForm;