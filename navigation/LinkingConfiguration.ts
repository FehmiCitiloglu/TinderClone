import {LinkingOptions} from '@react-navigation/native';

import {RootStackParamList} from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile/:userId',
            },
          },
          Explore: {
            screens: {
              ExploreScreen: 'explore',
            },
          },
          Likes: {
            screens: {
              LikesScreen: 'likes',
            },
          },
          Messages: {
            screens: {
              MessagesScreen: 'messages',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
