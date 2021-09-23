import { Container } from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
// import classes from "./SeoulCrimeMap.module.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>({
    container:{
        padding: 0,
        paddingTop: 30,
        height: "100vh"
    },
    mapContainer:{
        height: "80vh",
        width: "100%",
        zIndex: 1
    }


}));

const limeOptions = { color: 'purple' }
const polyline = [
    [37.5605, 126.9780],
    [37.5635, 126.9980],
    [37.5665, 126.9780],
  ]
const SeoulCrimeMap = props => {
    console.log(props.data);
    const classes = useStyles();
    let seoulLocation = [37.5605, 126.9780];
    
    return(
        <Container maxWidth="lg" className={classes.container}>
            <MapContainer center={seoulLocation} zoom={12} scrollWheelZoom={true} className={classes.mapContainer}>
                <TileLayer
                    attribution='&copy; <a href="#">Seoul Crime Map</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polygon pathOptions={limeOptions} positions={polyline} />
                {/* <Marker position={seoulLocation}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </Container>
    );
};

export default SeoulCrimeMap;