import MainContainer from '@/components/common/MainContainer';
import mockData from '@/utils/data.json';
import { getColors } from '@/utils/utils';
import Chart from '@/components/homePage/Chart';
import { CHART_HEIGHT, CHART_WIDTH, MAX_RADIUS, MIN_RADIUS, PADDING } from '@/constants/constants';

const HomePage = ({ dataPoints }) => {
  return (
    <MainContainer>
      <Chart dataPoints={dataPoints} />
    </MainContainer>
  );
};
export default HomePage;

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

  // add colors
  const colors = getColors(dataPoints.length);
  for (let i = 0; i < dataPoints.length; i++) {
    dataPoints[i].color = colors[i];
  }

  // sort by compratio so that smaller circles gets drawn on top.
  dataPoints.sort((a, b) => b.compratio - a.compratio);



  return {
    props: {
      dataPoints,
    },
  };
};
