import classes from "./AxisLeft.module.css";

export const AxisLeft = ({yScale}) => {
    return (
        yScale.domain().map(tickValue => (
            
            <g className={classes.tick} key={tickValue}>
           <text
            key={tickValue}
            style={{ textAnchor: 'end', fontSize:"35px" }}
            x={-3}
            dy=".32em"
            y={yScale(tickValue) + yScale.bandwidth() / 2}
            >
            {tickValue}
            </text>
           </g>
      ))
    );
}