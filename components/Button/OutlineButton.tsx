import {Pressable, StyleSheet} from 'react-native';
import React, {ElementType} from 'react';
import {ColorType} from '../../types/value-types';
import {IconProps} from '../../types/asset-types';

type IconElement = ElementType<IconProps>;
interface ButtonProps {
  color: ColorType;
  Icon: IconElement;
  size?: 's' | 'm' | 'l';
  onPress: () => void;
  iconHeight?: IconProps['height'];
  iconWidth?: IconProps['width'];
}

const OutlineButton = ({
  color,
  Icon,
  size = 'm',
  onPress,
  iconWidth,
  iconHeight,
}: ButtonProps) => {
  let width = 40;
  if (size === 'l') {
    width = 60;
  } else if (size === 's') {
    width = 36;
  }

  return (
    <Pressable
      style={({pressed}) => [
        {
          width,
          borderRadius: width,
          borderColor: color,
          opacity: pressed ? 0.5 : 1,
        },
        styles.container,
      ]}
      onPress={onPress}>
      <Icon color={color} width={iconWidth} height={iconHeight} />
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    aspectRatio: 1,
  },
});
