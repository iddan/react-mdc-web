import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import './index.stories.css'

import LinearProgress from '../src/LinearProgress'

storiesOf('Welcome', module).add('to Storybook', () => (
  <div>
    <h1>React Material Components Web</h1>
  </div>
));

storiesOf('LinearProgress', LinearProgress)
  .add('Determinate', () => <LinearProgress progress={0.5} open />)
  .add('Indeterminate', () => <LinearProgress indeterminate open />)
  .add('Reverse', () => <LinearProgress indeterminate open reverse />)
  .add('Buffer', () => <LinearProgress open progress={0.3} buffer={0.5} />)
