Seoul Crime Map

Install for front-end (프론트엔드 설치)
# npm install

# npm start
Backend 백엔드
•	Demo 페이지
https://yoondev83.github.io/YoonSeoulCrimeFront/
•	Preview Video 실행영상
Environment 개발환경
•	Operating System: Win 10
•	IDE: VS Code
•	Front-end: React 17.0.2, Material-ui 4.12, chart.js 3.51, leaflet: 1.7.1, react-leaflet: 3.2.1
•	Back-end: Express: 4.17, mongoose: 6.0.8, passport: 0.5, passport-local: 1.0, passport-local-mongoose: 6.1, bcrypt: 5.0.1
Introduction 프로젝트 개요
이 프로젝트는 데이터 시각화를 통해 서울을 잘 모르는 외국인들을 위해 서울의 범죄 현황을 쉽게 파악할 수 있도록 만들었습니다. 자료는 보통 서울의 범죄 발생 건수, 체포 건수, 출동 현황과 구별 건수 기준으로 지도에 도식화 하였습니다. 데이터는 '서울 열린데이터 광장'을 통해 가져왔으며, 원할한 작업을 위해 따로 다듬은 다음 제 gist에 올려서 사용하였습니다. 첫 프로젝트인만큼 아직 부족한 점들이 많습니다. 아직 구현되지 못한 부분들은 업데이트를 통해 개선해 가도록 하겠습니다.
This project is to provide non Korean speakers with visualized crime data in Seoul so that people would know how Seoul is in terms of safety. Graphs are based on data that shows the number of reports and incidents and how fast the Korea Police is. Sources are from '서울 열린데이터 광장', which I don't think they have language services on their website, and I trimed the sources to make CSVs and uploaded on my gist. It's my first project in the IT field. I would work on this project step by step.
Front-End Project Structure 프론트엔드 프로젝트 구조
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
Main Features 프로젝트 기능
1.	그래프 출력
•	Leaflet.js와 Chart.js를 이용하여 데이터 시각화.
2.	CSV 파싱
•	papaparse를 이용하여 gist에 올린 csv파일을 파싱합니다.
3.	회원가입
•	onChange를 이용하여 실시간 중복 조회.
•	비밀번호 변경.
•	회원탈퇴.
4.	로그인 및 세션 유지
5.	게시판
•	작성한 게시물을 DB에 저장.
•	각 게시물마다 좋아요 싫어요를 의미하는 하트와 깨진 하트 버튼을 구현함.
•	DB에 저장된 게시물을 불러와 게시판 출력.
1.	Graphs
•	Leaflet.js & Chart.js for the data visualization.
2.	CSV parsing
•	papaparse.
3.	Sign up
•	Check email duplication, using onChange.
•	Change password.
•	Delete account.
4.	Sign in and session
5.	User Forum
•	User articles are saved on DB.
•	Clickable heart and broken heart icons like the "Like" function.
•	Load forum data from db
업데이트 예정
1.	게시물 수정 및 삭제
2.	조회수 출력
3.	게시물 검색
4.	비회원 게시글 작성 허가하여 회원과 비회원 구분
5.	댓글
Coming Soon
1.	Can modify and delete articles.
2.	Show the views.
3.	Can search.
4.	Allow non-members to write.
5.	Comments
Front-end

index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App컴포넌트 호출
App.js
