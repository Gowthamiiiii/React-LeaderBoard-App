import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-left">
      <img src="../Images/logo.svg" alt="Home" width="90" height="90"/>
      </div>
      <nav className="header-right">
        <ul>
          <li><NavLink exact to="/schedule"><div className="container"><img src="../Images/schedule.png" alt="Home" width="20" height="20"/><span class="align">Schedule</span></div></NavLink></li>
          <li> <NavLink exact to="/leaderBoard"><div className="container"><img src="../Images/leaderboard.png" alt="Home" width="20" height="20"/><span class="align">Leaderboard</span></div></NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
