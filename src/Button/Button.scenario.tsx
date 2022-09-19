import * as React from 'react';
import { Button } from './index';
import { Button as MuiButton, Typography, useTheme } from "@mui/material";
import { muiStyled } from '../mui-style-utils';
import type { MuiCustomThemeT } from "../types";

const RowContainer = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: theme.sizing.large
}));

const ColumnContainer = muiStyled('div')(({ theme }) => ({
  alignItems: 'center',
  rowGap: theme.sizing.small,
  flexDirection: 'column',
  display: 'flex'
}));

const Scenario = (): JSX.Element => {
  const theme = useTheme<MuiCustomThemeT>();
  return (
    <RowContainer>
      <ColumnContainer>
        <Typography sx={{
          color: theme.colors.text
        }}>Base</Typography>
        <MuiButton>Button</MuiButton>
      </ColumnContainer>
      <ColumnContainer>
        <Typography sx={{
          color: theme.colors.text
        }}>Custom</Typography>
        <Button>Button</Button>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Scenario;
