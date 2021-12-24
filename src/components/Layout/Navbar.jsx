import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Menus from './Menus';

const useStyles = makeStyles((theme) => ({
}));

const Navbar = props => {
  const classes                               = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
          <Menus/>
      </AppBar>
    </div>
  );
}

export default Navbar;