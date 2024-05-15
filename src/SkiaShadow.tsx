import React, { useMemo, useState } from 'react';
import { I18nManager, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Canvas, Color, Path, Shadow } from '@shopify/react-native-skia';

import { usePath, useShadowDimensions } from './hooks';

export type SkiaShadowProps = {
  blur: number;
  dx: number;
  dy: number;
  color?: Color;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  children: React.ReactNode;
};

const isRTL = I18nManager.isRTL;

export const SkiaShadow = (props: SkiaShadowProps) => {
  const { blur, dy, borderRadius = 0, color = 'black', children } = props;
  const { borderTopLeftRadius = borderRadius } = props;
  const { borderTopRightRadius = borderRadius } = props;
  const { borderBottomLeftRadius = borderRadius } = props;
  const { borderBottomRightRadius = borderRadius } = props;

  const dx = props.dx * (isRTL ? -1 : 1);

  const [shadowHeight, setShadowHeight] = useState(0);
  const [shadowWidth, setShadowWidth] = useState(0);

  const { top, bottom, left, right } = useShadowDimensions({ blur, dx, dy });
  const path = usePath({
    top,
    left,
    borderTopLeftRadius: isRTL ? borderTopRightRadius : borderTopLeftRadius,
    borderTopRightRadius: isRTL ? borderTopLeftRadius : borderTopRightRadius,
    borderBottomLeftRadius: isRTL
      ? borderBottomRightRadius
      : borderBottomLeftRadius,
    borderBottomRightRadius: isRTL
      ? borderBottomLeftRadius
      : borderBottomRightRadius,
    shadowWidth,
    shadowHeight,
  });

  const canvasStyle = useMemo(() => {
    return StyleSheet.flatten([
      styles.canvas,
      {
        height: shadowHeight + top + bottom,
        width: shadowWidth + left + right,
        top: -top,
        left: isRTL ? -right : -left,
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
        <Path path={path} color={color}>
          <Shadow dx={dx} dy={dy} blur={blur} color={color} shadowOnly />
        </Path>
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
