import React, { useEffect } from "react";
import {Bar} from "react-chartjs-2";
import { defaults } from 'react-chartjs-2';
import ShowRawData from "./ShowRawData";
import { Container, makeStyles } from '@material-ui/core';
import { useSelector } from "react-redux";
import LoadingSpinner from "../../UI/LoadingSpinner";

const useStyles = makeStyles((theme) => ({
  container:{
      maxWidth: "120rem",
      padding: "0 3.2rem",
      margin: "0 auto",
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

const StackedBarplot = () => {
  const year = [];
  const totalReport = [];
  const totalArrest = [];
  const annualData = useSelector(state => state.data.annualCrimeData);
  const classes = useStyles();
  let chartHeight = window.innerWidth < 544 ? "400vh" : "";
  defaults.font.size="15";
  if(annualData){
    annualData.data.forEach(y => {
      year.push(y.Year);
      totalReport.push(y.Total_reports);
      totalArrest.push(y.Total_arrests);
    });
  }

  
    const data = {
        labels:year,
        datasets: [
          //Reported Crimes
          {
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
          {
            // stack: arbitraryStackKey,
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
        // responsive: true,
        indexAxis: 'y',
        maintainAspectRatio : true,
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
              max: 65000,
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
          tooltip:{
            boxWidth: 200
          }
      },
      
      };
    
      useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return(
      <Container fixed className={classes.container}>
            <h1 className={classes.title}>The Total Number of Reported Crimes & Arrests (2010-2020)</h1>
          {!annualData ? <LoadingSpinner />: 
            <>
            <Bar data={data} options={options} height={chartHeight}/>
            <ShowRawData data={annualData}/>
            </>
          }
      </Container>
    );
};

export default StackedBarplot;

