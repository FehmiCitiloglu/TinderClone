import {colors} from '../values/colors';

export type ColorsKeys = keyof typeof colors;

export type ColorType = typeof colors[ColorsKeys] | string;
