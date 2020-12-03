export const clampedInterpolation = (animatedValue, value) =>
  animatedValue.value.interpolate({
    extrapolate: "clamp",
    range: animatedValue.range,
    output: [value.start, value.mid, value.end]
  });

export default clampedInterpolation;
