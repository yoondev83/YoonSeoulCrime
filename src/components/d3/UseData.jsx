import React, {useCallback, useEffect, useState} from 'react';
import {csv} from "d3";

const csvUrl = "https://gist.githubusercontent.com/yoondev83/c005986d80b0a16dc35f415c3b742abf/raw/a9721299d271e077acf8923d70c01ac79546dbfa/2010-2020_Annual_Seoul_Crime_Data.csv";

export const UseData = () => {
    const [data, setData]   = useState(null);
    
    useEffect(() => {
            csv(csvUrl).then(data => {
                setData(data);
            });
        }, []);
        
        console.log(data);
    return data;
  }