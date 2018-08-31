import * as React from 'react';
import { SFC } from 'react';
import { Link } from 'react-router-dom';

interface AppNavItem {
  path: string;
  title: string;
}

interface AppNavProps {
  items: AppNavItem[];
}

export const AppNav: SFC<AppNavProps> = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/scores">Scores</Link>
      </li>
    </ul>
  </nav>
)