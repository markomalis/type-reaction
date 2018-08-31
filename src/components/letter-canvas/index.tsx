import * as React from 'react';
import { SFC } from 'react';

import './index.css'

interface LetterCanvasProps {
  value: string;
}

export const LetterCanvas: SFC<LetterCanvasProps> = ({ value }) => (
  <div className="letter-canvas">
    <div className="letter-canvas__content">
      <span className="letter-canvas__value">{ value }</span>
    </div>
  </div>
)