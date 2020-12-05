const checkElementIsInRange = (element, range) =>
  element.current &&
  element.current.getBoundingClientRect().top >= range[0] &&
  element.current.getBoundingClientRect().top <= range[1];

export default checkElementIsInRange;
