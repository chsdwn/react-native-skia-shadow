import { renderHook } from '@testing-library/react-hooks';

import { useShadowDimensions } from '../useShadowDimensions';

const calculateTop = (blur: number, dy: number) => blur * 3 + -dy;
const calculateBottom = (blur: number, dy: number) => blur * 3 + dy;
const calculateLeft = (blur: number, dx: number) => blur * 3 + -dx;
const calculateRight = (blur: number, dx: number) => blur * 3 + dx;

describe('[useShadowDimensions]', () => {
  it("should calculate 'top' value depending on 'blur' and negative 'dy'", () => {
    let blur = 0;
    let dy = 0;

    const { result, rerender } = renderHook(() =>
      useShadowDimensions({ blur, dx: 0, dy }),
    );

    expect(result.current.top).toBe(calculateTop(blur, dy));

    blur = 10;
    dy = 0;
    rerender();
    expect(result.current.top).toBe(calculateTop(blur, dy));

    blur = 10;
    dy = -10;
    rerender();
    expect(result.current.top).toBe(calculateTop(blur, dy));

    blur = 0;
    dy = -10;
    rerender();
    expect(result.current.top).toBe(calculateTop(blur, dy));
  });

  it("should calculate 'bottom' value depending on 'blur' and positive 'dy'", () => {
    let blur = 0;
    let dy = 0;

    const { result, rerender } = renderHook(() =>
      useShadowDimensions({ blur, dx: 0, dy }),
    );

    expect(result.current.bottom).toBe(calculateBottom(blur, dy));

    blur = 10;
    dy = 0;
    rerender();
    expect(result.current.bottom).toBe(calculateBottom(blur, dy));

    blur = 10;
    dy = 10;
    rerender();
    expect(result.current.bottom).toBe(calculateBottom(blur, dy));

    blur = 0;
    dy = 10;
    rerender();
    expect(result.current.bottom).toBe(calculateBottom(blur, dy));
  });

  it("should calculate 'left' value depending on 'blur' and positive 'dx'", () => {
    let blur = 0;
    let dx = 0;

    const { result, rerender } = renderHook(() =>
      useShadowDimensions({ blur, dx, dy: 0 }),
    );

    expect(result.current.left).toBe(calculateLeft(blur, dx));

    blur = 10;
    dx = 0;
    rerender();
    expect(result.current.left).toBe(calculateLeft(blur, dx));

    blur = 10;
    dx = -10;
    rerender();
    expect(result.current.left).toBe(calculateLeft(blur, dx));

    blur = 0;
    dx = -10;
    rerender();
    expect(result.current.left).toBe(calculateLeft(blur, dx));
  });

  it("should calculate 'right' value depending on 'blur' and negative 'dx'", () => {
    let blur = 0;
    let dx = 0;

    const { result, rerender } = renderHook(() =>
      useShadowDimensions({ blur, dx, dy: 0 }),
    );

    expect(result.current.right).toBe(calculateRight(blur, dx));

    blur = 10;
    dx = 0;
    rerender();
    expect(result.current.right).toBe(calculateRight(blur, dx));

    blur = 10;
    dx = 10;
    rerender();
    expect(result.current.right).toBe(calculateRight(blur, dx));

    blur = 0;
    dx = 10;
    rerender();
    expect(result.current.right).toBe(calculateRight(blur, dx));
  });
});
