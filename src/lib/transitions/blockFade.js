function blockFade(node, { delay = 0, duration = 400 }) {
    const initialBackgroundColor = getComputedStyle(node).backgroundColor;
  
    return {
      delay,
      duration,
      css: (t) => `
        background-color: rgba(${extractRGB(initialBackgroundColor)}, ${t});
        transition-property: background-color;
      `
    };
  }
  
  function extractRGB(color) {
    const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return match.slice(1, 4).join(',');
    }
    return '';
  }
  
  export default blockFade;