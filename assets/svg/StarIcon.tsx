import {Polygon, Svg} from 'react-native-svg';
import * as React from 'react';
import {IconProps} from '../../types/asset-types';

const Icon = ({width = 20, height = 20, color}: IconProps) => {
  return (
    <Svg viewBox="0 0 512 512" width={width} height={height}>
      <Polygon
        fill={color}
        stroke={color}
        stroke-width="37.6152"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        points="  259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08   29.274,197.007 188.165,173.919 "
      />
    </Svg>
  );
};

export default Icon;
