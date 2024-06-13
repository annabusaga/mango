function getElementWidth(content, padding, border) {
  const one = Number.parseFloat(content);
  const two = Number.parseFloat(padding);
  const three = Number.parseFloat(border);
  // Number.parseFloat(padding * 2) +
  // Number.parseFloat(border * 2);
  const result = one + two * 2 + three * 2;
  return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
