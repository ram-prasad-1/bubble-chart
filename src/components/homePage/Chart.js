import { useState } from 'react';
import Bubble from '@/components/homePage/Bubble';
import { CHART_HEIGHT, CHART_OUTER_SPACING, CHART_WIDTH, MAX_RADIUS, MIN_RADIUS, PADDING } from '@/constants/constants';


const rect_height = 36;
const rect_width = 104;
const rect_dy = 4;


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
        activeItem && (
          <svg x={Math.floor(activeItem.x - rect_width/2)}
                y={Math.floor(activeItem.y - activeItem.radius  - rect_dy - rect_height)}
               width={rect_width} height={rect_height + rect_dy}>
            <rect x="0" y="0" width={rect_width} height={rect_height} rx="6" ry="6" />
            <text x={rect_dy * 2} y={rect_dy*6} className="text-sm fill-white">{`${activeItem.salary}, ${activeItem.headcount}, ${activeItem.compratio}`}</text>
          </svg>
        )
      }
    </svg>
  );
};

export default Chart;
