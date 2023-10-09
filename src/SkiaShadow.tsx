import React, { useState } from 'react';
import { Dimensions, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';

const { height, width } = Dimensions.get('window');

type Props = {
  blur: number;
  dx: number;
  dy: number;
  color?: string;
  borderRadius?: number;
  children: React.ReactNode;
};
export const SkiaShadow = (props: Props) => {
  const { blur, dx, dy, borderRadius = 0, color = 'black', children } = props;

  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent;
    setShadowHeight(layout.height);
    setShadowWidth(layout.width);
  };

  return (
    <View onLayout={handleLayout}>
      <Canvas style={styles.canvas}>
        <RoundedRect
          x={width}
          y={height}
          height={shadowHeight}
          width={shadowWidth}
          r={borderRadius}
        >
          <Shadow dx={dx} dy={dy} blur={blur} color={color} />
        </RoundedRect>
      </Canvas>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    height: height * 2,
    width: width * 2,
    top: -height,
    left: -width,
  },
});
