import React from 'react';
import { Spacing } from '@ds.e/foundation';

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({
  width = Spacing.sm,
  height = Spacing.sm,
  hexCode,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;
  return (
    <div
      className={className}
      style={{
        backgroundColor: hexCode,
        width,
        height,
      }}
    ></div>
  );
};

export default Color;
