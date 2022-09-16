import React from 'react';
import ButtonDefault from './Button.scenario';

export default {
  parameters: {
    options: {
      showPanel: false
    }
  },
  title: 'Design System/Button'
};
export const Default = (): JSX.Element => <ButtonDefault />;
