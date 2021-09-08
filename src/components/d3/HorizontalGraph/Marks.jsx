import classes from "./Marks.module.css";

export const Marks = props =>  props.data.map(d => (
    <>
    <rect className={classes.mark}
      key={props.yValue(d)}
      x={0}
      y={props.yScale(props.yValue(d))} //막대기 간격 조정
      width={props.xScale(props.xValue(d))}
      height={props.yScale.bandwidth() -35}
    >

    <title>{props.tooltipFormat(props.xValue(d))}</title>
    </rect>
    <rect className={classes.mark2}
      key={props.yValue(d)}
      x={0}
      y={props.yScale(props.yValue(d)) + 30} //막대기 간격 조정
      width={props.x2Scale(props.x2Value(d))}
      height={props.yScale.bandwidth() -35}
    >

    <title>{props.tooltipFormat(props.x2Value(d))}</title>
    </rect>
    
    </>
  )
  )