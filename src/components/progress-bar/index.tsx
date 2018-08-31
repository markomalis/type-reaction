import * as React from 'react'
import { SFC } from 'react'

import './index.css'

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: SFC<ProgressBarProps> = (props: ProgressBarProps) => (
  <div className="progress-bar">
    <div className="progress-bar__indicator" style={{ transform: `translateX(${-100 + props.progress}%)` }} />
  </div>
)