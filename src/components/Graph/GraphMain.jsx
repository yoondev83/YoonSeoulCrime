import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { UseData } from "./UseData";
import Navbar from "../Header/Navbar";
import GraphDrawer from "./GraphDrawer";
import StackedBarplot from "./StackedBarplot/StackedBarplot";
import LineArrestedCrimes from "./Line/LineArrestedCrimes";
import BarGraphPoliceDispatch from "./Bar/BarGraphPoliceDispatch";
import SeoulCrimeMap from "./Map/SeoulCrimeMap";
import Footer from "../Main/Footer";

const GraphMain = ({ match, location, history }) => {
    const [data, reportData, seoulCrimetData] = UseData();
    if (!data || !reportData || !seoulCrimetData){
        return <pre>Loading...</pre>;
      }
    return(
        <section>
            <Navbar />
            <Container maxWidth="lg">
                <GraphDrawer/>
                <Route exact path="/graph" render={() => <StackedBarplot data={data}/>} />
                <Route path="/graph/graph2" render={() => <LineArrestedCrimes data={data}/>} />
                <Route path="/graph/graph3" render={() => <BarGraphPoliceDispatch data={reportData}/>} />
                <Route path="/graph/graph4" render={() => <SeoulCrimeMap data={seoulCrimetData}/>}/>
                {/* <Route path={`${match.url}/:graphN`} render={() => <StackedBarplotPerOffense data={data}/>} /> */}
            </Container>
            <Footer/>
        </section>
    );
};

export default GraphMain;