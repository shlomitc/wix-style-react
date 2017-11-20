import {pallete} from '../meta';

const getBorderRadius = roundInput => roundInput ? '18px' : '6px';

export const theme = ({roundInput}) => ({
  color: pallete.mainInputText,
  borderColor: pallete.notifications,
  backgroundColor: pallete.white,
  borderRadius: getBorderRadius(roundInput),
  fontSize: '16px',
  padding: '0 12px',
  height: '30px',

  hover: {
    backgroundColor: pallete.dividers
  },

  focus: {
    boxShadow: 'none',
    borderColor: pallete.mainHover
  }
});
