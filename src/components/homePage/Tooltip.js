import { useEffect, useState } from 'react';
import { getSpanLength } from '@/utils/dom-utils';

const rect_height = 36;
const rect_width = 104;
const rect_dy = 4;

const Tooltip = ({ activeItem }) => {
  const { salary, headcount, compratio, x, y, radius } = activeItem;

  return (
    <svg
      x={Math.floor(x - rect_width / 2)}
      y={Math.floor(y - radius - rect_dy - rect_height)}
      width={rect_width}
      height={rect_height + rect_dy}
    >
      <rect x="0" y="0" width={rect_width} height={rect_height} rx="6" ry="6" />
      <text
        x={rect_dy * 2}
        y={rect_dy * 6}
        className="text-sm fill-white"
      >{`${salary}, ${headcount}, ${compratio}`}</text>
      <text
        x={rect_dy * 2}
        y={rect_dy * 6}
        className="text-sm fill-white"
      >{`${salary}, ${headcount}, ${compratio}`}</text>
    </svg>
  );
};

export default Tooltip;
