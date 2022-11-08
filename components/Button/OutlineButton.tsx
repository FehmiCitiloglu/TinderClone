import {Pressable, StyleSheet} from 'react-native';
import React, {ElementType} from 'react';
import {ColorType} from '../../types/valueTypes';

interface ButtonProps {
  color: ColorType;
  Icon: ElementType;
  size?: 's' | 'm' | 'l';
  onPress: () => void;
}

const OutlineButton = ({color, Icon, size = 'm', onPress}: ButtonProps) => {
  let width = 40;
  if (size === 'l') {
    width = 60;
  } else if (size === 's') {
    width = 36;
  }

  return (
    <Pressable
      style={[
        {
          width,
          borderRadius: width,
          borderColor: color,
        },
        styles.container,
      ]}
      onPress={onPress}>
      <Icon color={color} />
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
