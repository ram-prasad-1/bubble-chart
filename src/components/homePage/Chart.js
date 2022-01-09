import { useState } from 'react';
import Bubble from '@/components/homePage/Bubble';
import { CHART_HEIGHT, CHART_OUTER_SPACING, CHART_WIDTH, MAX_RADIUS, MIN_RADIUS, PADDING } from '@/constants/constants';
import Tooltip from '@/components/homePage/Tooltip';

const vb_height = CHART_HEIGHT + CHART_OUTER_SPACING * 2;
const vb_width = CHART_WIDTH + CHART_OUTER_SPACING * 2
const vb_x = -CHART_OUTER_SPACING;
const vb_y = -vb_height + CHART_OUTER_SPACING;

const Chart = ({ dataPoints }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <svg width={vb_width} height={vb_height} viewBox={`${vb_x} ${vb_y} ${vb_width} ${vb_width}`}>
      <path d={'M 0 0 h 1000 M 0 0 v -800'} fill='none' stroke="#9ca3af" strokeWidth="2" />

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
