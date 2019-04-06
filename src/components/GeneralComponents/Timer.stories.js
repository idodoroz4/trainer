import React from 'react';
import { storiesOf } from '@storybook/react';
import Timer from './Timer';

storiesOf('Timer', module)
  .add('00:00', () => (
    <Timer minutes={0} seconds={0}/>
  ))
  .add('40:10', () => (
    <Timer minutes={40} seconds={10}/>
  ))
  .add('06:07', () => (
    <Timer minutes={6} seconds={7}/>
  ))
  .add('45:53', () => (
    <Timer minutes={45} seconds={53}/>
  ));