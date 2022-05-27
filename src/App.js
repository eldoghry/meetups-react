import { Route, Switch } from "react-router-dom";
import AllMeetups from "./components/pages/AllMeetups";
import Favorites from "./components/pages/Favorites";
import NewMeetup from "./components/pages/NewMeetup";

import MainNav from "./components/layouts/MainNav";

function App() {
  return (
    <div>
      <MainNav></MainNav>

      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
