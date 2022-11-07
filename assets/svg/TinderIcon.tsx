import {G, Path, Svg} from 'react-native-svg';
import * as React from 'react';

const Icon = ({width = 20, height = 20}: {width?: number; height?: number}) => {
  return (
    <Svg viewBox="0 0 100 100" width={width} height={height}>
      <G id="Layer_1" />
      <G id="Layer_2">
        <G>
          <Path
            fill="#FE466C"
            d="M53.614,2.57c-0.472-0.236-0.992,0.165-0.945,0.661c2.363,14.977-0.985,31.553-19.269,37.616    c-0.142,0-0.236,0-0.331-0.094c-3.211-4.25-4.014-11.571-4.203-14.357c-0.047-0.543-0.661-0.826-1.134-0.567    C-5.791,45.731,7.225,98.055,49.931,97.496c24.487,0,41.323-18.891,41.323-40.214C91.254,29.394,71.348,10.929,53.614,2.57z"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Icon;
