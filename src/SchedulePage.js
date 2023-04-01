import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SchedulePage.css';
import Header from './Header';

function SchedulePage() {
  const [matches, setMatches] = useState([]);
  const authToken = "YOUR_AUTH_TOKEN";

  useEffect(() => {
    axios.get('http://localhost:4000/matches')
    .then(response => { 
      setMatches(response.data)
    })
    .catch(error => {
      console.log(error);
    });
}, []);


  return (
    <div>
       <Header />

    <div className="table">
      <h1>League Schedule</h1>
      <table>
        <thead>
          <tr id="tr">
            <th>Date/Time</th>
            <th>Stadium</th>
            <th>Home Team</th>
            <th ></th>
            <th>Away Team</th>

          </tr>
        </thead>
        <tbody>

          {matches.map(match => (
            <tr key={match.matchDate}>
              <td>{new Date(match.matchDate).toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
  timeZone: 'UTC'
}).replaceAll('/', '.').replaceAll(',','\n')}</td>
              <td>{match.stadium}</td>
              <td><div className="container"><span>{match.homeTeam}</span><img className="images" src={`../Images/${match.homeTeam}.jpg`} alt="Home" width="20" height="20"/></div></td>
              <td>{match.homeTeamScore} : {match.awayTeamScore}</td>
              <td><div className="container"><img className="images" src={`../Images/${match.awayTeam}.jpg`} alt="Home" width="20" height="20"/><span>{match.awayTeam}</span></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default SchedulePage;
