import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import GraphMain from './components/d3/GraphMain';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BoardList from './components/Board/BoardList';
import classes from "./App.module.css";
import WritingForm from './components/Board/Writing/WritingForm';
import Post from './components/Board/Post';

function App() {
  
  return (
    <div className={classes.App}>
      <CssBaseline/>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/board" component={BoardList}/>
            <Route path="/post" component={Post}/>
            <Route path="/graph" component={GraphMain}/>
            <Route path="/write" component={WritingForm}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
