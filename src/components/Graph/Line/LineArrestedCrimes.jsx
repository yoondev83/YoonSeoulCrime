import React from "react";
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import ShowRawData from "../StackedBarplot/ShowRawData";
import { Container, makeStyles } from '@material-ui/core';
import { useSelector } from "react-redux";
import LoadingSpinner from "../../UI/LoadingSpinner";
const useStyles = makeStyles((theme) => ({
  container:{
      maxWidth: "120rem",
      padding: "0 3.2rem",
      margin: "0 auto"
    },
    title: {
      marginTop: "6.2rem",
      color: "#ced4da",
      fontWeight: 700,
      fontSize: "2.4rem",
      textAlign: "center",
  },
  [theme.breakpoints.down('xs')]: {
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
  },
  },
}
));

const LineArrestedCrimes = props => {
  const classes = useStyles();
  const year = [];
  //arrest
  const violentCrimeArrests = [];
  const larcenyArrests      = [];
  const assaultArrests      = [];
  const whiteCollarArrests  = [];
  const sexualCrimeArrests  = [];
  const otherCrimeArrests   = [];
  const specialCrimeArrests = [];
  const annualData          = useSelector(state => state.data.annualCrimeData); 
  let chartHeight = window.innerWidth < 544 ? "400vh" : "";
  //graph
  defaults.font.size="15";
  if(annualData){
    annualData.data.forEach(y => {
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
  }
  
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
      <Container fixed className={classes.container}>
            <h1 className={classes.title}>The Arrested Crimes (2010-2020) </h1>
            {!annualData? <LoadingSpinner />:
            <>
            <Line data={data} options={options} height={chartHeight}/>
            <ShowRawData data={annualData}/>
            </>
            }
      </Container>
    );
};

export default LineArrestedCrimes;

