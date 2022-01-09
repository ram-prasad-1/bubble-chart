

export const getSpanLength = (text) => {
  const el = document.querySelector('#dummy');
  el.innerText = text;
  const compStyles = window.getComputedStyle(el);
  console.log(111, text, +compStyles.getPropertyValue('width').replace('px', ''));
  return Math.floor(+compStyles.getPropertyValue('width').replace('px', ''));
};

