import defaultsDeep from 'lodash/defaultsDeep';
import {core} from './theme';

export default theme => {
  theme = defaultsDeep(theme, core);

  return {
    input: {
      color: theme.color,
      background: theme.backgroundColor,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: theme.borderRadius,
      padding: theme.padding,
      fontSize: theme.fontSize,
      height: theme.height,

      '&:hover': {
        ...theme.hover
      },

      '&:focus': {
        ...theme.focus
      }
    }
  };
};
