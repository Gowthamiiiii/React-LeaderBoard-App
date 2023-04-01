
import style from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SchedulePage from "./SchedulePage";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/" component={SchedulePage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/leaderBoard" component={LeaderBoard} />
        <Route component={NotFound} />
      </ Switch>
    </Router>
  );
}

export default App;
