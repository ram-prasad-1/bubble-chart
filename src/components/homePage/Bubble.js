import { useEffect, useState } from 'react';
import { getSpanLength } from '@/utils/dom-utils';

const Bubble = ({ item, onMouseEnter,  onMouseLeave}) => {
  const [textLength, setTextLength] = useState(null);

  useEffect(() => {
    if (getSpanLength(item.title) > 2 * item.radius) {
      setTextLength(2 * item.radius - 10);
    }
  }, [item]);

  const textProps = {
    ...(textLength && {
      fontSize: '10px',
      textLength: textLength,
      lengthAdjust:"spacingAndGlyphs"}),
    ...(!textLength && {
      fontSize: '14px'
    })
  }

  return (
    <>
      <g onMouseEnter={() => onMouseEnter(item)}
         onMouseLeave={() => onMouseLeave(item)}>

        <circle cx={item.x} cy={item.y} r={item.radius} fill={item.color} />
        <text
          x={item.x}
          y={item.y + 4}
          textAnchor="middle"
          fill="white"
          {...textProps}
        >
          {item.title}
        </text>
      </g>
    </>
  );
};

export default Bubble;
