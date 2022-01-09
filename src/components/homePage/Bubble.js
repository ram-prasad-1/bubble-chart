import { useEffect, useState } from 'react';
import { getSpanLength } from '@/utils/dom-utils';

const Bubble = ({ item }) => {
  const [fontSize, setFontSize] = useState('14px');

  useEffect(() => {
    if (getSpanLength(item.title) > 2 * item.radius) {
      setFontSize('8px')
    }
  }, [item]);

  return (
    <>
      <g>
        <circle cx={item.x} cy={item.y} r={item.radius} fill={item.color} />
        <text
          x={item.x}
          y={item.y + 4}
          textAnchor="middle"
          fill="white"
          fontSize={fontSize}
        >
          {item.title}
        </text>
      </g>
    </>
  );
};

export default Bubble;
