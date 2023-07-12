import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Person() {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.14 3a5.064 5.064 0 015.071 5.07 5.064 5.064 0 01-5.07 5.07 5.064 5.064 0 01-5.07-5.07A5.064 5.064 0 0115.14 3zm0 24A12.17 12.17 0 015 21.558c.05-3.364 6.76-5.206 10.14-5.206 3.364 0 10.091 1.842 10.142 5.206A12.17 12.17 0 0115.14 27z"
        fill="#DB3022"
      />
    </Svg>
  );
}
