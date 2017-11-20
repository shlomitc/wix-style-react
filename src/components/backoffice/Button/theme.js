import {pallete, pxDivide} from '../meta';

const heightMap = {
  small: '30px',
  medium: '36px',
  large: '42px'
};

const paddingMap = {
  small: '0 17px',
  medium: '0 23px',
  large: '0 29px'
};

const fontSizeMap = {
  small: '14px',
  medium: '16px',
  large: '20px'
};

const lineHeightMap = {
  small: '18px',
  medium: '24px',
  large: '24px'
};

const skinToColorMap = {
  standard: pallete.white,
  danger: pallete.white,
  emptyStandard: pallete.main
};

const skinToBackgroundMap = {
  standard: pallete.main,
  danger: pallete.danger,
  emptyStandard: pallete.white
};

const skinToBorderColorMap = {
  standard: pallete.main,
  danger: pallete.danger,
  emptyStandard: pallete.main
};

const skinToHoverColorMap = {
  standard: pallete.white,
  danger: pallete.white,
  emptyStandard: pallete.white
};

const skinToHoverBackgroundMap = {
  standard: pallete.mainHover,
  danger: pallete.dangerHover,
  emptyStandard: pallete.mainHover
};

const skinToHoverBorderColorMap = {
  standard: pallete.mainHover,
  danger: pallete.dangerHover,
  emptyStandard: pallete.mainHover
};

export const theme = ({height, skin}) => ({
  fontSize: fontSizeMap[height],
  lineHeight: lineHeightMap[height],

  height: heightMap[height],
  padding: paddingMap[height],
  borderRadius: pxDivide(heightMap[height], 2),

  color: skinToColorMap[skin],
  backgroundColor: skinToBackgroundMap[skin],
  borderColor: skinToBorderColorMap[skin],

  hover: {
    color: skinToHoverColorMap[skin],
    backgroundColor: skinToHoverBackgroundMap[skin],
    borderColor: skinToHoverBorderColorMap[skin]
  },

  disabled: {
    color: 'black',
    backgroundColor: pallete.disabled,
    borderColor: pallete.disabled
  }
});
