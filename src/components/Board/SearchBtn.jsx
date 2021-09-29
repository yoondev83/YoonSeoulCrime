import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {IconButton, TextField } from "@material-ui/core"

const useStyles = makeStyles({
    button:{
      color:"#ff9800",
      padding: "0 25px 0 0"
    },
    insideButton:{
      color:"#ff9800",
      padding: 0
    },
    SearchBar:{
      borderBottom: "solid #fff",
      width:"30%",
    },
    searchBarText:{
      color:"#fff"
    },
    icon:{
      fontSize: "40px"
    },

  });


const SearchBtn = () =>{
    const classes = useStyles();
    const [isSearchClicked, setSearchClick]   = useState(false);
  
    const SearchBar = () => {
      setSearchClick(true);
    }

    return(
        <>
            <IconButton aria-label="search" className={classes.button} onClick={SearchBar}> 
                <SearchIcon className={classes.icon}  />
              </IconButton>
              {isSearchClicked &&
                <TextField id="standard-basic" label="Search" className={classes.SearchBar} 
                            InputProps={{className:classes.searchBarText, endAdornment: (
                            <IconButton aria-label="search" className={classes.insideButton}>
                              <TouchAppIcon className={classes.icon} onClick={SearchBar} />
                            </IconButton>)}} 
                /> }
        </>
    );
}

export default SearchBtn;