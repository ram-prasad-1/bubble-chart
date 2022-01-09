import { useEffect, useState } from 'react';
import Bubble from '@/components/homePage/Bubble';

const Chart = ({ dataPoints }) => {
  return (
    <svg width={'1200'} height={'1200'} viewBox={`0 -600 1200 1200`}>
      {dataPoints.map((item, index) => {
        return <Bubble key={index} item={item} />;
      })}
    </svg>
  );
};

export default Chart;
