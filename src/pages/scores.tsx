import * as React from 'react';
import { SFC } from 'react';

import { AppHeader } from '../components/app-header';
import { LetterCanvas } from '../components/letter-canvas';
import { ProgressBar } from '../components/progress-bar';

interface GamePageProps {
  value: string;
}

export const GamePage: SFC<GamePageProps> = (props) => (
  <div>
    <LetterCanvas value="f" />
    <ProgressBar progress={ 40 } />
  </div>
)