import {G, Path, Svg} from 'react-native-svg';
import * as React from 'react';
import {IconProps} from '../../types/asset-types';

const Icon = ({
  width = 20,
  height = 20,
  color,
}: Pick<IconProps, 'width' | 'height' | 'color'>) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G
        stroke={color}
        stroke-width="5"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round">
        <Path d="M6 18L18 6M6 6l12 12" />
      </G>
    </Svg>
  );
};

export default Icon;
