import MainContainer from '@/components/_common/MainContainer';
import mockData from '@/utils/data.json';
import { useEffect } from 'react';
import { getColors } from '@/utils/utils';

const HomePage = ({ data, xPts, yPts, colors }) => {
  useEffect(() => {
    console.log(xPts, yPts);
  }, []);
  return (
    <MainContainer>
      <svg width={'1200'} height={'1200'} viewBox={`0 -600 1200 1200`}>
        {data.map((pt, index) => {
          return <circle key={index} cx={xPts[index]} cy={yPts[index]} r="50" fill={colors[index]} />;
        })}
        {/*<path*/}
        {/*  d="M -100 -100 L 200 200 H 10 V 40 H 70 Z"*/}
        {/*  fill="#59fa81"*/}
        {/*  stroke="#d85b49"*/}
        {/*  strokeWidth="3"*/}
        {/*/>*/}
      </svg>
    </MainContainer>
  );
};

export default HomePage;

const CHART_WIDTH = 1000;
const CHART_HEIGHT = 600;
const PADDING = 100;

const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const item of arr) {
    min = Math.min(min, item);
    max = Math.max(max, item);
  }
  return [min, max];
};

const getNewCoordinates = (arr, newLength, newStart) => {
  const [min, max] = getMinMax(arr);
  const scaleFactor = newLength / (max - min);
  const newArr = [];
  for (const [index, xOld] of arr.entries()) {
    newArr[index] = Math.floor((xOld - min) * scaleFactor + newStart);
  }
  return newArr;
};



export const getServerSideProps = async () => {
  const xPts = getNewCoordinates(
    mockData.map((v) => v.salary),
    CHART_WIDTH - 2 * PADDING,
    PADDING
  );
  const yPts = getNewCoordinates(
    mockData.map((v) => v.headcount),
    CHART_HEIGHT - 2 * PADDING,
    PADDING
  ).map((v) => -v);

  const colors = getColors(xPts.length);

  return {
    props: {
      data: mockData,
      xPts,
      yPts,
      colors,
    },
  };
};