import * as React from 'react';
import { Button } from './index';
import {Button as MuiButton, Typography} from '@mui/material';
import { muiStyled } from '../mui-style-utils';

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
  return (
    <RowContainer>
      <ColumnContainer>
        <Typography>Base</Typography>
        <MuiButton>Button</MuiButton>
      </ColumnContainer>
      <ColumnContainer>
        <Typography>Custom</Typography>
        <Button>Button</Button>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Scenario;
