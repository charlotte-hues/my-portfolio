export const clampedInterpolation = (animatedValue, value, result = x => x) => {
  if (value instanceof Array) {
    let range = [];

    const increment =
      (animatedValue.range[1] - animatedValue.range[0]) / (value.length - 1);

    for (let i = 0; i <= value.length - 1; i++) {
      range.push(animatedValue.range[0] + i * increment);
    }

    return animatedValue.value
      .interpolate({
        extrapolate: "clamp",
        range: range,
        output: value
      })
      .interpolate(x => result(x));
  }
  return value;
};

export default clampedInterpolation;
