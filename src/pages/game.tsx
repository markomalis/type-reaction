import * as React from 'react'
import { SFC } from 'react'

import { LetterCanvas } from '../components/letter-canvas'
import { ProgressBar } from '../components/progress-bar'

interface GamePageProps {
  randomLetter: string
  progress: number
}

export const GamePage: SFC<GamePageProps> = ({ randomLetter, progress }) => (
  <div>
    <LetterCanvas value={ randomLetter } />
    <ProgressBar progress={ progress } />
  </div>
)