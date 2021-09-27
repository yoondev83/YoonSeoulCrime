import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
    legendDiv:{
        display:"flex",
        alignItems: "stretch",
    },
    legendDiv:{
        display:"flex",
        width:"100%", 
        alignItems:"center",
        justifyContent:"center",
        height: "5vh", 
        fontWeight: 400
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