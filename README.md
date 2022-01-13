# Seoul Crime Map
![main](https://user-images.githubusercontent.com/85688551/147375267-bb92c74e-d54c-401b-8ca9-58dde6d9eb23.png)
![chat](https://user-images.githubusercontent.com/85688551/147375268-5e172d0d-b16d-4ac5-87a5-8a128271b628.png)
![chat](https://user-images.githubusercontent.com/85688551/147375269-4078eaf2-651c-43a9-b765-d01fe0e9c0fe.png)
![map](https://user-images.githubusercontent.com/85688551/147375266-c717e433-addc-4779-a589-8f54f3b96c8a.png)

### Updated:
December 24, 2021
1. 프로젝트 코드를 로컬 실행 환경으로 수정함 (Can run in the local environment)
2. 전반적인 디자인 수정 및 반응형 웹 기능 수정 (Overall design edited and responsiveness added)
3. 코드 리팩토링 (Code refactored)

## Install for front-end (프론트엔드 설치)
```javascript
# npm install
# npm start
```

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

### Project Period (프로젝트 기간) : 

## Front-End Project Structure 프론트엔드 프로젝트 구조
```
📦 
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ 404.html
│  ├─ icons
│  │  ├─ broken_heart.png
│  │  └─ heart.png
│  ├─ image
│  │  ├─ Yoon's Crime Data-logos_black.png
│  │  ├─ Yoon's Crime Data-logos_transparent.png
│  │  ├─ android-icon-48x48.png
│  │  ├─ apple-icon-57x57.png
│  │  ├─ favicon-96x96.png
│  │  ├─ logo1.jpeg
│  │  ├─ logo2.png
│  │  ├─ main.jpg
│  │  └─ main.webp
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
   │  │  │  ├─ BarGraphSeoulCrime.jsx
   │  │  │  └─ ShowDispatchRawData.jsx
   │  │  ├─ Line
   │  │  │  └─ LineArrestedCrimes.jsx
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
   │  │  │  └─ StackedBarplot.jsx
   │  │  └─ UseData.jsx
   │  ├─ Layout
   │  │  ├─ Footer.jsx
   │  │  ├─ Layout.jsx
   │  │  ├─ Menus.jsx
   │  │  └─ Navbar.jsx
   │  ├─ Main
   │  │  ├─ Contact.jsx
   │  │  ├─ Hero.jsx
   │  │  ├─ Main.jsx
   │  │  ├─ MainBodyContent.jsx
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
      ├─ dataSlice.js
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
### Explanations are written between codes as comments and Korean comments are written between components below.
### 영문 설명은 주석 형식으로 달아두었으며 한국어 설명은 각 컴포넌트 사이에 적어 두었습니다.

#### index.js
```javascript
//Redux Provider is used
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 
```
### store/index.js
```javascript
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});
```

### store/auth-slice.js
```javascript
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userId: null,
        userEmail: null,
    },
    reducers:{
        login(state, action){
            state.isAuthenticated = true;
            state.userEmail       = action.payload.userEmail;
            state.userId          = action.payload.userId;
        },
        logout(state){
            console.log("logout!");
            state.isAuthenticated = false;
            state.userId          = null;
            axios.post("/api/logout")
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        },
    },
});
```
##### 로그인 관련 기능들을 리덕스로 구현하였습니다. 규모가 작은 프로젝트라 리덕스를 굳이 사용할 필요가 없었지만, 차후 규모가 커질 경우 한곳에서 데이터를 관리해줄 필요가 있을뿐만 아니라 가까운 미래에 구현하는 기능들을 위해 지금 만들어두어 효율적인 관리를 위해 지금 만는게 좋을거 같아 사용하였습니다. 밑에 App.js에서 useEffect와 axios를 통해 로그인 세션을 유지하고 있습니다. 리덕스 덕분에 로그인 되었을때 이메일 주소를 보여주는 값을 불필요하게 여러 컴포넌트를 거치지 않고 바로 전달할 수 있습니다.

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
                                        //  names of districts in Seoul.


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
        // There 25 districts in Seoul. The parsed data is for six years.
        // This for loop initializes the initial value and text of 2014~2019 per district.
        // For exmaple, mapSeoulDistrict[0] initializes the first district that is written on {feature}.
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
            
            if(crimeDistrict != null){  //It adds actual values for each year and district.
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
#### UseData는 그래프 관련 데이터를 받아오는 기능을 수행하고 있습니다. 위 세 주소를 하단에 papa 라이브러리를 통해 parsing하고 있습니다. 단순 그래프들은 csv 파일을 미리 가공하였기 때문에 단순히 불러와서 데이터를 넘겨주면 되지만 map 관련 데이터는 여러 전처리 과정을 요구하고 있습니다. setDistrictColor 속의 legendItems 들은 오브젝트들로 구성되어 있으며 toatal incidents를 기준으로 타이틀에 다른 색깔들을 넣어주고 있습니다. 다음에 for문으로 본격적인 값 초기화 및 값을 넣어주고 있습니다. 우선 데이터는 6년치이고 서울의 자치구 개수는 25개 입니다. 자료는 6년치인 반면에 행정구역은 단순히 25개라 1년치만 커버가 됩니다. 저는 위의 for문으로 자치구별로 넘어가는 걸 바탕으로 6년치 자료를 위처럼 선언 및 초기화하여 모든 자치구에 데이터를 넣었습니다. 

#### SeoulCrimeMap2019.jsx
```javascript
const mouseoverEvent= event=>{
    event.target.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
    })
};

