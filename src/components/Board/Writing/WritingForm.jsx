import React from "react";
import { Container, Fab, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles(() =>({
    writingContainer: {
        backgroundColor: "#1f1f1f",
    },

    inputTxt:{
        color: "#fff",
    },

    wrtInput:{
        border: "2px solid #fff",
        width: "80%"
    },
    wrtBtn:{
        marginRight:"10%",
        marginTop: "20px"
    },
    section: {
        paddingTop:"20%",
        height: "100vh",
      }
}));


const WritingForm = () => {
    const classes = useStyles();
    return(
        <section className={classes.section}>
                <form noValidate autoComplete="off">
                    <Grid container spacing={0} alignItems="flex-start" justifyContent="center" >
                        <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.wrtInput} InputLabelProps={{ className: classes.inputTxt}} InputProps={{className:classes.inputTxt }}/>
                        <TextField id="outlined-basic" label="Content" variant="outlined" multiline rows={8} className={classes.wrtInput} InputLabelProps={{ className: classes.inputTxt}} InputProps={{className:classes.inputTxt }}/>
                    </Grid>
                    <Grid container spacing={0} alignItems="flex-start" justifyContent="flex-end" >
                        <Fab color="secondary" aria-label="edit" className={classes.wrtBtn}>
                            <EditIcon />
                        </Fab>

                    </Grid>
                </form>
        </section>

    );
};

export default WritingForm;