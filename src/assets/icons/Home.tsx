import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export function Home() {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <G clipPath="url(#clip0_11049_6074)">
        <Path
          clipRule="evenodd"
          d="M12.294 27v-8.47h5.647V27H25V15.706h4.235L15.118 3 1 15.706h4.235V27h7.06z"
          stroke="#9B9B9B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_11049_6074">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
