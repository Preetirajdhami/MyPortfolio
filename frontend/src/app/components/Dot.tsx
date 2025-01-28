import React from 'react';

const Dot = ({ size, color }: { size: number; color: string }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
      }}
    ></div>
  );
};

type DotPatternProps = {
  className?: string;
  containerWidth?: number; 
  containerHeight?: number; 
  dotSize?: number; 
  dotColor?: string; 
  gap?: number; 
};

const DotPattern: React.FC<DotPatternProps> = ({
  className = '',
  containerWidth = 200, 
  containerHeight = 200, 
  dotSize = 5,
  dotColor = '#7091E6',
  gap = 5,
}) => {
 
  const numRows = Math.floor(containerHeight / (dotSize + gap));
  const numCols = Math.floor(containerWidth / (dotSize + gap));

  const dots = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      dots.push(<Dot key={`${row}-${col}`} size={dotSize} color={dotColor} />);
    }
  }

  return (
    <div
      className={`dot-pattern ${className}`}
      style={{
        width: `${containerWidth}px`, 
        height: `${containerHeight}px`, 
        display: 'grid',
        gridTemplateRows: `repeat(${numRows}, auto)`,
        gridTemplateColumns: `repeat(${numCols}, auto)`,
        gap: `${gap}px`,
        position: 'absolute', 
      }}
    >
      {dots}
    </div>
  );
};

export default DotPattern;
