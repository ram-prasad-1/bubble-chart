import { useState } from 'react';
import Bubble from '@/components/homePage/Bubble';
import { CHART_HEIGHT, CHART_OUTER_SPACING, CHART_WIDTH, MAX_RADIUS, MIN_RADIUS, PADDING } from '@/constants/constants';
import Tooltip from '@/components/homePage/Tooltip';
import AxisDecorations from '@/components/homePage/AxisDecorations';

const vb_height = CHART_HEIGHT + CHART_OUTER_SPACING * 2;
const vb_width = CHART_WIDTH + CHART_OUTER_SPACING * 2
const vb_x = -CHART_OUTER_SPACING;
const vb_y = -vb_height + CHART_OUTER_SPACING;



const Chart = ({ dataPoints, extremes }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <svg width={vb_width} height={vb_height} viewBox={`${vb_x} ${vb_y} ${vb_width} ${vb_height}`}>
      <path d={`M 0 0 h ${CHART_WIDTH} M 0 0 v -${CHART_HEIGHT}`} fill='none' stroke="#9ca3af" strokeWidth="2" />
      <svg x={CHART_WIDTH - 4} y={-11.4} width="24" height="24" stroke="#9ca3af" strokeWidth="1" fill='none' fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      <svg x={-11.4} y={-CHART_HEIGHT - 24} width="24" height="24" stroke="#9ca3af" strokeWidth="1" fill='none' fillRule="evenodd" clipRule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
      <AxisDecorations dataPoints={dataPoints} />

      {dataPoints.map((item, index) => {
        return (
          <Bubble
            key={index}
            item={item}
            onMouseEnter={(i) => setActiveItem(i)}
            onMouseLeave={() => setActiveItem(null)}
          />
        );
      })}

      {
        activeItem && <Tooltip activeItem={activeItem} />
      }
    </svg>
  );
};

export default Chart;
