import { useLocation } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GraphDrawer from "../Graph/GraphDrawer";
const Layout = (props) =>{
    const location = useLocation();
    return(
        <>
            <Navbar />
            {location.pathname.includes("/api/graph") === true && <GraphDrawer/>}
                {props.children}
            <Footer/>
        </>
    );
};

export default Layout;