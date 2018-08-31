import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GamePage } from '../pages/game';
import { GamePage as ScoresPage } from '../pages/scores';
import { GamePage as HomePage } from '../pages/setup';

import { AppHeader } from '../components/app-header'
import { AppNav } from '../components/app-nav'

import randomLetterGenerator from '../lib/random-letter'
import GameFactory from '../lib/tr-engine'

const appPaths = [
  { path: "", title: "" },
  { path: "", title: "" }
]

interface Score {
  expected: string
  value: string
  startTime: number
  endTime?: number
}

interface KeypressEvent {
  key: string
  eventTime: number
}

interface GameState {
  randomLetter: string
  gameLength: number
  scores: Score[],
  progress: number
}

export class Base extends React.Component<{}, GameState> {
  constructor(props) {
    super(props)
    this.state = {
      randomLetter: randomLetterGenerator(),
      gameLength: 5,
      scores: [],
      progress: 1
    }

    this.keypressHandler = this.keypressHandler.bind(this)
  }

  componentDidMount() {
    GameFactory(this.keypressHandler).start(null)
  }

  keypressHandler({ key, eventTime }: KeypressEvent) {
    if (this.state.randomLetter === key) {
      this.setState({
        randomLetter: randomLetterGenerator(),
        progress: this.state.progress + 1
      })
    }
  }

  render() {
    const { randomLetter, progress } = this.state

    return (
      <div>
        <AppHeader />
        <AppNav items={ appPaths } />
        <Switch>
          <Route exact path='/'
            render={ (props) => <HomePage { ...props } /> }
          />
          <Route exact path='/play'
            render={ (props) => <GamePage { ...props } randomLetter={ randomLetter } progress={ progress } /> }
          />
          <Route exact path='/scores'
            render={ (props) => <ScoresPage { ...props } /> }
          />
        </Switch>
      </div>
    )
  }
}