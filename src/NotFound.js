import React from 'react';
import Header from './Header';
import './NotFound.css';

function NotFound() {
  return (
    <div>
        <Header />
    <div className="not-found">
      <img src="../Images/404.png" alt="404 Not Found" />
      <h1>Page not found</h1>
    </div>
    </div>
  );
}

export default NotFound;
