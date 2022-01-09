import { generateIntermediatePoints, getIndexOfMinMax } from '@/utils/array-utils';


const TOTAL_MARKERS = 4;

const AxisDecorations = ({ dataPoints }) => {
  const [minIndexX, maxIndexX] = getIndexOfMinMax(dataPoints.map(i => i.salary))
  const [minIndexY, maxIndexY] = getIndexOfMinMax(dataPoints.map(i => i.headcount))

  const salaries = generateIntermediatePoints(dataPoints[minIndexX].salary, dataPoints[maxIndexX].salary, TOTAL_MARKERS);
  const xPts = generateIntermediatePoints(dataPoints[minIndexX].x, dataPoints[maxIndexX].x, TOTAL_MARKERS);

  const headCounts = generateIntermediatePoints(dataPoints[minIndexY].headcount, dataPoints[maxIndexY].headcount, TOTAL_MARKERS);
  const yPts = generateIntermediatePoints(dataPoints[minIndexY].y, dataPoints[maxIndexY].y, TOTAL_MARKERS);


  const arr = [];

  for (let i = 0; i < TOTAL_MARKERS; i++) {
    arr.push((
      <>
        <text
          x={xPts[i]}
          y={4}
          textAnchor="middle"
          className="text-sm fill-gray-400"
        >{'|'}</text>

        <text
          x={xPts[i]}
          y={24}
          textAnchor="middle"
          className="text-sm fill-gray-400"
        >{salaries[i]}</text>
      </>
    ))
  }

  return arr;
}

export default AxisDecorations;
