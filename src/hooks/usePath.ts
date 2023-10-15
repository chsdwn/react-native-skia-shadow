import { useMemo } from 'react';
import { Skia } from '@shopify/react-native-skia';

type Args = {
  top: number;
  left: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  shadowWidth: number;
  shadowHeight: number;
};
export const usePath = (args: Args) => {
  const { top, left, shadowHeight, shadowWidth } = args;
  const { borderTopLeftRadius, borderTopRightRadius } = args;
  const { borderBottomLeftRadius, borderBottomRightRadius } = args;

  return useMemo(() => {
    const width = shadowWidth / 2;
    const height = shadowHeight / 2;
    const brTopRight = Math.min(borderTopRightRadius, width);
    const brTopLeft = Math.min(borderTopLeftRadius, height);
    const brBottomLeft = Math.min(borderBottomLeftRadius, width);
    const brBottomRight = Math.min(borderBottomRightRadius, height);

    const path = Skia.Path.Make();
    path.moveTo(brTopLeft + left, top);
    path.arcToTangent(
      shadowWidth + left,
      top,
      shadowWidth + left,
      top + brTopRight,
      brTopRight,
    );
    path.arcToTangent(
      shadowWidth + left,
      shadowHeight + top,
      shadowWidth + left - brBottomRight,
      shadowHeight + top,
      brBottomRight,
    );
    path.arcToTangent(
      left,
      top + shadowHeight,
      left,
      top + shadowHeight - brBottomLeft,
      brBottomLeft,
    );
    path.arcToTangent(left, top, left + brTopLeft, top, brTopLeft);
    path.close();

    return path;
  }, [
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    shadowHeight,
    shadowWidth,
    left,
    top,
  ]);
};
