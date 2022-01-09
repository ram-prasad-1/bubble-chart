import { useEffect, useLayoutEffect, useState } from 'react';
import MainContainer from '@/components/_common/MainContainer';
import mockData from '@/utils/data.json';
import { getColors } from '@/utils/utils';
import { getSpanLength } from '@/utils/dom-utils';

const HomePage = (props) => {
  const [dataPoints, setDataPoints] = useState(props.dataPoints|| []);
  useLayoutEffect(() => {
    for (const item of props.dataPoints) {
      if (getSpanLength(item.title) > 2 * item.radius) {
        item.fontSize = '8px';
      }
    }
    setDataPoints([...props.dataPoints]);
  }, [props.dataPoints]);


  return (
    <MainContainer>
      <svg width={'1200'} height={'1200'} viewBox={`0 -600 1200 1200`}>
        {dataPoints.map((item, index) => {
          return (
            <g key={index}>
              <circle cx={item.x} cy={item.y} r={item.radius} fill={item.color} />
              <text
                x={item.x}
                y={item.y + 4}
                textAnchor="middle"
                fill="white"
                fontSize={item.fontSize || '14px'}
              >
                {item.title}
              </text>
            </g>
          );
        })}
      </svg>
    </MainContainer>
  );
};

export default HomePage;

const CHART_WIDTH = 1000;
const CHART_HEIGHT = 600;
const PADDING = 100;

const MIN_RADIUS = 30;
const MAX_RADIUS = 80;

const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const item of arr) {
    min = Math.min(min, item);
    max = Math.max(max, item);
  }
  return [min, max];
};

const getTransformedCoordinates1D = (arr, newLength, newStart) => {
  const [min, max] = getMinMax(arr);
  const scaleFactor = newLength / (max - min);
  const newArr = [];
  for (const [index, xOld] of arr.entries()) {
    newArr[index] = Math.floor((xOld - min) * scaleFactor + newStart);
  }
  return newArr;
};

export const getServerSideProps = async () => {
  const xPts = getTransformedCoordinates1D(
    mockData.map((v) => v.salary),
    CHART_WIDTH - 2 * PADDING,
    PADDING
  );
  const yPts = getTransformedCoordinates1D(
    mockData.map((v) => v.headcount),
    CHART_HEIGHT - 2 * PADDING,
    PADDING
  ).map((v) => -v);

  const radii = getTransformedCoordinates1D(
    mockData.map((v) => v.compratio),
    MAX_RADIUS - MIN_RADIUS,
    MIN_RADIUS
  );

  const dataPoints = [];
  for (let i = 0; i < xPts.length; i++) {
    dataPoints.push({
      ...mockData[i],
      x: xPts[i],
      y: yPts[i],
      radius: radii[i],
    });
  }

  // sort by compratio so that smaller circles gets drawn on top.
  dataPoints.sort((a, b) => b.compratio - a.compratio);

  // add colors
  const colors = getColors(dataPoints.length);
  for (let i = 0; i < dataPoints.length; i++) {
    dataPoints[i].color = colors[i];
  }

  return {
    props: {
      dataPoints,
    },
  };
};
