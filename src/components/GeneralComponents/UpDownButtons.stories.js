import React from 'react';
import { storiesOf } from '@storybook/react';
import UpdownButtons from './UpDownButtons';

storiesOf('Up-Down-Buttons', module)
  .add('buttons', () => (
    <UpdownButtons />
  ));