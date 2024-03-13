function getElementWidth(content, padding, border) {
  const contentNumber = Number.parseFloat(content);
  const paddingNumber = Number.parseFloat(padding);
  const borderNumber = Number.parseFloat(border);
  const total = contentNumber + paddingNumber * 2 + borderNumber * 2;
  console.log(total);
}
getElementWidth('50px', '8px', '4px');
getElementWidth('60px', '12px', '8.5px');
getElementWidth('200px', '0px', '0px');
