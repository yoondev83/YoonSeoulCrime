import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { UseData } from "./UseData";
import Navbar from "../Header/Navbar";
import GraphDrawer from "./GraphDrawer";
import StackedBarplot from "./StackedBarplot/StackedBarplot";
import LineArrestedCrimes from "./Line/LineArrestedCrimes";
import BarGraphPoliceDispatch from "./Bar/BarGraphPoliceDispatch";
import SeoulCrimeMap2019 from "./Map/SeoulCrimeMap2019";
import SeoulCrimeMap2018 from "./Map/SeoulCrimeMap2018";
import SeoulCrimeMap2017 from "./Map/SeoulCrimeMap2017";
import SeoulCrimeMap2016 from "./Map/SeoulCrimeMap2016";
import SeoulCrimeMap2015 from "./Map/SeoulCrimeMap2015";
import SeoulCrimeMap2014 from "./Map/SeoulCrimeMap2014";
import Footer from "../Main/Footer";
import LoadingSpinner from "../UI/LoadingSpinner";

const GraphMain = ({ match, location, history }) => {
    const [data, reportData, seoulCrimetData] = UseData();
    
    
    if (!data || !reportData || !seoulCrimetData){
        return <LoadingSpinner/>
      }
    return(
        <section>
            <Navbar />
            <Container maxWidth="lg">
                <GraphDrawer/>
                <Route exact path="/graph" render={() => <StackedBarplot data={data}/>} />
                <Route path="/graph/graph2" render={() => <LineArrestedCrimes data={data}/>} />
                <Route path="/graph/graph3" render={() => <BarGraphPoliceDispatch data={reportData}/>} />
                <Route exact path="/graph/seoulCrimeMap" render={() => <SeoulCrimeMap2019 data={seoulCrimetData}/>}/>
                <Route path="/graph/seoulCrimeMap/2019" render={() => <SeoulCrimeMap2019 data={seoulCrimetData}/>}/>
                <Route path="/graph/seoulCrimeMap/2018" render={() => <SeoulCrimeMap2018 data={seoulCrimetData}/>}/>
                <Route path="/graph/seoulCrimeMap/2017" render={() => <SeoulCrimeMap2017 data={seoulCrimetData}/>}/>
                <Route path="/graph/seoulCrimeMap/2016" render={() => <SeoulCrimeMap2016 data={seoulCrimetData}/>}/>
                <Route path="/graph/seoulCrimeMap/2015" render={() => <SeoulCrimeMap2015 data={seoulCrimetData}/>}/>
                <Route path="/graph/seoulCrimeMap/2014" render={() => <SeoulCrimeMap2014 data={seoulCrimetData} year="2014"/>}/>
                {/* <Route path="/graph/seoulCrimeMap/2014" render={() => <SeoulCrimeMap2014 data={seoulCrimetData}/>}/> */}
                {/* <Route path={`${match.url}/:graphN`} render={() => <StackedBarplotPerOffense data={data}/>} /> */}
            </Container>
            <Footer/>
        </section>
    );
};

export default GraphMain;