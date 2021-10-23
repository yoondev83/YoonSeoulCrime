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

const useStyles = makeStyles((theme) => ({
  boardContainer: {
    paddingBottom: "100px",
    paddingTop: 120,
    height: "100%",
  },
  paper:{
    backgroundColor: "#252933",
  },
  tablePagin: {
    backgroundColor: "#252933",
    color: "#fff"
  },
  selectDropdown:{
    color: "black",
  },
  titleDiv:{
    width: "100%",
    paddingTop: 0,
  },
  titleHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    paddingTop: "1.5%",
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(20),
    },
  },
  accodrionBoard:{
    backgroundColor: "#fff",
    marginBottom:15,
    verticalAlign: "bottom",
  },
  accodrionSummary:{
    backgroundColor: "#252933",
    color: "white",
    
  },
  dateDiv:{
    paddingTop: "10px",
    marginRight: 15,
    textAlign: "right",
    tableLayout: "fixed",
    width:"100%",
    [theme.breakpoints.down('xs')]: {
      width: "5px",
      paddingRight: 40,
    },
  },
  dateTxt: {
    fontSize: theme.typography.pxToRem(20),
    paddingBottom: "10px",
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(15),
    },
  },
  heartDiv:{
    width: 100,
    textAlign:"center",
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      height: "100%",
    },
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  heart:{
    width: "30px",
    height: "30px",
    paddingBottom: 0,
    textAlign:"center"
  },
  heartTxt:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize: 15
    },
  },
  brokenHeartDiv:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      width: "100px",
    },
    [theme.breakpoints.down('xs')]: {
      display:"none"
    },
  },
  brokenHeart:{
    width: "30px",
    height: "30px",
  },
  brokenHeartTxt:{
    textAlign:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize: 15
    },
  },
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
  // const emptyRows                     = rowsPerPage - Math.min(rowsPerPage, props.boardLists.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    return(
            <>
              <Container maxWidth="lg" className={classes.boardContainer}>
                {isAuth && <WritingBtn/>}
                {/* <SearchBtn /> */}
                <TableContainer component={Paper} className={classes.paper}>
                  {props.boardLists === null? <LoadingSpinner/> :
                  <div>
                  {(rowsPerPage > 0 ? props.boardLists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : props.boardLists
                      ).map((article) => (
                        <Accordion key={article.date} className={classes.accodrionBoard}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className={classes.accodrionSummary}>
                            <div className={classes.titleDiv}>
                              <Typography className={classes.titleHeading}>{article.title.length > 40? article.title.slice(0, 40) + "...": article.title}</Typography>
                            </div>
                            <div className={classes.dateDiv}>
                              <Typography className={classes.dateTxt}>{article.date.toString().slice(0, 10)}</Typography>
                            </div>
                            <div className={classes.heartDiv}>
                              <img className={classes.heart} src="/icons/heart.png" alt="heart"/>
                              <Typography className={classes.heartTxt}>{article.heart}</Typography>
                            </div>
                            <div className={classes.brokenHeartDiv}>
                              <img className={classes.brokenHeart} src="/icons/broken_heart.png" alt="broken heart"/>
                              <Typography className={classes.brokenHeartTxt}>{article.brokenHeart}</Typography>
                            </div>
                          </AccordionSummary>
                        <AccordionDetails>
                          <Post data={article}/>
                        </AccordionDetails>
                        </Accordion>
                      ))}
                      <TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]} colSpan={3} count={props.boardLists.length}
                          rowsPerPage={rowsPerPage} page={page} className={classes.tablePagin} component="div"
                          SelectProps={{
                            MenuProps: { classes: {paper: classes.selectDropdown} },
                            inputProps: { 'aria-label': 'rows per page' },
                          }}
                          onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} ActionsComponent={TablePaginationActions}/>
                  </div> 
                          
                  }
                </TableContainer>
              </Container>
          </>
    );
};

export default BoardList;