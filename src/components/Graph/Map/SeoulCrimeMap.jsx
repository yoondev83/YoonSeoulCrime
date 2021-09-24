import { Container } from "@material-ui/core";
import { MapContainer, TileLayer, Tooltip, Polygon, GeoJSON} from 'react-leaflet'
import seoulGeoJson from "./seoulGeoJson.json";
import 'leaflet/dist/leaflet.css';
import { makeStyles } from "@material-ui/styles";
import ShowSeoulDistrictCrimeData from "../ShowSeoulDistrictCrimeData";
import { useRef } from "react";

const useStyles = makeStyles((theme) =>({
    container:{
        padding: 0,
        paddingTop: 30,
        height: "100%"
    },
    mapContainer:{
        height: "80vh",
        width: "100%",
        zIndex: 1
    }


}));


const mouseoverEvent= event=>{
    event.target.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    })
};

  const SeoulCrimeMap = props => {
    const getJsonRef = useRef();
    console.log(props.data);
    const classes = useStyles();
    let seoulLocation = [37.5605, 126.9780];
    
    const onEachDistrict = (district, layer) =>{
        const districtName = district.properties.SIG_ENG_NM;
        console.log(districtName);
        layer.bindPopup(districtName);
        // layer.options.fillOpacity = Math.random();

        layer.on({
            mouseover: mouseoverEvent,
            mouseout: (event)=>{
                getJsonRef.current.resetStyle(event.target);
                // event.target.resetStyle();
            }
        });
        layer.setStyle({
        });
    

    };

    return(
        <Container maxWidth="lg" className={classes.container}>
            <MapContainer center={seoulLocation} zoom={12} scrollWheelZoom={true} className={classes.mapContainer}>
                <TileLayer
                    attribution='&copy; <a href="#">Seoul Crime Map</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* 1. 구역별 이름 나와야 함.  O
                    2. 구역별 데이터가 나와야 함.
                    3. 데이터 건수에 따른 색깔 변화를 지도에 표시해야 함.*/}
                <GeoJSON ref={getJsonRef} data={seoulGeoJson} onEachFeature={onEachDistrict}>
                    {/* <Tooltip>testtt</Tooltip> */}
                </GeoJSON>
                {/* <Polygon pathOptions={limeOptions} positions={polyline} /> */}
                {/* <Marker position={seoulLocation}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>

            <ShowSeoulDistrictCrimeData data={props.data}/>
        </Container>
    );
};

export default SeoulCrimeMap;