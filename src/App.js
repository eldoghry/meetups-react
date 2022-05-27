import { Route, Switch } from "react-router-dom";
import AllMeetups from "./components/pages/AllMeetups";
import Favorites from "./components/pages/Favorites";
import NewMeetup from "./components/pages/NewMeetup";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
