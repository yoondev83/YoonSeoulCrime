import React, { useState } from 'react';
import {useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Container} from "@material-ui/core"
import WritingBtn from './WritingBtn';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Post from './Post';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import LoadingSpinner from '../UI/LoadingSpinner';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  boardContainer: {
      maxWidth: "120rem",
      padding: "0 3.2rem",
      margin: "6.2rem auto",
      flexGrow: 1,
  },
  wrtBtn:{
    float:"right",
    marginBottom: "1rem"
  },
  paper:{
    backgroundColor: "#121212",
  },
  accodrionBoard:{
    backgroundColor:"#121212",
    width: "100%",
    borderBottom: "1px solid rgba(206, 212, 218, 0.2)",
    "& p":{
      color:"#ced4da",
      fontSize: "1.4rem",
      fontWeight: 500,
  }
},
  postNum:{
    textAlign:"center"
  },
  titleDiv:{
    "&:hover":{
      "& p":{
        color:"#fff",
      }
    }
  },
  heartDiv:{
    textAlign:"right"
  },
  heartIconTxt:{
    marginLeft: "1rem",
  },
  
  heart:{
    width: "2rem",
    height: "2rem",
    paddingBottom: 0,
    textAlign:"center"
  },
  brokenHeart:{
    width: "2rem",
    height: "2rem",
  },
  tablePagin:{
    color:"#fff",
    "& button":{
      backgroundColor: "red",
      color: "red",
      "& span":{
        color: "#f06595"
      }

    }
    
  },

  [theme.breakpoints.down('xs')]: {
    accodrionBoard:{
      "& p":{
        fontSize: "1.6rem",
        textAlign: "left",
      },
      
    },
  heartDiv:{
    textAlign:"center"
  },
  heartIconTxt:{
    marginLeft: "0",
  },

  
},
  // brokenHeartDiv:{
  //   textAlign:"center",
  //   [theme.breakpoints.down('sm')]: {
  //     width: "100px",
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     display:"none"
  //   },
  // },

}));


const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const BoardList = props => {
  const classes                       = useStyles();
  const [page, setPage]               = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isAuth                        = useSelector(state => state.auth.isAuthenticated);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    return(
            <>
              <Container fixed className={classes.boardContainer}>
                {/* <SearchBtn /> */}
                <div className={classes.wrtBtn}>
                  {isAuth && <WritingBtn/>}
                </div>
                <TableContainer component={Paper} className={classes.paper}>
                  {props.boardLists === null? <LoadingSpinner/> :
                <Grid container  direction="row" justifyContent="space-between" alignItems="flex-end">
                  {(rowsPerPage > 0 ? props.boardLists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : props.boardLists
                      ).map((article) => (
                          <Accordion className={classes.accodrionBoard}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.accodrionSummary}>
                              <Grid item md={1} sm={1} xs={1}>
                                <div className={classes.postNum}>
                                  <Typography className={classes.titleHeading}>{article.articleNum}</Typography>
                                </div>
                              </Grid>
                              <Grid item md={7} sm={7} xs={6}>
                                <div className={classes.titleDiv}>
                                  <Typography className={classes.titleHeading}>{article.title.length > 40? article.title.slice(0, 40) + "...": article.title}</Typography>
                                </div>
                              </Grid>
                              <Grid item md={2} sm={2} xs={3}>
                                <div className={classes.dateDiv}>
                                  <Typography className={classes.dateTxt}>{article.date.toString().slice(0, 10)}</Typography>
                                </div>
                              </Grid>
                              <Grid item md={1} sm={1} xs={1}>
                                <div className={classes.heartDiv}>
                                  <img className={classes.heart} src="https://yoondev83.github.io/YoonSeoulCrimeFront/icons/heart.png" alt="heart"/>
                                  <Typography display="inline" className={classes.heartIconTxt}>{article.heart}</Typography>
                                </div>
                              </Grid>
                              <Grid item md={1} sm={1} xs={1}>
                                <div className={classes.heartDiv}>
                                  <img className={classes.brokenHeart} src="https://yoondev83.github.io/YoonSeoulCrimeFront/icons/broken_heart.png" alt="broken heart"/>
                                  <Typography display="inline" className={classes.heartIconTxt}>{article.brokenHeart}</Typography>
                                </div>
                              </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Post data={article}/>
                            </AccordionDetails>
                          </Accordion>
                      ))}
                      <Grid item md={12}>
                        <TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]} colSpan={3} count={props.boardLists.length}
                          rowsPerPage={rowsPerPage} page={page} className={classes.tablePagin} component="span"
                          SelectProps={{
                            MenuProps: { classes: {paper: classes.selectDropdown} },
                            inputProps: { 'aria-label': 'rows per page' },
                          }}
                          onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} ActionsComponent={TablePaginationActions}/>
                      </Grid>
                  </Grid>
                  }
                </TableContainer>
              </Container>
          </>
    );
};

export default BoardList;