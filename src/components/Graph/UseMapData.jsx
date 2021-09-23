import {useEffect, useState} from 'react';
import {csv} from "d3";
const seoulGeo = "https://gist.githubusercontent.com/yoondev83/b1785f6ffd7dd44d79bb57849da99110/raw/69e8007b68efa15734340da1234698d8df0e7976/2017Seoul_Administrative_District_topo.json";

export const UseMapData = () => {
    console.log("this is UseMapData");
    const [mapData, setMapData]   = useState(null);
    
    useEffect(() => {

        csv(seoulGeo).then(data => {
            setMapData(data);
        });

        // const fetchGeo = async() => {
        //     const response = await fetch(seoulGeo);
        //     console.log(response.status);
            
        //     if(!response.ok){
        //         throw new Error("Something went wrong!");
        //     }
            
        //     const responseData = await response.json();
        //     setMapData(responseData);
        //     console.log("responsedata: "+responseData);
        // }
        console.log("mapdata: " + mapData);
        // fetchGeo();
        }, []);
    return mapData;
  }