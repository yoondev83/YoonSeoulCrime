import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import { authActions } from '../../store/auth-slice';
const useStyles = makeStyles((theme) => ({
  header:{
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
    height: "6.6rem",
    padding: "0 4.8rem",
    background: "#121212",
  },
  logoImg:{
    height: "5.2rem",
    width: "12.2rem"
  },
  mainNavList:{
    color:"#ced4da",
    listStyle: "none",
    display:"flex",
    alignItems:"center",
    gap: "6.2rem",
   
  },
  navMenuBtn:{
    color:"#ced4da",

    "&:link, &:visited":{
      color:"#ced4da",
      display: "inline-block",
      transition: "all 0.3s",
    },
    "&:hover, &:active":{
      color:"#fff"
    },
    "& h6":{
      fontWeight: "500",
      fontSize: "1.6rem"
    }
  },
  graphMenu:{
    "& ul":{
      zIndex:9999,
    },
    "& li":{
      fontWeight: "400",
      fontSize: "1.6rem"
    },
  },
  mobileNavBtn:{
    display:"none",
    background:"none",
    border: "none",
    cursor: "pointer",
    zIndex: 5001,
  },
  menuIcon:{
    color:"#fff",
    height: "4.8rem",
    width: "4.8rem",
  },
  closeIcon:{
    color:"black",
    height: "4.8rem",
    width: "4.8rem",
  },
  userIcon:{
    color:"#fff",
    height: "2.8rem",
    width: "2.8rem",
    transform: "translate(0, -10%)"

  },
  hideIcon:{
    display: "none",
  },
  // Mobile
  [theme.breakpoints.down('xs')]: {
    logoDiv:{
      display:"none"
    },
    mainNav:{
      opacity:0,
      PointerEvent: "none",
      visibility: "hidden",
      backdropFilter: "blur(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.5s ease-in",
    },
    mainNavShow:{
      opacity: 1,
      pointerEvents: "auto",
      visibility: "visible",
      transform: "translateX(0)",
      zIndex: 50,
      PointerEvent: "none",
      backgroundColor: "rgba(255, 255, 255, 1)",
      // backdropFilter: "blur(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.5s ease-in",
      "&.closeIcon":{
        display:"block"
      },
      "& ul":{
        flexDirection: "column",
        gap: 0,
      },
      "& h6":{
        fontWeight: "500",
        fontSize: "3rem",
        color: "black",
      }
    },
    mobileNavBtn:{
      display:"block",
      margin: "0 0 0 auto"
    },
  }
}));

const Menus = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorUserEl, setAnchorUserEl] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    let navClass = !isMobileMenuOpen ? classes.mainNav : classes.mainNavShow;
    let menuIconClass = !isMobileMenuOpen ? classes.menuIcon : classes.hideIcon;
    let closeIconClass = isMobileMenuOpen ? classes.closeIcon : classes.hideIcon;
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClosewithMobileMenu = () =>{
      setAnchorEl(null);
      setIsMobileMenuOpen(false);
    }
    const accountBtnHandler = (event) =>{
      setAnchorUserEl(event.currentTarget);
    }
    const accountBtnCloseHandler = () =>{
      setAnchorUserEl(null);
      setIsMobileMenuOpen(false);
    }
    const mobileMenuOpenHandler = () =>{
      setIsMobileMenuOpen(true);
    }
    const mobileMenuCloseHandler = () =>{
      setIsMobileMenuOpen(false);
    }
    const logoutHandler = () =>{
      setAnchorUserEl(null);
      setIsMobileMenuOpen(false);
      dispatch(authActions.logout());
      window.location.replace("/YoonSeoulCrimeFront/api/board/boardlist");
    }
    return(
      <div className={classes.header}>
        <div className={classes.logoDiv}>
            <IconButton edge="start" component={Link} to="/" className={classes.titleBtn} aria-label="menu">
              <img src="https://yoondev83.github.io/YoonSeoulCrimeFront/image/logo2.png" className={classes.logoImg} alt="logo img"/>
            </IconButton>
        </div>
        <nav className={navClass}>
            <ul className={classes.mainNavList}>
              <li>
                <IconButton edge="start" component={Link} to="/main" className={classes.navMenuBtn} aria-label="menu" onClick={mobileMenuCloseHandler}>
                  <Typography variant="h6" className={classes.subMenus}>MAIN</Typography>
                </IconButton>
              </li>
              <li>
                {/* <IconButton edge="start" component={Link} to="/api/graph" className={classes.navMenuBtn} aria-label="menu" onClick={handleClick}> */}
                <IconButton edge="start"  className={classes.navMenuBtn} aria-label="menu" onClick={handleClick}>
                  <Typography variant="h6" className={classes.subMenus}>DATA</Typography>
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} className={classes.graphMenu}>
                  <MenuItem component={Link} to="/api/graph/stackedbar">
                    <Typography variant="h6" className={classes.subMenus} onClick={handleClosewithMobileMenu}>Seoul Crime Reports & Arrests (2010-2020)</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to="/api/graph/linegraph">
                    <Typography variant="h6" className={classes.subMenus} onClick={handleClosewithMobileMenu}>Arrests Per Crime (2010-2020)</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to="/api/graph/bargraph">
                    <Typography variant="h6" className={classes.subMenus} onClick={handleClosewithMobileMenu}>How Fast is the Korean National Police?</Typography>
                  </MenuItem>
                  <MenuItem component={Link} to="/api/graph/map">
                    <Typography variant="h6" className={classes.subMenus} onClick={handleClosewithMobileMenu}>Seoul Crime Map (2014-2019)</Typography>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <IconButton edge="start" component={Link} to="/api/board/boardlist" className={classes.navMenuBtn} aria-label="menu" onClick={mobileMenuCloseHandler}>
                  <Typography variant="h6" className={classes.subMenus}>BOARD</Typography>
                </IconButton>
              </li>
              <li>
                {!isAuth?
                <IconButton edge="start" component={Link} to="/api/signin" className={classes.navMenuBtn} aria-label="menu" onClick={mobileMenuCloseHandler}>
                  <Typography variant="h6" className={classes.subMenus}>Login</Typography>
                </IconButton>:
                <>
                  <IconButton edge="start" className={classes.navMenuBtn} aria-label="menu" onClick={accountBtnHandler}>
                    {!isMobileMenuOpen? <PersonIcon className={classes.userIcon} /> : <Typography variant="h6" className={classes.subMenus}>Account & Logout</Typography>}
                  </IconButton>
                  <Menu id="simple-menu" anchorEl={anchorUserEl} keepMounted open={Boolean(anchorUserEl)} onClose={accountBtnCloseHandler} className={classes.graphMenu}>
                    <MenuItem component={Link} to="/api/mypage">
                      <Typography variant="h6" className={classes.subMenus} onClick={accountBtnCloseHandler}>Account</Typography>
                    </MenuItem>
                    <MenuItem >
                      <Typography variant="h6" className={classes.subMenus} onClick={logoutHandler}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </>
                }
              </li>
            </ul>
        </nav>
        <button className={classes.mobileNavBtn}>
          <MenuIcon className={menuIconClass} onClick={mobileMenuOpenHandler}/>
          <CancelIcon className={closeIconClass} onClick={mobileMenuCloseHandler}/>
        </button>
      </div>
    );
  };
  
  export default Menus;