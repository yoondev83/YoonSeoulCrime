import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navMenu: {
      color: "#fff",
      fontSize: "20px",
      padding: "0 50px",
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        padding: "0 20px",
      },
    },
    navLink:{
      textDecoration: "none",
    },
    
    title: {
      background: "#1f1f1f",
      flexGrow: 1,
    },
    titleBtn:{
      color: "#fff",
      textDecoration: "none",
      paddingLeft: "8.7%",
      fontWeight: "bold",
      
      [theme.breakpoints.down('sm')]: {
        display:"none",
      },

    },
    hiddenTitleBtn:{
      color: "#fff",
      textDecoration: "none",
      paddingLeft: "10%",
      display: "none",
      
      [theme.breakpoints.down('sm')]: {
        display:"inline",
        paddingLeft: "8%",
      },
    }
  }));
  
const Menus = () => {
    const classes = useStyles();
    return(
        <>
        <Typography variant="h6" className={classes.title}>
        <Link to="/" className={classes.navLink}>
          <IconButton edge="start" className={classes.titleBtn} color="inherit" aria-label="menu">
            Yoon's Seoul Crime Data
          </IconButton>
          <IconButton edge="start" className={classes.hiddenTitleBtn} color="inherit" aria-label="menu">
            Yoon's
          </IconButton>
        </Link>
        </Typography>
        <Link to="/" className={classes.navLink}>
          <IconButton edge="start" className={classes.navMenu} color="inherit" aria-label="menu">
            ABOUT
          </IconButton>
        </Link>
        <Link to="/graph" className={classes.navLink}>
          <IconButton edge="start" className={classes.navMenu} color="inherit" aria-label="menu">
            DATA
          </IconButton>
        </Link>
          <Link to="/board" className={classes.navLink}>
          <IconButton edge="start" className={classes.navMenu} color="inherit" aria-label="menu">
            BOARD
          </IconButton>
          </Link>
        </>
    );
};

export default Menus;