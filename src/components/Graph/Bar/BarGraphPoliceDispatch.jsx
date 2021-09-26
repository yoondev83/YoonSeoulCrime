import React, {useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import ShowDispatchRawData from './ShowDispatchRawData';
import classes from "./BarGraphPoliceDispatch.module.css";


const BarGraphPoliceDispatch = props =>{
    const year              =   [];
    const dispatcherVolume  =   [];
    const within5Min        =   [];

    useEffect(() => {
        props.data.data.map(d => {
            year.push(d.Year);
            dispatcherVolume.push(d.The_Total_112_Dispatcher_Volume);
            within5Min.push(d.Within_5min);
      });
    }, [props.data]);

    const data = {
      labels: year,
      datasets: [
        {
          label: 'The Total 112 Dispatcher Volume',
          data: dispatcherVolume,
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Within 5 Minutes',
          data: within5Min,
          backgroundColor: 'rgb(54, 162, 235)',
        },
      ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 15
                  }
              }
          },
          tooltip:{
            boxWidth: 20
          }
      },
    };
console.log(props.data);
    return(
        <div className='header'>
            <h1 className={classes.title}>How Fast Is The Seoul Police? (2005 - 2009)</h1>
            <Bar data={data} options={options} />
            <ShowDispatchRawData data={props.data}/>
        </div>
    );
};

export default BarGraphPoliceDispatch;