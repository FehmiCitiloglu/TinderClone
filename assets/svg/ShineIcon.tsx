import {Path, Svg} from 'react-native-svg';
import * as React from 'react';

import {IconProps} from '../../types/asset-types';

const Icon = ({width = 20, height = 20, color}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 32 32">
      <Path
        fill={color}
        d="M29.51068,15.41064C19.78412,13.544,18.456,12.21582,16.58929,2.48926a.60015.60015,0,0,0-1.17871,0C13.54437,12.21582,12.21625,13.544,2.4892,15.41064a.60016.60016,0,0,0,0,1.17872c9.72705,1.86669,11.05517,3.19482,12.92138,12.92138a.60027.60027,0,0,0,1.17871,0c1.8667-9.72656,3.19483-11.05469,12.92139-12.92138a.60016.60016,0,0,0,0-1.17872Z"
      />
    </Svg>
  );
};

export default Icon;
