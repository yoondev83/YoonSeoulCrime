import React from 'react';
import { Bar } from 'react-chartjs-2';
import ShowDispatchRawData from './ShowDispatchRawData';
import { Container, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../UI/LoadingSpinner';
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

const BarGraphPoliceDispatch = props =>{
    const year              =   [];
    const dispatcherVolume  =   [];
    const within5Min        =   [];
    const reportData          = useSelector(state => state.data.policeDispatchData); 
    const classes = useStyles();
    if(reportData){
      reportData.data.forEach(d => {
        year.push(d.Year);
        dispatcherVolume.push(d.The_Total_112_Dispatcher_Volume);
        within5Min.push(d.Within_5min);
      });
    }

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
    return(
      <Container fixed className={classes.container}>
            <h1 className={classes.title}>How Fast Is The Seoul Police? (2005 - 2009)</h1>
            {!reportData? <LoadingSpinner />:
            <>
              <Bar data={data} options={options} />
              <ShowDispatchRawData data={reportData}/>
            </>}
        </Container>
    );
};

export default BarGraphPoliceDispatch;