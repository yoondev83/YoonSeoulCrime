import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {useDispatch, useSelector} from "react-redux";
import { authActions } from './store/auth-slice';
import Main from './components/Main/Main';
import BoardList from './components/Board/BoardList';
import classes from "./App.module.css";
import WritingForm from './components/Board/Writing/WritingForm';
import SignInMain from './components/SignIn/SignInMain';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound';
import axios from 'axios';
import MyPage from './components/MyPage/MyPage';
import LineArrestedCrimes from './components/Graph/Line/LineArrestedCrimes';
import { UseData } from "./components/Graph/UseData";
import BarGraphPoliceDispatch from './components/Graph/Bar/BarGraphPoliceDispatch';
import BarGraphSeoulCrime from './components/Graph/Bar/BarGraphSeoulCrime';
import StackedBarplot from './components/Graph/StackedBarplot/StackedBarplot';
import SeoulCrimeMap2019 from './components/Graph/Map/SeoulCrimeMap2019';
import SeoulCrimeMap2018 from './components/Graph/Map/SeoulCrimeMap2018';
import SeoulCrimeMap2017 from './components/Graph/Map/SeoulCrimeMap2017';
import SeoulCrimeMap2016 from './components/Graph/Map/SeoulCrimeMap2016';
import SeoulCrimeMap2015 from './components/Graph/Map/SeoulCrimeMap2015';
import SeoulCrimeMap2014 from './components/Graph/Map/SeoulCrimeMap2014';

function App() {
  UseData();
  const [boardLists, setBoardLists]         = useState(null);
  const [isChanged, setIsChanged]           = useState(false);
  const isAuth                              = useSelector(state => state.auth.isAuthenticated);
  const dispatch                            = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("userEmail")){
      console.log()
      axios.post("https://guarded-plains-97482.herokuapp.com/api/signin",
              {
              userMemberEmail: localStorage.getItem("userEmail"),
              userMemberPass: localStorage.getItem("userPass")
              }, 
          )
          .then(res =>{
              if(res.data.authentication === true){
                  dispatch(authActions.login({userEmail: res.data.userEmail, userId: res.data.userId}));
              }
                  })
          .catch(err => console.log(err));
    }
    axios.get('https://guarded-plains-97482.herokuapp.com/checkAuthentication')
         .then(res => {
          if(res.data.isAuth){
            dispatch(authActions.login({userEmail: res.data.userEmail, userId: res.data.userId}));
          }
      })
      .catch((error) => {
        console.log(error);
    });

  }, [dispatch]);

  useEffect(() => {
    const getBoardLists = async() =>{
        const response    = await axios.get("https://guarded-plains-97482.herokuapp.com/api/board/boardlist");
        if (response.status !== 200){
          throw new Error("Oops!!");
        }
        const data        = response.data.map(d => {
          return{
            articleNum: d.articleNum,
            userId: d.userId,
            title: d.title,
            content: d.content,
            date: d.date,
            heart: d.heart,
            brokenHeart: d.brokenheart,
          };
        });
        setBoardLists(data.reverse());
  
    }

    getBoardLists();
  }, [isChanged]);
  return (
    <div className={classes.App}>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Switch>
            {/* Main */}
            <Route path="/" exact>
              <Redirect to="/main"/>
            </Route>
            <Route path="/main" render={()=> <Main/>} />

            {/* Board */}
            <Route path="/api/board/boardlist" exact render={()=> <BoardList boardLists={boardLists} />} />
            <Route path="/api/board/boardlist/write" render={props => <WritingForm  {...props} isChanged={setIsChanged} />} />

            {/* Login & Join */} 
            <Route exact path="/api/signin" render={props => <SignInMain {...props} />} />
            <Route exact path="/api/signup" render={props => <SignUp {...props} />} />
            
            {/* Accout */}
            {isAuth && <Route path="/api/mypage" exact render={() => <MyPage/>} />}
            
            {/* Graph */}
              <Route exact path="/api/graph/stackedbar"  render={() => <StackedBarplot/>} />
              <Route exact path="/api/graph/linegraph" render={() => <LineArrestedCrimes/>} />
              <Route exact path="/api/graph/bargraph" render={() => <BarGraphPoliceDispatch />} />

              <Route exact path="/api/graph/map" render={() => <SeoulCrimeMap2019/>}/>
              <Route exact path="/api/graph/map/2019" render={() => <SeoulCrimeMap2019/>}/>
              <Route exact path="/api/graph/map/2018" render={() => <SeoulCrimeMap2018/>}/>
              <Route exact path="/api/graph/map/2017" render={() => <SeoulCrimeMap2017/>}/>
              <Route exact path="/api/graph/map/2016" render={() => <SeoulCrimeMap2016/>}/>
              <Route exact path="/api/graph/map/2015" render={() => <SeoulCrimeMap2015/>}/>
              <Route exact path="/api/graph/map/2014" render={() => <SeoulCrimeMap2014/>}/>
              <Route exact path={`/api/graph/map/bargraph/:year`} render={() => <BarGraphSeoulCrime/>} />
              
              {/* Not Found Page */}
              <Route path="*" component={NotFound} />
            
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
