import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const atachStyleSheetToDom = styles => jss.createStyleSheet(styles).attach();

export const generateClasses = styles => {
  const {classes} = atachStyleSheetToDom(styles);
  return classes;
};
