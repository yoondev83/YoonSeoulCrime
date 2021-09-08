import {scaleOrdinal, scaleBand, scaleLinear, max, format} from "d3";
import {AxisBottom} from "./AxisBottom";
import {AxisLeft} from "./AxisLeft";
import {Marks}  from "./Marks";
import {Legend} from "react-d3-legends";
import Grid from '@material-ui/core/Grid';
import classes from "./HorizontalGraphBar.module.css";


const width       = 1180;
const height      = 800;
const margin      = {top: 20, right: 20, bottom: 60, left: 90};
const xAxisLabelOffset = 70;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth =  width - margin.left - margin.right;

const xValue     = d => d.Total_reports;
const x2Value     = d => d.Total_arrests;
const yValue     = d => d.Year;


const HorizontalGraphBar = props => {
   
    var fillScale = scaleOrdinal()
    .domain(["Total Reports", "Total Arrests"])
    .range(["#137B80", "#F6B656"]);

    const yScale = scaleBand() //range between bars
                    .domain(props.data.map(yValue))  //입력되는 데이터 값의 범위
                    .range([0, innerHeight]) //출력되는 범위 (픽셀)
                    .paddingInner(0.2);
    const xScale = scaleLinear()
                    .domain([50000, max(props.data, xValue)]) //시작점, 끝점
                    .range([0, innerWidth]);
    const x2Scale = scaleLinear()
                    .domain([0, max(props.data, x2Value)]) //시작점, 끝점
                    .range([0, innerWidth-308]);
    return(
        <>
            <pre className={classes["axis-label"]}>The Number of Crime Reports and Arrests in Seoul<br/>2010-2020</pre>
            <svg width={"100%"} height={height}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format(",")} />
                    <AxisLeft yScale={yScale} />
                    <Marks data={props.data} xScale={xScale} x2Scale={x2Scale} yScale={yScale} xValue={xValue} x2Value={x2Value} yValue={yValue} tooltipFormat={format(",")}/>
                </g>
            </svg>
            <Grid container spacing={2} justifyContent="center" >
            <Grid item xs={12} sm={12} className={classes.legendGrid}>
                <Legend className={classes.legend} scale={fillScale} direction="row" labelMargin="0 15px 0 0"/>
            </Grid>
            </Grid>
            </>
    );
};

export default HorizontalGraphBar;