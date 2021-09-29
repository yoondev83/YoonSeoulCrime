import { Container, Typography} from "@material-ui/core";
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import seoulGeoJson from "./seoulGeoJson.json";
import 'leaflet/dist/leaflet.css';
import ShowSeoulDistrictCrimeData from "./ShowSeoulDistrictCrimeData";
import { useRef } from "react";
import YearTabs from "../../UI/YearTabs";
import Legend from "./Legend";
import legendItems from "./entities/LegendItems";
import { mapStyle, MapStyles } from "./MapStyles";

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

export default SeoulCrimeMap2019;