

export const getSpanLength = (text) => {
  const el = document.querySelector('#dummy');
  el.innerText = text;
  const compStyles = window.getComputedStyle(el);
  return Math.floor(+compStyles.getPropertyValue('width').replace('px', ''));
};

