import {useEffect, useState} from 'react';
import papa from "papaparse";
import {features} from "./Map/seoulGeoJson.json"
import legendItems from './Map/entities/LegendItems';
const csvUrl = "https://gist.githubusercontent.com/yoondev83/c005986d80b0a16dc35f415c3b742abf/raw/fad0801f4bf194cf5409a8d401de9979f6202199/2010-2020_Annual_Seoul_Crime_Data.csv";
const csvReportUrl = "https://gist.githubusercontent.com/yoondev83/9168b5f93ff4920478856c40373e4b48/raw/57be8a04d5fb2268fa2d8457cbef32f66bed9a52/2005-2009_The_Seoul_Police_Dispatches";
const csvSeoulDistrictCrime = "https://gist.githubusercontent.com/yoondev83/7a811ec87fc150fcfba4cef6712070b4/raw/347b61b6025f13b564aef400424ea6ecbd2e1aaf/Seoul_District_Crimes.csv";
const mapSeoulDistricts     = features;


export const UseData = () => {
    const [data, setData]   = useState(null);
    const [reportData, setReportData]   = useState(null);
    const [seoulCrimetData, setSeoulCrimeData]   = useState(null);
    
    const setDistrictColor = mapDistrict => {
        const legendItem2019 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2019));
        const legendItem2018 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2018));
        const legendItem2017 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2017));
        const legendItem2016 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2016));
        const legendItem2015 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2015));
        const legendItem2014 = legendItems.find(item => item.isFor(mapDistrict.properties.totalIncidents_2014));

        if(legendItem2019 != null){
            mapDistrict.properties.totalIncidents_2019Color = legendItem2019.color;
        }
        if(legendItem2018 != null){
            mapDistrict.properties.totalIncidents_2018Color = legendItem2018.color;
        }
        if(legendItem2017 != null){
            mapDistrict.properties.totalIncidents_2017Color = legendItem2017.color;
        }
        if(legendItem2016 != null){
            mapDistrict.properties.totalIncidents_2016Color = legendItem2016.color;
        }
        if(legendItem2015 != null){
            mapDistrict.properties.totalIncidents_2015Color = legendItem2015.color;
        }
        if(legendItem2014 != null){
            mapDistrict.properties.totalIncidents_2014Color = legendItem2014.color;
        }
    };


    const processCrimeMapData = (seoulDistrict) => {
        setSeoulCrimeData(seoulDistrict); 
        //자료는 6년치인데 행정구역 정보는 년도별이 아닌 그냥 행정구역 이름이 나열된거니 한 해 수치밖에 나오지 못 함.
        for (let i = 0; i < mapSeoulDistricts.length; i++){
            const mapDistrict = mapSeoulDistricts[i];
            const crimeDistrict= seoulDistrict.data.filter(data=> data.District === mapDistrict.properties.SIG_ENG_NM);
            mapDistrict.properties.totalIncidents_2019      = 0;
            mapDistrict.properties.totalIncidentsText_2019  = "0";
            mapDistrict.properties.totalIncidents_2018      = 0;
            mapDistrict.properties.totalIncidentsText_2018  = "0";
            mapDistrict.properties.totalIncidents_2017      = 0;
            mapDistrict.properties.totalIncidentsText_2017  = "0";
            mapDistrict.properties.totalIncidents_2016      = 0;
            mapDistrict.properties.totalIncidentsText_2016  = "0";
            mapDistrict.properties.totalIncidents_2015      = 0;
            mapDistrict.properties.totalIncidentsText_2015  = "0";
            mapDistrict.properties.totalIncidents_2014      = 0;
            mapDistrict.properties.totalIncidentsText_2014  = "0";
            
            if(crimeDistrict != null){ 
                //2019
                const totalCrimeIncidents2019 = crimeDistrict[5].Total_Incidents;
                mapDistrict.properties.totalIncidents_2019 = totalCrimeIncidents2019;
                mapDistrict.properties.totalIncidentsText_2019 = totalCrimeIncidents2019;
                //2018
                const totalCrimeIncidents2018 = crimeDistrict[4].Total_Incidents;
                mapDistrict.properties.totalIncidents_2018 = totalCrimeIncidents2018;
                mapDistrict.properties.totalIncidentsText_2018 = totalCrimeIncidents2018;
                //2017
                const totalCrimeIncidents2017 = crimeDistrict[3].Total_Incidents;
                mapDistrict.properties.totalIncidents_2017 = totalCrimeIncidents2017;
                mapDistrict.properties.totalIncidentsText_2017 = totalCrimeIncidents2017;
                //2016
                const totalCrimeIncidents2016 = crimeDistrict[2].Total_Incidents;
                mapDistrict.properties.totalIncidents_2016 = totalCrimeIncidents2016;
                mapDistrict.properties.totalIncidentsText_2016 = totalCrimeIncidents2016;
                //2015
                const totalCrimeIncidents2015 = crimeDistrict[1].Total_Incidents;
                mapDistrict.properties.totalIncidents_2015 = totalCrimeIncidents2015;
                mapDistrict.properties.totalIncidentsText_2015 = totalCrimeIncidents2015;
                //2014
                const totalCrimeIncidents2014 = crimeDistrict[0].Total_Incidents;
                mapDistrict.properties.totalIncidents_2014 = totalCrimeIncidents2014;
                mapDistrict.properties.totalIncidentsText_2014 = totalCrimeIncidents2014;

            }
            setDistrictColor(mapDistrict);
        };
    }
    useEffect(() => {
        papa.parse(csvUrl, {
            download: true,
            header: true,
            complete: result => setData(result)
        });
        papa.parse(csvReportUrl, {
            download: true,
            header: true,
            complete: result => setReportData(result)
        });
        papa.parse(csvSeoulDistrictCrime, {
            download: true,
            header: true,
            complete: result => processCrimeMapData(result),
        });
        }, []);
    return [data, reportData, seoulCrimetData];
  }