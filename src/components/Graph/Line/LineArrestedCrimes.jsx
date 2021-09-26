import React, {useEffect} from "react";
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import ShowRawData from "../StackedBarplot/ShowRawData";
import classes from "./LineArrestedCrimes.module.css";

const LineArrestedCrimes = props => {
  const year = [];
  // reports

  //arrest
  const violentCrimeArrests = [];
  const larcenyArrests      = [];
  const assaultArrests      = [];
  const whiteCollarArrests  = [];
  const sexualCrimeArrests  = [];
  const otherCrimeArrests   = [];
  const specialCrimeArrests = [];
  
  //graph
  defaults.font.size="15";
  
  useEffect(() => {
    props.data.data.map(y => {
      year.push(y.Year);

      //arrest
      violentCrimeArrests.push(y.Violent_crime_arrests);
      larcenyArrests.push(y.Larceny_arrests);
      assaultArrests.push(y.Assault_arrests);
      whiteCollarArrests.push(y.White_collar_arrests);
      sexualCrimeArrests.push(y.Sexual_crime_arrests);
      otherCrimeArrests.push(y.Other_crime_arrests);
      specialCrimeArrests.push(y.Special_act_violation_arrests);
    });
  }, [props.data]);
  
    const data = {
        labels: year,
        datasets: [
          {
            label: 'Violent Crimes',
            data: violentCrimeArrests,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'blue',
          },
          {
            label: 'Larceny',
            data: larcenyArrests,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(34, 204, 0, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },
          {
            label: 'Assult Crimes',
            data: assaultArrests,
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },
          {
            label: 'White Collar',
            data: whiteCollarArrests,
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },

          {
            label: 'Sexual Crimes',
            data: sexualCrimeArrests,
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },
          {
            label: 'Other Crimes',
            data: otherCrimeArrests,
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },
          {
            label: 'Special Act Violations',
            data: specialCrimeArrests,
            backgroundColor: [
              'rgb(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgb(77, 225, 255)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: 'red',
          },
          
       
        ],
      };
      
      const options = {
        responsive: true,
        // indexAxis: 'y',
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              // stacked: true,
              ticks: {
                beginAtZero: true,
              },
              
            },
          ],
          xAxes: [
            {
              
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
    

    return(
          <div className='header'>
            <h1 className={classes.title}>The Arrested Crimes (2010-2020) </h1>
            <Line data={data} options={options} />
            <ShowRawData data={props.data}/>
          </div>
    );
};

export default LineArrestedCrimes;

