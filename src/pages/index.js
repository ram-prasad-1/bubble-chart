import MainContainer from '@/components/common/MainContainer';
import mockData from '@/utils/data.json';
import { getColors } from '@/utils/color-utils';
import Chart from '@/components/homePage/Chart';
import { CHART_HEIGHT, CHART_WIDTH, MAX_RADIUS, MIN_RADIUS, PADDING } from '@/constants/constants';
import { getMinMax, getTransformedCoordinates1D } from '@/utils/array-utils';

const HomePage = (props) => {
  return (
    <MainContainer>
      <Chart {...props} />
    </MainContainer>
  );
};
export default HomePage;



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
      extremes: {
        minX: xPts[0],
        maxX: xPts[xPts.length - 1],
        minY: yPts[0],
        maxY: yPts[yPts.length - 1],
      }
    },
  };
};
