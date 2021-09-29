import { useState } from 'react';
import { Container, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  logoDiv:{
    display:"inline-block",
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  submenuDiv:{
    display:"inline-block",
    float:"right",
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  navLink:{
    textDecoration: "none",
  },
  navMenuBtn: {
    color: "#fff",
    paddingRight:50,
    fontWeight: "bold",
    [theme.breakpoints.down('md')]: {
      paddingRight:30,
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight:10,
    },
    [theme.breakpoints.down('xs')]: {
      padding:10
    },
  },
  titleTxt: {
    width: "450px",
    [theme.breakpoints.down('md')]: {
      width: "340px",
    },
  },
  titleHiddenTxt:{
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  titleBtn:{
    color: "#fff",
    textDecoration: "none",
    paddingLeft: "9%",
    fontWeight: "bold",
    [theme.breakpoints.down('sm')]: {
      display:"none",
    },
  },
  hiddenTitleBtn:{
    color: "#fff",
    textDecoration: "none",
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display:"inline",
      paddingLeft: "8%",
    },
  },
  subMenus:{
    [theme.breakpoints.down('sm')]: {
      fontSize:14,
      paddingTop: 5,
    },
  },

  // ------mobile-------
  mobileMenu:{
    [theme.breakpoints.up('sm')]: {
      display:"none"
    },
    float:"left",
  },
  menuIcon:{
    fontSize:45,
    color: "#fff",
    textAlign:"left",
  },
  mobileLink:{
    textDecoration:"none",
    color:"black"
  }

}));

const Menus = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <Container maxWidth="lg">
        <div className={classes.logoDiv}>
          <Link to="/" className={classes.navLink}>
            <IconButton edge="start" className={classes.titleBtn} color="inherit" aria-label="menu">
              <Typography variant="h6" className={classes.titleTxt}>Yoon's Seoul Crime Data</Typography>
            </IconButton>
            <IconButton edge="start" className={classes.hiddenTitleBtn} color="inherit" aria-label="menu">
              <Typography variant="h6" className={classes.titleHiddenTxt}>Yoon's</Typography>
            </IconButton>
          </Link>
        </div>
        <div className={classes.submenuDiv}>
          <Link to="/" className={classes.navLink}>
            <IconButton edge="start" className={classes.navMenuBtn} color="inherit" aria-label="menu">
              <Typography variant="subtitle1" className={classes.subMenus}>ABOUT</Typography>
            </IconButton>
          </Link>
          <Link to="/graph" className={classes.navLink}>
            <IconButton edge="start" className={classes.navMenuBtn} color="inherit" aria-label="menu">
              <Typography variant="subtitle1" className={classes.subMenus}>DATA</Typography>
            </IconButton>
          </Link>
          <Link to="/board" className={classes.navLink}>
            <IconButton edge="start" className={classes.navMenuBtn} color="inherit" aria-label="menu">
              <Typography variant="subtitle1" className={classes.subMenus}>BOARD</Typography>
            </IconButton>
          </Link>
        </div>

        <div className={classes.mobileMenu}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon className={classes.menuIcon}/>
          </Button>
          <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}> <Link to="/" className={classes.mobileLink}>ABOUT</Link></MenuItem>
            <MenuItem onClick={handleClose}> <Link to="/graph" className={classes.mobileLink}>DATA</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/board" className={classes.mobileLink}>BOARD</Link></MenuItem>
          </Menu>
        </div>
        </Container>
    );
};

export default Menus;