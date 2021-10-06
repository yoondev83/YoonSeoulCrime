import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import Main from './components/Main/Main';
import BoardList from './components/Board/BoardList';
import classes from "./App.module.css";
import WritingForm from './components/Board/Writing/WritingForm';
import SignInMain from './components/SignIn/SignInMain';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound';
import axios from 'axios';
import LineArrestedCrimes from './components/Graph/Line/LineArrestedCrimes';
import { UseData } from "./components/Graph/UseData";
import BarGraphPoliceDispatch from './components/Graph/Bar/BarGraphPoliceDispatch';
import BarGraphSeoulCrime from './components/Graph/Bar/BarGraphSeoulCrime';
import GraphDrawer from './components/Graph/GraphDrawer';
import Navbar from './components/Header/Navbar';
import StackedBarplot from './components/Graph/StackedBarplot/StackedBarplot';
import SeoulCrimeMap2019 from './components/Graph/Map/SeoulCrimeMap2019';
import SeoulCrimeMap2018 from './components/Graph/Map/SeoulCrimeMap2018';
import SeoulCrimeMap2017 from './components/Graph/Map/SeoulCrimeMap2017';
import SeoulCrimeMap2016 from './components/Graph/Map/SeoulCrimeMap2016';
import SeoulCrimeMap2015 from './components/Graph/Map/SeoulCrimeMap2015';
import SeoulCrimeMap2014 from './components/Graph/Map/SeoulCrimeMap2014';

function App() {
  const [boardLists, setBoardLists]         = useState(null);
  const [error, setError]                   = useState(null);
  const [isAuth, setIsAuth]                 = useState(false);
  const [data, reportData, seoulCrimetData] = UseData();

  useEffect(() => {
    const getBoardLists = async() =>{
        const response    = await axios.get("/api/board/boardlist");
        console.log(response);
        if (response.status !== 200){
          throw new Error("Oops!!");
        }
        const data        = response.data.map(d => {
          return{
            userId: d.userId,
            title: d.title,
            content: d.content,
            date: d.date,
            heart: d.heart,
            brokenHeart: d.brokenheart,
          };
        });
        setBoardLists(data);
  
    }

    getBoardLists();
  }, []);
  console.log("boardList: " + JSON.stringify(boardLists));


  // 2. 하트 연동
  // 5. 로그인 세션
  // 6. App.js 정리
  // 7. 배포전 코드 확인 및 링크 수정
  // 8. 히로쿠 연동
  // 9. 깃허브 페이지

  return (
    <div className={classes.App}>
      <CssBaseline/>
        <Router>
          <Switch>
            {/* Main */}
            <Route path="/" exact render={()=> <Main auth={isAuth} logout={setIsAuth}/>} />
            <Route path="/main" render={()=> <Main auth={isAuth} logout={setIsAuth}/>} />
            {/* Board */}
            <Route path="/api/board/boardlist" exact render={()=> <BoardList boardLists={boardLists} />} />
            <Route path="/api/board/boardlist/write"  component={WritingForm}/>
            {/* Login & Join */} 
            <Route exact path="/api/signin" render={props => <SignInMain setAuth={setIsAuth} {...props} />} />
            <Route exact path="/api/signup" render={props => <SignUp {...props} />} />
            
            {/* Graph */}
            <Container maxWidth="lg">
              <Navbar auth={isAuth}/>
              <GraphDrawer/>
              <Route path="/api/graph" exact render={() => <StackedBarplot data={data}/>} />
              <Route path="/api/graph/graph2" render={() => <LineArrestedCrimes data={data}/>} />
              <Route path="/api/graph/graph3" render={() => <BarGraphPoliceDispatch data={reportData}/>} />
              <Route path="/api/graph/graph4" render={() => <BarGraphSeoulCrime data={seoulCrimetData}/>} />

              <Route exact path="/api/graph/seoulCrimeMap" render={() => <SeoulCrimeMap2019 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/2019" render={() => <SeoulCrimeMap2019 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/2018" render={() => <SeoulCrimeMap2018 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/2017" render={() => <SeoulCrimeMap2017 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/2016" render={() => <SeoulCrimeMap2016 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/2015" render={() => <SeoulCrimeMap2015 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/2014" render={() => <SeoulCrimeMap2014 data={seoulCrimetData}/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/graph2019" render={() => <BarGraphSeoulCrime data={seoulCrimetData} year="2019"/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/graph2018" render={() => <BarGraphSeoulCrime data={seoulCrimetData} year="2018"/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/graph2017" render={() => <BarGraphSeoulCrime data={seoulCrimetData} year="2017"/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/graph2016" render={() => <BarGraphSeoulCrime data={seoulCrimetData} year="2016"/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/graph2015" render={() => <BarGraphSeoulCrime data={seoulCrimetData} year="2015"/>}/>
              <Route exact path="/api/graph/seoulCrimeMap/graph2014" render={() => <BarGraphSeoulCrime data={seoulCrimetData} year="2014"/>}/>
            </Container>

            {/* Not Found Page */}
            <Route component={NotFound} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
