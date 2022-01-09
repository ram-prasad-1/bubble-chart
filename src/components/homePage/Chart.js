import { useEffect, useState } from 'react';
import Bubble from '@/components/homePage/Bubble';

const rect_height = 36;
const rect_width = 104;
const rect_dy = 4;

const Chart = ({ dataPoints }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <svg width={'1200'} height={'1200'} viewBox={`-8 -640 1200 1200`}>
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
