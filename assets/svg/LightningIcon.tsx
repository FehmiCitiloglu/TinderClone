import {Path, Svg} from 'react-native-svg';
import * as React from 'react';
import {ColorType} from '../../types/valueTypes';

const Icon = ({
  width = 20,
  height = 20,
  color,
}: {
  width?: number;
  height?: number;
  color: ColorType;
}) => {
  return (
    <Svg
      width={width}
      height={height}
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 347 511.82">
      <Path
        fill={color}
        fill-rule="nonzero"
        d="M129.03 270.69 8.31 259.3c-5.04-.47-8.74-4.95-8.27-9.99.11-1.12.41-2.18.88-3.14L110.71 5.39c1.53-3.37 4.86-5.35 8.34-5.36L269.88 0c5.08 0 9.2 4.12 9.2 9.2 0 2.06-.67 3.95-1.81 5.49l-77.26 125.3 138.81 15.28c5.04.55 8.68 5.09 8.12 10.13a9.097 9.097 0 0 1-2.46 5.31L62.93 508.52c-3.23 3.89-9.01 4.42-12.9 1.18-3.04-2.52-4.03-6.6-2.77-10.12l81.77-228.89z"
      />
    </Svg>
  );
};

export default Icon;
