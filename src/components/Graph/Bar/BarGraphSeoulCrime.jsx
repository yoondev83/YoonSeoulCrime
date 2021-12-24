import React from 'react';
import { Bar } from 'react-chartjs-2';
import YearTabs from '../../UI/YearTabs';
import { Container, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../UI/LoadingSpinner';
import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) =>({
  container:{
    maxWidth: "120rem",
    padding: "0 3.2rem",
    margin: "6.2rem auto 6.2rem auto"
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
   
}));

const BarGraphSeoulCrime = props =>{
    const classes           = useStyles();
    const seoulCrimeData    = useSelector(state => state.data.districtData); 
    const location          = useLocation();
    const {year}            = location.state;
    const incidents         =   [];
    const districts         =   [];
    let chartHeight = window.innerWidth < 544 ? "400vh" : "";
    let crimeData;          
    let selectedYearData;
    if(seoulCrimeData){
      crimeData = seoulCrimeData.data;

     switch (year) {
       case 2019:  selectedYearData = crimeData.slice(1,25);
         break;
       case 2018:  selectedYearData = crimeData.slice(27,51);
         break;
       case 2017:  selectedYearData = crimeData.slice(53,77);
         break;
       case 2016:  selectedYearData = crimeData.slice(79,103);
         break;
       case 2015:  selectedYearData = crimeData.slice(105,129);
         break;
       case 2014:  selectedYearData = crimeData.slice(131,155);
         break;
     
       default:    selectedYearData = crimeData.slice(1,25);
         break;
     }
     selectedYearData.forEach(d => {
      districts.push(d.District);
      incidents.push(d.Total_Incidents);
   });
    }

    const data = {
      labels: districts,
      datasets: [
        {
          label: 'The Total Incidents',
          data: incidents,
          backgroundColor: 'rgb(238,155,85)',
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
            <YearTabs/>
            <h1 className={classes.title}>The Crime Incidents Per District ({year})</h1>
            {!seoulCrimeData? <LoadingSpinner />:
            <Bar data={data} options={options} height={chartHeight}/>}
        </Container>
    );
};

export default BarGraphSeoulCrime;