import React, {useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Container } from "@material-ui/core";
import YearTabs from '../../UI/YearTabs';
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) =>({
    container:{
        padding: 0,
        paddingTop: 30,
        height: "100%"
    },
    title:{
        paddingTop: 20,
        color: "#fff",
        fontWeight: "bold",
        fontSize: "24px",
        textAlign: "center",
    }
   
}));

const BarGraphSeoulCrime = props =>{
    const classes           = useStyles();
    const crimeData         =   props.data.data;
    const selectedYear      =   +props.year;
    const incidents         =   [];
    const districts         =   [];
    let selectedYearData;

    switch (selectedYear) {
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
    
    useEffect(() => {
        selectedYearData.forEach(d => {
            districts.push(d.District);
            incidents.push(d.Total_Incidents);
      });
    }, [selectedYearData]);

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
        <Container maxWidth="lg" className={classes.container}>

            <YearTabs/>
            <h1 className={classes.title}>The Crime Incidents Per District ({selectedYear})</h1>
            <Bar data={data} options={options} />
        </Container>
    );
};

export default BarGraphSeoulCrime;