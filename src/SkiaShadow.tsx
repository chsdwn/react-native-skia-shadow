import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';

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

  const blurRadius = blur * 3;

  const top = useMemo(() => {
    return blurRadius + (dy < 0 ? -dy : 0);
  }, [blurRadius, dy]);
  const bottom = useMemo(() => {
    return blurRadius + (dy > 0 ? dy : 0);
  }, [blurRadius, dy]);
  const left = useMemo(() => {
    return blurRadius + (dx < 0 ? -dx : 0);
  }, [blurRadius, dx]);
  const right = useMemo(() => {
    return blurRadius + (dx > 0 ? dx : 0);
  }, [blurRadius, dx]);

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
          x={right}
          y={top}
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
  },
});
