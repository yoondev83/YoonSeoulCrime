import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=> ({
  drawerDiv:{
    paddingLeft:0,
    [theme.breakpoints.down('md')]: {
      paddingTop:30,
      paddingBottom: 10,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop:40,
    },
  },
  button:{
    fontWeight: "400",
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },

  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  subMenuLink:{
      textDecoration: "none",
      color: "black",
  }
}));

const GraphDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const menuList = [
    {
      "menu" : "Seoul Crime Reports & Arrests (2010-2020)",
      "to"   : "",
    },
    {
      "menu" : "Arrests Per Crime (2010-2020)",
      "to"   : "graph2",
    },
    {
      "menu" : "How Fast is the Korean National Police?",
      "to"   : "graph3",
    },
    {
      "menu" : "Seoul Crime Map",
      "to"   : "seoulCrimeMap",
    },
];

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuList.map((text, index) => (
          <Link key={text.menu+"Link"} to={`/graph/${text.to}`} className={classes.subMenuLink}>
          <ListItem button key={text.menu} >
            <ListItemText primary={text.menu} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.drawerDiv}>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained" color="primary">
            <Typography key={anchor} variant="h6" align="center" className={classes.button}>
            Other Graphs
            </Typography>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}

export default GraphDrawer;