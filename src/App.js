import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import GraphMain from './components/Graph/GraphMain';
import Main from './components/Main/Main';
import BoardList from './components/Board/BoardList';
import classes from "./App.module.css";
import WritingForm from './components/Board/Writing/WritingForm';
import Post from './components/Board/Post';
import SignInMain from './components/SignIn/SignInMain';
import SignUp from './components/SignUp/SignUp';
function App() {

  return (
    <div className={classes.App}>
      <CssBaseline/>
        <Router>
          <Route path="/" exact component={Main}/>
          <Switch>
            <Route path="/board" component={BoardList}/>
            <Route path="/post" component={Post}/>
            <Route path="/graph" component={GraphMain}/>
            {/* <Route path="/graph/:graphName" render={() => <StackedBarplotPerOffense data={data}/>}/> */}
            <Route path="/write" component={WritingForm}/>
            <Route path="/login" component={SignInMain}/>
            <Route path="/signUp" component={SignUp}/>
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
