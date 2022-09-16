import type { Theme as MuiTheme } from '@mui/material';

export type TokenSpacingT = {
  small: string;
  default: string;
  large: string;
};

export type TokenCornerRadiusT = {
  default: string;
};

export type TokenLineHeightT = {
  default: string;
};

export type TokenFontSizeT = {
  root: string;
};

export type TokenFontWeightT = {
  bold: string;
  regular: string;
};

export type TokenColorsT = {
  default: string;
  text: string;
};

export type MuiCustomThemeT = MuiTheme & {
  colors: MuiTheme['colors'] & TokenColorsT;
  sizing: MuiTheme['sizing'] & TokenSpacingT;
  cornerRadius: TokenCornerRadiusT;
  lineHeight: TokenLineHeightT;
  fontSize: TokenFontSizeT;
  fontWeight: TokenFontWeightT;
};
