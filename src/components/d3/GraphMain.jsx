import { Container } from "@material-ui/core";
import StackedBarplot from "./StackedBarplot/StackedBarplot";

import { UseData } from "./UseData";


const GraphMain = () => {
    const data = UseData();

    if (!data){
        return <pre>Loading...</pre>;
      }
    return(
        <section>
            <Container maxWidth="lg">
                <StackedBarplot data={data}/>
            </Container>
        </section>
    );
};

export default GraphMain;