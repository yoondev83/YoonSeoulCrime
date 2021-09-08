import classes from "./AxisBottom.module.css";

export const AxisBottom = props => {
    return (props.xScale.ticks().map(tickValue => (
        <g className={classes.tick} key={tickValue} transform={`translate(${props.xScale(tickValue)},0)`}>
          <line y2={props.innerHeight} />
          <text
            style={{ textAnchor: 'middle', fontSize:"35px" } }
            dy="0.6em"
            y={props.innerHeight + 10.5}
          >
            {props.tickFormat(tickValue)}
          </text>
        </g>
      ))
    );
}