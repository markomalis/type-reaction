import * as React from 'react';
import { SFC } from 'react';
import TypeWriter from 'typewriter-effect';

import './index.css'

export const AppHeader: SFC<{}> = () => (
  <header className="app-header">
    <h1 id="app-header--typewriter" className="app-header__heading">
      TypeReaction
    </h1>
  </header>
)