# Seoul Crime Map
![main](https://user-images.githubusercontent.com/85688551/137741078-86b8d3b0-71e0-41fd-b05b-df61ca4c8ca6.png)
![datamap](https://user-images.githubusercontent.com/85688551/137741098-21333f46-2950-405a-9e83-c8f305260edd.png)

## Install for front-end (프론트엔드 설치)
```javascript
# npm install
# npm start
```
#### Delete the homepage line in package.json for running locally
#### 로컬환경에서 실행하실 경우 package.json속의 homepage 라인을 지워주시기 바랍니다.

## [Backend 백엔드](https://github.com/yoondev83/YoonSeoulCrimeBackend)
###	Demo 페이지
https://yoondev83.github.io/YoonSeoulCrimeFront/

### Environment 개발환경
+ Operating System: Win 10
+	IDE: VSCode
+	Front-end: React 17.0.2, Material-ui 4.12, chart.js 3.51, leaflet: 1.7.1, react-leaflet: 3.2.1
+	Back-end: Express: 4.17, mongoose: 6.0.8, passport: 0.5, passport-local: 1.0, passport-local-mongoose: 6.1, bcrypt: 5.0.1

## Introduction 프로젝트 개요
  이 프로젝트는 데이터 시각화를 통해 서울을 잘 모르는 외국인들을 위해 서울의 범죄 현황을 쉽게 파악할 수 있도록 만들었습니다. 자료는 보통 서울의 범죄 발생 건수, 체포 건수, 출동 현황과 구별 건수 기준으로 지도에 도식화 하였습니다. 데이터는 '서울 열린데이터 광장'을 통해 가져왔으며, 원할한 작업을 위해 따로 다듬은 다음 제 gist에 올려서 사용하였습니다. 첫 프로젝트인만큼 아직 부족한 점들이 많습니다. 아직 구현되지 못한 부분들은 업데이트를 통해 개선해 가도록 하겠습니다.

This project is to provide non Korean speakers with visualized crime data in Seoul so that people would know how Seoul is in terms of safety. Graphs are based on data that shows the number of reports and incidents and how fast the Korea Police is. Sources are from '서울 열린데이터 광장', which I don't think they have language services on their website, and I trimed the sources to make CSVs and uploaded on my gist. It's my first project in the IT field. I would work on this project step by step.

## Front-End Project Structure 프론트엔드 프로젝트 구조
```
📦 
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icons
│  │  ├─ broken_heart.png
│  │  └─ heart.png
│  ├─ image
│  │  └─ main.jpg
│  ├─ index.html
│  └─ video
│     └─ project_main.mp4
└─ src
   ├─ App.js
   ├─ App.module.css
   ├─ components
   │  ├─ Board
   │  │  ├─ BoardList.jsx
   │  │  ├─ Post.jsx
   │  │  ├─ SearchBtn.jsx
   │  │  ├─ Writing
   │  │  │  └─ WritingForm.jsx
   │  │  └─ WritingBtn.jsx
   │  ├─ Graph
   │  │  ├─ Bar
   │  │  │  ├─ BarGraphPoliceDispatch.jsx
   │  │  │  ├─ BarGraphPoliceDispatch.module.css
   │  │  │  ├─ BarGraphSeoulCrime.jsx
   │  │  │  └─ ShowDispatchRawData.jsx
   │  │  ├─ GraphDrawer.jsx
   │  │  ├─ Line
   │  │  │  ├─ LineArrestedCrimes.jsx
   │  │  │  └─ LineArrestedCrimes.module.css
   │  │  ├─ Map
   │  │  │  ├─ Legend.jsx
   │  │  │  ├─ MapStyles.jsx
   │  │  │  ├─ SeoulCrimeMap2014.jsx
   │  │  │  ├─ SeoulCrimeMap2015.jsx
   │  │  │  ├─ SeoulCrimeMap2016.jsx
   │  │  │  ├─ SeoulCrimeMap2017.jsx
   │  │  │  ├─ SeoulCrimeMap2018.jsx
   │  │  │  ├─ SeoulCrimeMap2019.jsx
   │  │  │  ├─ ShowSeoulDistrictCrimeData.jsx
   │  │  │  ├─ entities
   │  │  │  │  └─ LegendItems.jsx
   │  │  │  └─ seoulGeoJson.json
   │  │  ├─ StackedBarplot
   │  │  │  ├─ ShowRawData.jsx
   │  │  │  ├─ StackedBarplot.jsx
   │  │  │  └─ StackedBarplot.module.css
   │  │  └─ UseData.jsx
   │  ├─ Layout
   │  │  ├─ Footer.jsx
   │  │  ├─ Layout.jsx
   │  │  ├─ Menus.jsx
   │  │  └─ Navbar.jsx
   │  ├─ Main
   │  │  ├─ Contact.jsx
   │  │  ├─ Main.jsx
   │  │  ├─ MainBodyContent.jsx
   │  │  ├─ MainBodyContent.module.css
   │  │  ├─ MainVideo.jsx
   │  │  └─ MainVideo.module.css
   │  ├─ MyPage
   │  │  ├─ AccountProfileDetails.jsx
   │  │  └─ MyPage.jsx
   │  ├─ NotFound.css
   │  ├─ NotFound.jsx
   │  ├─ SignIn
   │  │  └─ SignInMain.jsx
   │  ├─ SignUp
   │  │  └─ SignUp.jsx
   │  ├─ UI
   │  │  ├─ Button.jsx
   │  │  ├─ LoadingSpinner.jsx
   │  │  └─ YearTabs.jsx
   │  └─ hooks
   │     └─ use-input.jsx
   ├─ index.css
   ├─ index.js
   └─ store
      ├─ auth-slice.js
      └─ index.js
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

## Main Features 프로젝트 기능
1.	그래프 출력
  +	Leaflet.js와 Chart.js를 이용하여 데이터 시각화.
2.	CSV 파싱
  +	papaparse를 이용하여 gist에 올린 csv파일을 파싱합니다.
3.	회원가입 (현재 로컬에서만 작동)
  +	onChange를 이용하여 실시간 중복 조회.
  +	비밀번호 변경.
  +	회원탈퇴.
4.	로그인 및 세션 유지
5.	게시판
  +	작성한 게시물을 DB에 저장.
  +	각 게시물마다 좋아요 싫어요를 의미하는 하트와 깨진 하트 버튼을 구현함.
  +	DB에 저장된 게시물을 불러와 게시판 출력.

1.	Graphs
  +	Leaflet.js & Chart.js for the data visualization.
2.	CSV parsing
  +	papaparse.
3.	Sign up ()
  +	Check email duplication, using onChange.
  +	Change password.
  +	Delete account.
4.	Sign in and session
5.	User Forum
  +	User articles are saved on DB.
  +	Clickable heart and broken heart icons like the "Like" function.
  +	Load forum data from db

### 업데이트 예정
1.	게시물 수정 및 삭제
2.	조회수 출력
3.	게시물 검색
4.	비회원 게시글 작성 허가하여 회원과 비회원 구분
5.	댓글

### Coming Soon
1.	Can modify and delete articles.
2.	Show the views.
3.	Can search.
4.	Allow non-members to write.
5.	Comments

## Code

#### index.js
```javascript
//Redux Provider is used
//리덕스 사용
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 
```
#### App.js

```javascript
function App() {
  const [boardLists, setBoardLists]         = useState(null); // Data for forum articles
  const [data, reportData, seoulCrimetData] = UseData(); // Data for graphs
  const [isChanged, setIsChanged]           = useState(false);
  const isAuth                              = useSelector(state => state.auth.isAuthenticated);
  const dispatch                            = useDispatch();
  useEffect(() => {              // Maintain login session 
    axios.get('/checkAuthentication')
         .then(res => {
          if(res.data.isAuth){
            dispatch(authActions.login({userEmail: res.data.userEmail, userId: res.data.userId}));
          }
      })
      .catch((error) => {
        console.log(error);
    });

  }, [dispatch]);

  useEffect(() => {             // Get data for forum articles from db
    const getBoardLists = async() =>{
        const response    = await axios.get("/api/board/boardlist");
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
      <Router basename="/YoonSeoulCrimeFront">
        <Layout>
          <CssBaseline/>
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
            <Container maxWidth="lg">
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
        </Layout>
      </Router>
    </div>
  );
}
```
#### UseData.jsx
```javascript
const csvUrl = "https://gist.githubusercontent.com/yoondev83/c005986d80b0a16dc35f415c3b742abf/raw/fad0801f4bf194cf5409a8d401de9979f6202199/2010-2020_Annual_Seoul_Crime_Data.csv";
const csvReportUrl = "https://gist.githubusercontent.com/yoondev83/9168b5f93ff4920478856c40373e4b48/raw/57be8a04d5fb2268fa2d8457cbef32f66bed9a52/2005-2009_The_Seoul_Police_Dispatches";
const csvSeoulDistrictCrime = "https://gist.githubusercontent.com/yoondev83/7a811ec87fc150fcfba4cef6712070b4/raw/347b61b6025f13b564aef400424ea6ecbd2e1aaf/Seoul_District_Crimes.csv";

const mapSeoulDistricts     = features; // import {features} from "./Map/seoulGeoJson.json"
                                        // It imports seoulGeoJson that has geographic information on Seoul. Inside the file, it has "features", which includes geoJSON data and
                                          names of districts in Seoul.


export const UseData = () => {
    const [data, setData]   = useState([]);
    const [reportData, setReportData]   = useState([]);
    const [seoulCrimetData, setSeoulCrimeData]   = useState([]);
    
    const setDistrictColor = mapDistrict => {
        //legendItems are made up of objects to show the colored titles based on the number of total incidents.
        //isFor returns true or false
        const legendItem2019 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2019));
        const legendItem2018 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2018));
        const legendItem2017 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2017));
        const legendItem2016 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2016));
        const legendItem2015 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2015));
        const legendItem2014 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2014));

        //This code addes data into each mapDistrict.properties.totalIncidents_20OOColor in order to show different colors on the 42th line of SeoulCrimeMap2014~2019.jsx
        if(legendItem2019 != null){
            mapDistrict.properties.totalIncidents_2019Color = legendItem2019.color;
        }
        if(legendItem2018 != null){
            mapDistrict.properties.totalIncidents_2018Color = legendItem2018.color;
        }
        if(legendItem2017 != null){
            mapDistrict.properties.totalIncidents_2017Color = legendItem2017.color;
        }
        if(legendItem2016 != null){
            mapDistrict.properties.totalIncidents_2016Color = legendItem2016.color;
        }
        if(legendItem2015 != null){
            mapDistrict.properties.totalIncidents_2015Color = legendItem2015.color;
        }
        if(legendItem2014 != null){
            mapDistrict.properties.totalIncidents_2014Color = legendItem2014.color;
        }
    };


    const processCrimeMapData = (seoulDistrict) => {
        setSeoulCrimeData(seoulDistrict); //it saves the parsed data of csvSeoulDistrictCrime.
        //자료는 6년치인데 행정구역 정보는 년도별이 아닌 그냥 행정구역 이름이 나열된거니 한 해 수치밖에 나오지 못 함.
        for (let i = 0; i < mapSeoulDistricts.length; i++){
            const mapDistrict = mapSeoulDistricts[i];
            const crimeDistrict= seoulDistrict.data.filter(data=> data.District === mapDistrict.properties.SIG_ENG_NM);
            mapDistrict.properties.totalIncidents_2019      = 0;
            mapDistrict.properties.totalIncidentsText_2019  = "0";
            mapDistrict.properties.totalIncidents_2018      = 0;
            mapDistrict.properties.totalIncidentsText_2018  = "0";
            mapDistrict.properties.totalIncidents_2017      = 0;
            mapDistrict.properties.totalIncidentsText_2017  = "0";
            mapDistrict.properties.totalIncidents_2016      = 0;
            mapDistrict.properties.totalIncidentsText_2016  = "0";
            mapDistrict.properties.totalIncidents_2015      = 0;
            mapDistrict.properties.totalIncidentsText_2015  = "0";
            mapDistrict.properties.totalIncidents_2014      = 0;
            mapDistrict.properties.totalIncidentsText_2014  = "0";
            
            if(crimeDistrict != null){ 
                //2019
                const totalCrimeIncidents2019 = crimeDistrict[5].Total_Incidents;
                mapDistrict.properties.totalIncidents_2019 = totalCrimeIncidents2019;
                mapDistrict.properties.totalIncidentsText_2019 = totalCrimeIncidents2019;
                //2018
                const totalCrimeIncidents2018 = crimeDistrict[4].Total_Incidents;
                mapDistrict.properties.totalIncidents_2018 = totalCrimeIncidents2018;
                mapDistrict.properties.totalIncidentsText_2018 = totalCrimeIncidents2018;
                //2017
                const totalCrimeIncidents2017 = crimeDistrict[3].Total_Incidents;
                mapDistrict.properties.totalIncidents_2017 = totalCrimeIncidents2017;
                mapDistrict.properties.totalIncidentsText_2017 = totalCrimeIncidents2017;
                //2016
                const totalCrimeIncidents2016 = crimeDistrict[2].Total_Incidents;
                mapDistrict.properties.totalIncidents_2016 = totalCrimeIncidents2016;
                mapDistrict.properties.totalIncidentsText_2016 = totalCrimeIncidents2016;
                //2015
                const totalCrimeIncidents2015 = crimeDistrict[1].Total_Incidents;
                mapDistrict.properties.totalIncidents_2015 = totalCrimeIncidents2015;
                mapDistrict.properties.totalIncidentsText_2015 = totalCrimeIncidents2015;
                //2014
                const totalCrimeIncidents2014 = crimeDistrict[0].Total_Incidents;
                mapDistrict.properties.totalIncidents_2014 = totalCrimeIncidents2014;
                mapDistrict.properties.totalIncidentsText_2014 = totalCrimeIncidents2014;

            }
            setDistrictColor(mapDistrict);
        };
    }
    useEffect(() => {
        papa.parse(csvUrl, {
            download: true,
            header: true,
            complete: result => setData(result)
        });
        papa.parse(csvReportUrl, {
            download: true,
            header: true,
            complete: result => setReportData(result)
        });
        papa.parse(csvSeoulDistrictCrime, {
            download: true,
            header: true,
            complete: result => processCrimeMapData(result),
        });
        }, []);
    return [data, reportData, seoulCrimetData];
  }
```



#### 
```javascript

```
#### 
```javascript

```
#### 
```javascript

```
#### 
```javascript

```
#### 
```javascript

```
#### 
```javascript

```
#### 
```javascript

```
