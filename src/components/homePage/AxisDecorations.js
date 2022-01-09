import { generateIntermediatePoints, getIndexOfMinMax } from '@/utils/array-utils';


const TOTAL_MARKERS = 4;

const AxisDecorations = ({ dataPoints }) => {
  const [minIndexX, maxIndexX] = getIndexOfMinMax(dataPoints.map(i => i.salary))
  const [minIndexY, maxIndexY] = getIndexOfMinMax(dataPoints.map(i => i.headcount))

  const salaries = generateIntermediatePoints(dataPoints[minIndexX].salary, dataPoints[maxIndexX].salary, TOTAL_MARKERS);
  const xPts = generateIntermediatePoints(dataPoints[minIndexX].x, dataPoints[maxIndexX].x, TOTAL_MARKERS);

  const headCounts = generateIntermediatePoints(dataPoints[minIndexY].headcount, dataPoints[maxIndexY].headcount, TOTAL_MARKERS);
  const yPts = generateIntermediatePoints(dataPoints[minIndexY].y, dataPoints[maxIndexY].y, TOTAL_MARKERS);
  console.log(222, xPts);

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

        <text
          x={0}
          y={yPts[i]}
          textAnchor="middle"
          className="text-sm fill-gray-400"
        >{'—'}</text>

        <text
          x={-24}
          y={yPts[i]}
          textAnchor="middle"
          className="text-sm fill-gray-400"
        >{headCounts[i]}</text>
      </>
    ))
  }

  arr.push((
    <>
      <text
        x={xPts[xPts.length - 1] + 110}
        y={22}
        textAnchor="middle"
        className="text-sm fill-gray-400"
      >{'Salary'}</text>

      <text
        x={0}
        y={0}
        textAnchor="middle"
        transform={`translate(${-24},${yPts[yPts.length - 1] - 110}) rotate(90)`}
        className="text-sm fill-gray-400"
      >{'HeadCount'}</text>
    </>
  ))

  return arr;
}

export default AxisDecorations;
