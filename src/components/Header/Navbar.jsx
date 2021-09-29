import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Menus from './Menus';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    zIndex: 4,
    top: 0,
    left: 0,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      width:"100%",
      height:"10px",
    },
  },
  title: {
    height:"10px",
    background: "#1f1f1f",
    [theme.breakpoints.down('md')]: {
      // paddingLeft: 0,
    },
    [theme.breakpoints.down('sm')]: {
      // paddingRight: 100
    },
  },
  titleLogin: {
    // paddingLeft: "1.6rem",
    height:"10px",
    background: "#1f1f1f",
    [theme.breakpoints.down('md')]: {
      paddingLeft: 40,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  
  loginBtn:{
    textDecoration:"none",
    color: "#fff",
    fontSize: "20px",
    paddingRight: "3.5%",
    
  },

  authDiv:{
    paddingRight: "8%"
  },
  
  formControlLab:{
    paddingRight: "5.5rem",
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      // paddingLeft: 20
    },
  },
}));

const Navbar = props => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={auth === true? classes.titleLogin:classes.title}>
          <Menus/>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} aria-label="login switch" />} className={!auth? classes.formControlLab: null}
          label={auth ? 'Logout' : <Link to="/login" className={classes.loginBtn}>Login</Link>}
        />

        {/* 원본 */}
        {/* <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} onClick={} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        /> */}
      </FormGroup>
          {auth && (
            <div className={classes.authDiv}>
              <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: 'top',horizontal: 'right',}} keepMounted 
                    transformOrigin={{vertical: 'top', horizontal: 'right',}} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;