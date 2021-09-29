import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) =>({

    legendDiv:{
        display:"flex",
        width:"100%", 
        alignItems:"center",
        justifyContent:"center",
        height: "5vh", 
        fontWeight: 400,
        [theme.breakpoints.down('sm')]: {
            display:"block",
        },
    },
    legendTxt:{
        color: "#fff",
    }
}));

const Legend = props =>{
    const classes = useStyles();
    return(
        <div className={classes.legendDiv}>
            {props.data.map(item => (
                <div key={item.title} style={{backgroundColor: item.color}} className={classes.legendDiv}>
                    <Typography variant="h6" className={classes.legendTxt}>{item.title}</Typography>
                </div>
            ))}
        </div>
        );
};

export default Legend;