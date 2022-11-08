import {StyleSheet, View} from 'react-native';
import React from 'react';
import {OutlineButton} from '../Button';
import {
  CloseIcon,
  HeartIcon,
  LightningIcon,
  RefreshIcon,
  StarIcon,
  TinderIcon,
} from '../../assets/svg';
import {colors} from '../../values/colors';
import Card from './Card';

const AnimatedCard = () => {
  return (
    <View>
      <Card />
      <View style={styles.buttonsContainer}>
        <OutlineButton
          Icon={TinderIcon}
          color={colors.purple}
          size="l"
          onPress={() => null}
        />
        <OutlineButton
          Icon={StarIcon}
          color={colors.blue}
          size="s"
          onPress={() => null}
        />
        <OutlineButton
          Icon={HeartIcon}
          color={colors.green}
          size="l"
          onPress={() => null}
        />
        <OutlineButton
          Icon={RefreshIcon}
          color={colors.white}
          size="l"
          onPress={() => null}
        />
        <OutlineButton
          Icon={LightningIcon}
          color={colors.purple}
          size="s"
          onPress={() => null}
        />
        <OutlineButton
          Icon={CloseIcon}
          color={colors.purple}
          iconWidth={36}
          iconHeight={36}
          size="m"
          onPress={() => null}
        />
      </View>
    </View>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
