import { makeStyles } from "@material-ui/core";

export const MapStyles = makeStyles((theme) =>({
    container:{
        padding: 0,
        paddingTop: 30,
        height: "100%"
    },
    mapContainer:{
        height: "80vh",
        width: "100%",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            height: "50vh",
          },
    },
    message:{
        color: "grey",
        fontWeight: 400,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 150,
            paddingBottom: 0,
          },
    }
}));

export const mapStyle={
    color: "white",
    weight:1,
    fillOpacity: 1
};