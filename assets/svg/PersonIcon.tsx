import {G, Path, Svg} from 'react-native-svg';
import * as React from 'react';
import {IconProps} from '../../types/asset-types';

const Icon = ({
  width = 20,
  height = 20,
  color,
}: Pick<IconProps, 'width' | 'height' | 'color'>) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <G>
        <Path
          fill={color}
          d="M256,256c70.5,0,128-57.5,128-128S326.5,0,256,0S128,57.5,128,128C128.9,198.5,185.5,256,256,256z M256,320
        C170.7,320,0.9,362.7,0.9,448v64h510.1v-64C511.1,362.7,341.3,320,256,320z"
        />
      </G>
    </Svg>
  );
};

export default Icon;
