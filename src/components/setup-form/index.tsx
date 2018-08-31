import * as React from 'react'
import { SFC } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export const SetupForm: SFC<{}> = () => (
  <form className="setup-form">
    <input
      className="setup-form__input"
      type="number"
      placeholder="Number of rounds"
    />
    <Link className="setup-form__play-button" to="/play">Play!</Link>
  </form>
)