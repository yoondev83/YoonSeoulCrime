import React, {useCallback, useEffect, useState} from 'react';
import {csv} from "d3";

const csvUrl = "https://gist.githubusercontent.com/yoondev83/c005986d80b0a16dc35f415c3b742abf/raw/fad0801f4bf194cf5409a8d401de9979f6202199/2010-2020_Annual_Seoul_Crime_Data.csv";

export const UseData = () => {
    const [data, setData]   = useState(null);
    
    useEffect(() => {
            csv(csvUrl).then(data => {
                setData(data);
            });
        }, []);
    return data;
  }