import type {
  TokenColorsT,
  TokenSpacingT,
  TokenCornerRadiusT,
  TokenLineHeightT,
  TokenFontSizeT,
  TokenFontWeightT,
} from './types';

declare module '@mui/material/styles' {
  interface Theme {
    colors: TokenColorsT;
    sizing: TokenSpacingT;
    cornerRadius: TokenCornerRadiusT;
    lineHeight: TokenLineHeightT;
    fontSize: TokenFontSizeT;
    fontWeight: TokenFontWeightT;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: TokenColorsT;
    sizing?: TokenSpacingT;
    cornerRadius?: TokenCornerRadiusT;
    lineHeight?: TokenLineHeightT;
    fontSize?: TokenFontSizeT;
    fontWeight: TokenFontWeightT;
  }
}
