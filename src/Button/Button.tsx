import * as React from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { borderRadius } from 'polished';

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
    ...borderRadius('left', theme.cornerRadius.default),
    ...borderRadius('right', theme.cornerRadius.default),
    backgroundColor: theme.colors.default,
    color: theme.colors.text,
    lineHeight: theme.lineHeight.default,
    fontSize: theme.fontSize.root,
}));

export const Button = (props: ButtonProps) => <StyledButton {...props} />;
