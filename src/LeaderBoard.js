import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './LeaderBoard.css';

function LeaderBoard() {
  const [matches, setMatches] = useState([]);

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
    <div className="leaderboard-container">
      <h1 className="leader">League Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>MP</th>
            <th>GF</th>
            <th>GA</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>

          {matches.map((match) => (
            <tr key={match.homeTeam}>
              <td className="left-align"><div className="container"><img className="images" src={`../Images/${match.homeTeam}.jpg`} alt="Home" width="20" height="20"/>{match.homeTeam}</div></td>
              <td>{match.matchPlayed ? 1 : 0}</td>
              <td>{match.homeTeamScore}</td>
              <td>{match.awayTeamScore}</td>
              <td className="blue">{match.homeTeamScore > match.awayTeamScore ? 3 : match.homeTeamScore === match.awayTeamScore ? 1 : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default LeaderBoard;
