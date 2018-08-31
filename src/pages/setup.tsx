import * as React from 'react';
import { SFC } from 'react';

import { SetupForm } from '../components/setup-form';
import { ProgressBar } from '../components/progress-bar';

interface GamePageProps {
  value: string;
}

export const GamePage: SFC<GamePageProps> = (props) => (
  <React.Fragment>
    <SetupForm />
  </React.Fragment>
)