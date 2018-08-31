import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Base } from './layouts/base';

render(
  <BrowserRouter>
    <Base />
  </BrowserRouter>
  ,document.getElementById('root')
);