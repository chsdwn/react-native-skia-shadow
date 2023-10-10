import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Canvas, Color, RoundedRect, Shadow } from '@shopify/react-native-skia';

import { useShadowDimensions } from './hooks';

export type SkiaShadowProps = {
  blur: number;
  dx: number;
  dy: number;
  color?: Color;
  borderRadius?: number;
  children: React.ReactNode;
};
export const SkiaShadow = (props: SkiaShadowProps) => {
  const { blur, dx, dy, borderRadius = 0, color = 'black', children } = props;

  const { top, bottom, left, right } = useShadowDimensions({ blur, dx, dy });

  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const canvasStyle = useMemo(() => {
    return StyleSheet.flatten([
      styles.canvas,
      {
        height: shadowHeight + top + bottom,
        width: shadowWidth + left + right,
        top: -top,
        left: -left,
      },
    ]);
  }, [top, bottom, left, right, shadowHeight, shadowWidth]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;
    setShadowHeight(height);
    setShadowWidth(width);
  };

  return (
    <View onLayout={handleLayout}>
      <Canvas style={canvasStyle}>
        <RoundedRect
          x={left}
          y={top}
          height={shadowHeight}
          width={shadowWidth}
          r={borderRadius}
          color={color}
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
  },
});
