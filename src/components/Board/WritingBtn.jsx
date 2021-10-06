import { Link } from 'react-router-dom';
import { IconButton } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button:{
      color:"#ff9800",
      padding: "0 25px 0 0"
    },
  
    icon:{
      fontSize: "40px"
    },

  });

const WritingBtn = () => {
    const classes = useStyles();

    return(
        <>
            <Link to="/api/board/boardlist/write" >
                <IconButton aria-label="write" className={classes.button}>
                    <CreateIcon className={classes.icon} />
                </IconButton>
            </Link>
      </>  
    );
};

export default WritingBtn;