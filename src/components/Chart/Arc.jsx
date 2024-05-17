import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';



export default function ArcDesign(props) {
  return (
    <Gauge
      {...props.settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#5598db',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: '#3EC9D6',
        },
      })}
    />
  );
}
