import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MasonryList} from '../components';
import {getValueByScreenWidth} from '../utils/window-sizes';
import {colors} from '../values/colors';

const ExploreScreen = () => {
  return (
    <>
      <Text>Welcome to explore</Text>
      <Text>My Vibe is...</Text>
      <MasonryList
        ListEmptyComponent={
          <Text>Please refresh the page with swipe down</Text>
        }
        data={[
          {
            uri: require('../assets/images/jessika.jpg'),
            vibe: 'Free tonight',
            footerText: 'Down for something spontaneous',
          },
          {
            uri: require('../assets/images/justyna.jpg'),
            vibe: "Let's be friend",
            footerText: 'Maybe even besties',
          },
          {
            uri: require('../assets/images/nida.jpg'),
            vibe: 'Coffee Date',
            footerText: 'Take me to your favorite cafe',
          },
          {uri: require('../assets/images/polina.jpg'), vibe: 'Bored at work'},
        ]}
        renderItem={function ({
          item,
          i,
        }: {
          item: any;
          i: number;
        }): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
          console.log('item', item);
          console.log('i', i);

          return (
            <View style={styles.item}>
              {/*   <Image
                style={{width: '100%', height: '100%', borderRadius: 5}}
                source={item.uri}
              /> */}
              <ImageBackground style={styles.imageBackground} source={item.uri}>
                <View>
                  <Text style={styles.vibe}>{item.vibe}</Text>
                </View>
                <View>
                  <Text>{item.footerText}</Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'relative',
    alignSelf: 'stretch',
    flex: 1,
    maxWidth: getValueByScreenWidth(50),
    maxHeight: getValueByScreenWidth(50),
    margin: 5,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  vibeContainer: {
    position: 'absolute',
    top: '50%',
    right: '50%',
  },
  vibe: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
