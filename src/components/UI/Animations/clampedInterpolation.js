export const clampedInterpolation = ({ animatedValue, value }) =>
  animatedValue.value.interpolate({
    extrapolate: "clamp",
    range: animatedValue.range,
    output: [value.end, value.main, value.start]
  });

export default clampedInterpolation;
