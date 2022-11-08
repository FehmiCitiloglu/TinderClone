import {Dimensions} from 'react-native';

export const getValueByScreenWidth = (percent: number): number => {
  return (Dimensions.get('window').width * percent) / 100;
};

export const getValueByScreenHeight = (percent: number): number => {
  return (Dimensions.get('window').height * percent) / 100;
};
