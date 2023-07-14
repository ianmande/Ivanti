import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const SearchIcon = ({width = 24, height = 24, color = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Rect width={24} height={24} opacity="0" />
      <Path
        d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
