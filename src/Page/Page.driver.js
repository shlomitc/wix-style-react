export default ({element}) => ({
  exists: () => !!element,
  backgroundImageExists: () => !!element.querySelector('[data-hook="page-background-image"]'),
  gradientClassNameExists: () => !!element.querySelector('[data-hook="page-gradient-class-name"]'),
  tailExists: () => !!element.querySelector('[data-hook="page-tail"]')
});
