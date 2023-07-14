import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface CloseIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({width = 24, height = 24, color = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Rect width={24} height={24} transform="rotate(180 12 12)" opacity="0" />
      <Path
        d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
        fill={color}
      />
    </Svg>
  );
};

export default CloseIcon;
