import {createStyled} from '@mui/system';
import type {
    MuiCustomThemeT,
    TokenSpacingT,
    TokenLineHeightT,
    TokenColorsT,
    TokenCornerRadiusT,
    TokenFontSizeT,
    TokenFontWeightT
} from './types';
import {tokens} from './style-dictionary-dist';

export const muiStyled = createStyled<MuiCustomThemeT>();

const reduceTokens = <T>(tokens: Record<string, string>): T => {
    return {
        ...(Object.entries(tokens).reduce(
            (acc, [k, v]) => ({
                ...acc,
                [k]: v
            }),
            {}
        ) as T)
    };
};

export const getTokensBase = (): Pick<MuiCustomThemeT,
    'cornerRadius' | 'lineHeight' | 'fontWeight' | 'fontSize'> & { sizing: TokenSpacingT } => {
    return {
        cornerRadius: reduceTokens<TokenCornerRadiusT>(tokens['corner-radius']),
        sizing: reduceTokens<TokenSpacingT>(tokens.spacing),
        lineHeight: reduceTokens<TokenLineHeightT>(tokens['line-height']),
        fontWeight: reduceTokens<TokenFontWeightT>(tokens['font-weight']),
        fontSize: reduceTokens<TokenFontSizeT>(tokens['font-weight']),
    };
};

export const getLightColors = (): TokenColorsT => {
    return reduceTokens<TokenColorsT>(tokens.color.light);
};
export const getDarkColors = (): TokenColorsT => {
    return reduceTokens<TokenColorsT>(tokens.color.dark);
};
