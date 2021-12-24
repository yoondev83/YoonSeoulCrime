import { makeStyles } from "@material-ui/core";

export const MapStyles = makeStyles((theme) =>({
    container:{
        maxWidth: "120rem",
        padding: "0 3.2rem",
        margin: "6.2rem auto",
        [theme.breakpoints.down('sm')]: {
            padding: "0 2.2rem",
            // margin: "6.2rem auto 3.2rem auto",
          },
      },
      title: {
        marginTop: "6.2rem",
        color: "#ced4da",
        fontWeight: 700,
        fontSize: "2.4rem",
        textAlign: "center",
    },
    mapContainer:{
        height: "80vh",
        width: "100%",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            height: "100vh",
          },
    },
    message:{
        color: "#ced4da",
        fontWeight: 400,
        [theme.breakpoints.down('md')]: {
            // paddingTop: "2rem",
          },
        [theme.breakpoints.down('sm')]: {
            paddingTop: "13rem",
          },
    }
}));

export const mapStyle={
    color: "white",
    weight:1,
    fillOpacity: 1
};