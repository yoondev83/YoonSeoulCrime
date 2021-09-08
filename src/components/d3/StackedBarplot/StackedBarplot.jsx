import React, {useEffect} from "react";
import {Bar} from "react-chartjs-2";
import { defaults } from 'react-chartjs-2';
import classes from "./StackedBarplot.module.css";

const StackedBarplot = props => {
  const year = [];
  const totalReport = [];
  const totalArrest = [];
  const arbitraryStackKey = "stack1";
  defaults.font.size="15";

  useEffect(() => {
    props.data.map(y => {
      year.push(y.Year);
      totalReport.push(y.Total_reports);
      totalArrest.push(y.Total_arrests);
    });
  }, [year]);
  
    const data = {
        labels: year,
        datasets: [
          //Reported Crimes
          {stack: arbitraryStackKey,
            label: 'Reported Crimes',
            data: totalReport,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'blue',
          },
          //Arrests
          {stack: arbitraryStackKey,
            label: 'Arrests',
            data: totalArrest,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },
       
        ],
      };
      
      const options = {
        responsive: true,
        indexAxis: 'y',
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {stacked: true,
              ticks: {
                beginAtZero: true,
              },
              
            },
          ],
          xAxes: [
            {
              stacked: true,
              
            },
          ],
        },
        plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 18
                  }
              }
          },
          
      },
      
      };
    

    return(
        <section>
          <div className='header'>
            <h1 className={classes.title}>The Total Number of Reported Crimes & Arrests</h1>
            <div className='links'>
            </div>
          </div>
          <Bar data={data} options={options} />
      </section>
    );
};

export default StackedBarplot;

