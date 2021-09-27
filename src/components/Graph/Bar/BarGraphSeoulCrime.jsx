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
    //년도별 출력?
    
    const classes = useStyles();
    const crimeData         =   props.data.data;
    console.log("crimeData: " + crimeData.slice(26,50));
    const data_2019         =   props.data.data.slice(1,25);
    const incidents         =   [];
    const year              =   [];
    const districts         =   [];
    
    useEffect(() => {
        // for(var a = 0 ; a < crimeData.length; a++){
        //     if (a != 0 || a !== 26 || a !== 52 || a !== 78 || a !== 104 || a !== 130){
        //         annualIncidents.push(crimeData[a].Total_Incidents);
        //     }
        // }
        data_2019.map(d => {
            districts.push(d.District);
            incidents.push(d.Total_Incidents);
      });
    }, [props.data]);

    const data = {
      labels: districts,
      datasets: [
        {
          label: 'The Crime Incidents per District',
          data: incidents,
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        // indexAxis: 'y',
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
        <Container maxWidth="lg" className={classes.container}>

            <YearTabs/>
            <h1 className={classes.title}>The Crime Incidents per District (2019)</h1>
            <Bar data={data} options={options} />
        </Container>
    );
};

export default BarGraphSeoulCrime;