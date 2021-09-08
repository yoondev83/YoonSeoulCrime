import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
},
    buttonMessage:{
    fontWeight: "700",
  },
}));

const MyButton = props => {
    const classes = useStyles();

    return (
        <>
             <Button variant="contained" color={props.color} className={classes.button} endIcon={props.icon} > <p className={classes.buttonMessage}>{props.message}</p> </Button>
        </>
    );
};

export default MyButton;