import type {
  NativeScrollEvent,
  RefreshControlProps,
  ScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ScrollView, View} from 'react-native';
import type {ReactElement} from 'react';
import React, {memo} from 'react';

interface Props<T> extends ScrollViewProps {
  loading?: boolean;
  refreshing?: RefreshControlProps['refreshing'];
  onRefresh?: RefreshControlProps['onRefresh'];
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  style?: StyleProp<ViewStyle>;
  data: T[];
  renderItem: ({item, i}: {item: T; i: number}) => ReactElement;
  LoadingView?: React.ComponentType<any> | React.ReactElement | null;
  ListHeaderComponent?: React.ReactNode | null;
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
  ListHeaderComponentStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  numColumns?: number;
  keyExtractor?: ((item: T | any, index: number) => string) | undefined;
}

const isCloseToBottom = (
  {layoutMeasurement, contentOffset, contentSize}: NativeScrollEvent,
  onEndReachedThreshold: number,
): boolean => {
  const paddingToBottom = contentSize.height * onEndReachedThreshold;

  return (
    Math.ceil(layoutMeasurement.height + contentOffset.y) >=
    contentSize.height - paddingToBottom
  );
};

function MasonryList<T>(props: Props<T>): ReactElement {
  const {
    data,
    ListHeaderComponent,
    ListEmptyComponent,
    ListFooterComponent,
    ListHeaderComponentStyle,
    containerStyle,

    renderItem,
    onEndReachedThreshold,
    onEndReached,
    loading,
    LoadingView,
    numColumns = 2,

    onScroll,
    removeClippedSubviews = false,
    keyExtractor,
    keyboardShouldPersistTaps = 'handled',
  } = props;

  const {style, ...propsWithoutStyle} = props;

  return (
    <ScrollView
      {...propsWithoutStyle}
      style={[{flex: 1, alignSelf: 'stretch'}, containerStyle]}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      removeClippedSubviews={removeClippedSubviews}
      scrollEventThrottle={16}
      onScroll={e => {
        const nativeEvent: NativeScrollEvent = e.nativeEvent;
        if (isCloseToBottom(nativeEvent, onEndReachedThreshold || 0.0)) {
          onEndReached?.();
        }
        onScroll?.(e);
      }}>
      <>
        <View style={ListHeaderComponentStyle}>{ListHeaderComponent}</View>
        {data.length === 0 && ListEmptyComponent ? (
          React.isValidElement(ListEmptyComponent) ? (
            ListEmptyComponent
          ) : (
            <ListEmptyComponent />
          )
        ) : (
          <View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
              },
              style,
            ]}>
            {Array.from(Array(numColumns), (_, num) => {
              return (
                <View
                  key={`masonry-column-${num}`}
                  style={{
                    flex: 1 / numColumns,
                    flexDirection: 'column',
                  }}>
                  {data
                    .map((el, i) => {
                      if (i % numColumns === num) {
                        return (
                          <View
                            key={
                              keyExtractor?.(el, i) || `masonry-row-${num}-${i}`
                            }>
                            {renderItem({item: el, i})}
                          </View>
                        );
                      }

                      return null;
                    })
                    .filter(e => !!e)}
                </View>
              );
            })}
          </View>
        )}
        {loading && LoadingView}
        {ListFooterComponent}
      </>
    </ScrollView>
  );
}

export default memo(MasonryList);
