import React from 'react';
import Svg, {Path, Rect, Circle} from 'react-native-svg';

interface ShoppingCartIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({width = 24, height = 24, color = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Rect width={24} height={24} opacity="0" />
      <Path
        d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"
        fill={color}
      />
      <Circle cx="7.5" cy="19.5" r="1.5" fill={color} />
      <Circle cx="17.5" cy="19.5" r="1.5" fill={color} />
    </Svg>
  );
};

export default ShoppingCartIcon;
