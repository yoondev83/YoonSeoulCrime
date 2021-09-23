import {useEffect, useState} from 'react';
import {csv} from "d3";

const csvUrl = "https://gist.githubusercontent.com/yoondev83/c005986d80b0a16dc35f415c3b742abf/raw/fad0801f4bf194cf5409a8d401de9979f6202199/2010-2020_Annual_Seoul_Crime_Data.csv";
const csvReportUrl = "https://gist.githubusercontent.com/yoondev83/9168b5f93ff4920478856c40373e4b48/raw/57be8a04d5fb2268fa2d8457cbef32f66bed9a52/2005-2009_The_Seoul_Police_Dispatches";

export const UseData = () => {
    const [data, setData]   = useState(null);
    const [reportData, setReportData]   = useState(null);
    
    useEffect(() => {
        csv(csvUrl).then(data => {
            setData(data);
        });
        csv(csvReportUrl).then(reportData => {
            setReportData(reportData);
        });
        }, []);
    return [data, reportData];
  }