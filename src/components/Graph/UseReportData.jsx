import {useEffect, useState} from 'react';
import {csv} from "d3";

const csvUrl = "https://gist.githubusercontent.com/yoondev83/9168b5f93ff4920478856c40373e4b48/raw/d4c02b9f3fb00cb8fb7a85fd5d34a979bc73e793/Report.csv";

export const UseReportData = () => {
    const [data, setData]   = useState(null);
    
    useEffect(() => {
        csv(csvUrl).then(reportData => {
            setData(reportData);
        });
        }, []);
    return data;
  }