const SeoulCrimeMap2019 = props => {
    const getJsonRef = useRef();
    const classes = MapStyles();
    const legendReverse = [...legendItems].reverse();
    let seoulLocation = [37.5605, 126.9780];
    const mouseoutEvent= event=>{
        getJsonRef.current.setStyle({color: "white",
        weight:1,
        fillOpacity: 1
        })
    };

    const OnEachDistrict = (district, layer) =>{
        const districtName            = district.properties.SIG_ENG_NM;
        const totalIncidentsText      = district.properties.totalIncidents_2019;
       
        layer.on({
            mouseover: mouseoverEvent,
            mouseout: mouseoutEvent
        });

        layer.options.fillColor = district.properties.totalIncidents_2019Color;
        layer.bindPopup(`${districtName} ${totalIncidentsText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
    };

    // I used react-leaflet to visualize data on maps with the data that I processed above because not only is it easy to mark things on map, but it also simply enables me to show beautified graphs, which reduces a huge amount of css work.
    return(
        <Container maxWidth="lg" className={classes.container}>
            <YearTabs/>
            <MapContainer center={seoulLocation} zoom={11} scrollWheelZoom={true} className={classes.mapContainer}>
                <TileLayer attribution='&copy; <a href="#">Seoul Crime Map</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <GeoJSON ref={getJsonRef} data={seoulGeoJson} onEachFeature={OnEachDistrict} style={mapStyle}/>
            </MapContainer>
                <Legend data={legendReverse} />
            <Typography variant="subtitle1" className={classes.message}>*The data is based on the total number of incidents in 2019</Typography>
            <ShowSeoulDistrictCrimeData data={props.data} year="2019"/>
        </Container>
    );
};
```
#### 위의 코드는 가공한 data로 구현한 컴포넌트 입니다. 저는 react-leaflet 라이브러리로 데이터를 시각화하였습니다. 이 라이브러리를 사용한 이유는 데이터를 이용하여 지도에 손쉽게 시각화 할 수 있을 뿐만 아니라, 데이터 가공만 잘 한다면 손쉽게 예쁜 그래프를 출력할 수 있기에 선택하였습니다. 

#### BarGraphPoliceDispatch.jsx
```javascript
const BarGraphPoliceDispatch = props =>{
    const year              =   [];
    const dispatcherVolume  =   [];
    const within5Min        =   [];

    if(props.data.data){
      props.data.data.forEach(d => {
        year.push(d.Year);
        dispatcherVolume.push(d.The_Total_112_Dispatcher_Volume);
        within5Min.push(d.Within_5min);
      });
    }

    const data = {
      labels: year,
      datasets: [
        {
          label: 'The Total 112 Dispatcher Volume',
          data: dispatcherVolume,
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Within 5 Minutes',
          data: within5Min,
          backgroundColor: 'rgb(54, 162, 235)',
        },
      ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 15
                  }
              }
          },
          tooltip:{
            boxWidth: 20
          }
      },
    };

    // The other graphs apart from visualized map components are using react-chartjs-2. This library also provides simple and beautified graphs that you can easily make.

    return(
      <Container maxWidth="lg">
        <div className='header'>
            <h1 className={classes.title}>How Fast Is The Seoul Police? (2005 - 2009)</h1>
            <Bar data={data} options={options} />
            <ShowDispatchRawData data={props.data}/>
        </div>
        </Container>
    );
};
```
#### map이 아닌 그래프들은 react-chartjs-2 라이브러리를 통해 구현하였습니다. 이 라이브러리 또한 단순하면서도 예쁜 그래프들은 제공하고 있습니다. 고난이도의 그래프가아닌 단순한 수준의 그래프를 우선 구현해보자는 생각으로 이 라이브러리를 선택하였습니다. 이 역시 데이터 가공만 잘한다면 손쉽게 예쁜 그래프들을 표현할 수가 있습니다.

#### BoardList.jsx
```javascript
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

             //boardList comes from App.js, which processed by axios to server. Each article is shown in accordions provided by React Material-ui. When you click an article, it shows you the article surrounded by AccordionDetails. In each article, you can click 'heart' and 'broken heart', which is 'like' or 'dislike' on social networks.
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

```
#### board를 보여주는 컴포넌트입니다. React Material-ui가 제공하는 테이블을 통해 게시판처럼 1페이지 2페이지를 보여줄 수 있도록 하였습니다. 게시판 정보는 App.js에서 axios를 통해 데이터를 받아오고 있습니다. 받아온 데이터가 없다면 LoadingSpinner가 뜹니다. 게시물을 클릭할 경우 상세페이지 이동이아닌 Accordion를 통해 펼쳐 볼 수 있도록 구현하였습니다. 또한 펼쳐본 글들 속에는 하트와 깨진하트 아이콘이 있습니다. SNS의 좋아요 싫어요처럼 클릭하여 숫자를 올릴 수 있습니다. 

#### Post.jsx
```javascript
const Post = props => {
    const classes                    =   useStyles();
    const [heart, setHeart]          =   useState(props.data.heart);
    const [brokenHeart, setBrkHeart] =   useState(props.data.brokenHeart);
    const [heartPoint, setHeartPoint]=   useState(1);
    const isAuth                     =   useSelector(state => state.auth.isAuthenticated);
    const heartBtnHandler            =  () =>{
        if(heartPoint < 1){
            return;
        }
        else{
            setHeartPoint(heartPoint-1);
            setHeart(heart+1);
            axios.patch("/api/board/boardlist",{
                postNum: props.data.articleNum,
                heart: heart+1
            }).then(console.log("성공"))
            .catch(err => console.log(err));
        }
    }
    const brokenHeartBtnHandler      =  () =>{
        if(heartPoint < 1){
            return;
        }
        else{
        setHeartPoint(heartPoint-1);
        setBrkHeart(brokenHeart+1);
        axios.patch("/api/board/boardlist",{
            postNum: props.data.articleNum,
            brokenHeart: brokenHeart+1,
        }).then(console.log("성공"))
        .catch(err => console.log(err));
        }
    }
    return(

//
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0}>
                <Grid item xs={12}>
                    <Paper className={clsx(classes.paper)}><Typography component={'span'} variant={'body2'}  className={classes.postInfoUser}>{props.data.userId}</Typography></Paper>
                    <Paper className={clsx(classes.paper)}><Typography component={'span'} variant={'body2'} className={classes.content}>{props.data.content}</Typography></Paper>
                </Grid>
                {isAuth &&
                <Grid item xs={12} className={classes.iconGrid}>
                    <IconButton aria-label="heart" onClick={heartBtnHandler}>
                        <img className={classes.heart} src="/icons/heart.png" alt="heart"/>
                        <Typography component={'span'} variant={"subtitle1"} className={classes.content}>{heart}</Typography>
                    </IconButton>
                    <IconButton aria-label="brokenHeart" onClick={brokenHeartBtnHandler}>
                        <img className={classes.brokenHeart} src="/icons/broken_heart.png" alt="broken heart"/>
                        <Typography component={'span'} variant={"subtitle1"} className={classes.content}>{brokenHeart}</Typography>
                    </IconButton>
                </Grid>
                }
            </Grid>

    );
};

```
#### Post 컴포넌트에서는 글의 상세 내용을 보여주고 있을 뿐만 아니라 위에서 언급된 좋아요 싫어요 기능을 구현하였습니다. 기본적으로 유저들은 한번 누를 수 있는 값인 1이 주어졌으며, 버튼을 눌렀을 때 이 값이 1보다 작은 경우 바로 return하여 끝내도록 하였습니다. 1보다 작은 경우가 아니면 useState를 통해 하트들의 상태 관리를하고 이 값들을 서버에 전송하고 있습니다.

### hooks/use-input.jsx
```javascript
const useInput = validateValue => {
    const [enteredValue, setEnteredValue]           =   useState('');
    const [isTouched, setIsTouched]                 =   useState(false);
    const [validation, setValidation]               =   useState(true);
    const [validationId, setValidationId]           =   useState(true);
    const valueIsValid                              =   validateValue(enteredValue);
    const hasError                                  =   !valueIsValid && isTouched;

    const valueChangeHandlerWithEmailValidation  =   event =>{
        setEnteredValue(event.target.value);
        axios.post("/api/signup/check/email", {
            userMemberEmail: event.target.value
        }, {
            headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }})
        .then(res => {
            if(res.data.validation === true){
                setValidation(true);
            }else{
                setValidation(false);
            }
        })
        .catch(err => console.log(err));
    };
    const valueChangeHandlerWithIdValidation  =   event =>{
        setEnteredValue(event.target.value);
        axios.post("/api/signup/check/id", {
            userMemberId: event.target.value
        }, {
            headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }})
        .then(res => {
            if(res.data.validation === true){
                setValidationId(true);
            }else{
                setValidationId(false);
            }
        })
        .catch(err => console.log(err));
    };

    const valueChangeHandler                =   event =>{
        setEnteredValue(event.target.value);
    };
    const inputBlurHandler                  =   event =>{
        setIsTouched(true);
    };

    const reset                             =   () =>{
        setEnteredValue('');
        setValidation(true);
        setIsTouched(false);
    };

    return{
        value: enteredValue,
        isValid: valueIsValid,
        validation,
        validationId,
        hasError,
        valueChangeHandlerWithEmailValidation,
        valueChangeHandlerWithIdValidation,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};
```
### SignUp.jsx
```javascript
const SignUp = props => {
    const classes                       = useStyles();
    const [open, setOpen]               = useState(false);
    //custom hook
    const { value: enteredEmail ,
        validation: emailValidation,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandlerWithEmailValidation: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput}         = useInput(value => value.trim() !=='' && value.includes('@'));
    const { value: enteredId ,
        validationId: idValidation,
        isValid: enteredIdIsValid,
        hasError: idInputHasError,
        valueChangeHandlerWithIdValidation: idChangeHandler,
        inputBlurHandler: idBlurHandler,
        reset: resetIdInput}            = useInput(value => value.trim() !=='' && value.length >= 6);
    const { value: enteredPass ,
        isValid: enteredPassIsValid,
        hasError: passInputHasError,
        valueChangeHandler: passChangeHandler,
        inputBlurHandler: passBlurHandler,
        reset: resetPassInput}            = useInput(value => value.trim() !=='' && value.length >= 6);
    const {
        isValid: enteredRePassIsValid,
        hasError: rePassInputHasError,
        valueChangeHandler: rePassChangeHandler,
        inputBlurHandler: rePassBlurHandler,
        reset: resetRePassInput}          = useInput(value => value.trim() !=='' && value.length >= 6 && value === enteredPass);
    const idInputClasses                  = idInputHasError? clsx(classes.joinInput, classes.invalid): classes.joinInput;
    const emailInputClasses               = emailInputHasError? clsx(classes.joinInput, classes.invalid) : classes.joinInput;
    const passInputClasses                = passInputHasError? clsx(classes.joinInput, classes.invalid) : classes.joinInput;
    
    const handleClose = () => {
        setOpen(false);
    };

    const fetchJoinInfo = (event) =>{
        event.preventDefault();

        if(!enteredIdIsValid || !enteredEmailIsValid || !enteredPassIsValid || !enteredRePassIsValid || !emailValidation || !idValidation){
            return;
        }
        axios.post("/api/signup", {
            userMemberId: enteredId,
            userMemberEmail : enteredEmail,
            userMemberPass: enteredPass,
        })
        .then(res => {
            props.history.push("/main");
        })
        .catch(err => console.log(err) );
        
        resetEmailInput();
        resetIdInput();
        resetPassInput();
        resetRePassInput();
    }
    return (
        <section>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="primary" />
            </Backdrop>

            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.joinBox}>
                <form onSubmit={fetchJoinInfo}>
                    <Grid item xs={12} className={clsx(classes.inputIdGrid)}>
                        <Input type="text" name="userName" placeholder="ID" onChange={idChangeHandler} onBlur={idBlurHandler}
                            value={enteredId}
                               startAdornment={( <InputAdornment position="start">
                                    <AssignmentIndIcon />
                                    </InputAdornment>)}
                               className={idInputClasses}
                        />
                        {idInputHasError && <Typography className={classes.errorText} align="center">Enter A Valid ID</Typography>}
                        {!idValidation && <Typography className={classes.errorText} align="center">This ID Has Been Already Used</Typography>}
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}> 
                        <Input type="text" name="userEmail" placeholder="Email" onChange={emailChangeHandler} onBlur={emailBlurHandler}
                               value={enteredEmail}
                               startAdornment={( <InputAdornment position="start">
                                   <EmailIcon />
                                   </InputAdornment>)}
                               className={emailInputClasses}
                        />
                        {!emailValidation && <Typography className={classes.errorText} align="center">Your Email Has Been Already Used</Typography>}
                        {emailInputHasError && <Typography className={classes.errorText} align="center">Enter A Valid Email Address</Typography>}
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPass" placeholder="Password" onChange={passChangeHandler} onBlur={passBlurHandler}
                               value={enteredPass}
                               startAdornment={( <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>)}
                               className={passInputClasses}
                        />
                        {passInputHasError && <Typography className={classes.errorText} align="center">Enter Valid Password</Typography>}
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.inputGridPadding)}>
                        <Input type="password" name="userPassCheck" placeholder="Confirm Password" onChange={rePassChangeHandler} onBlur={rePassBlurHandler}
                               startAdornment={( <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>)}
                               className={passInputClasses}
                        />
                        {rePassInputHasError && <Typography className={classes.errorText} align="center">Check Your Password</Typography>}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" className={classes.joinBtn} >Sign Up</Button>
                    </Grid>
                </form>
            </Grid>
        </section>
    );
};
```
#### Custom hooks are used for SignUp.jsx. It is not necessary for this project since it's not a big project. But I've decided to create it because this project may get bigger in the future and custom hooks would be very useful to deal with constantly used similar useStates. I added simple validations such as checking '@' or length in order to prevent uncessary post requests. In addition, for the user experience aspect, users can see error messages below each input in real time.


#### SignUp.jsx에서는 커스텀 훅스를 활용하였습니다. 커스텀훅스를 만든 이유는 동일한 기능을 가진 useState가 빈번히 사용될 뿐만 아니라 프로젝트 규모를 키울 경우 더 많이 사용되기에 미리 구현을 하였습니다. 커스텀훅스에서는 간단한 validation를 만들어 이메일에 @가 없거나 비밀번호와 아이디 길이가 6보다 작은 경우 false를 반환하도록 하였습니다. 이 기능을 만든 이유가 회원가입시 위 조건을 만족하지도 않은 상황에서 서버에 post에 전송되는 경우를 막고자 만들었습니다. fetchJoinInfo속의 if 문을 통해 실수로 전송되는걸 막고 있습니다. 또한, UX 관점에서 유저가 회원가입을 위한 값을 입력하는데 조건을 만족하지 않는 경우 바로 확인 할 수 있도록 각 input 밑에 <Typography>를 만들었습니다. 각 Typography는 dynamic css를 통해 입력되는 값에 오류가 있을 경우 hasError가 true가 될때 발동되록하였습니다.
