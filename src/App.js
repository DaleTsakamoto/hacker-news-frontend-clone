import { Route, Switch } from "react-router-dom";

import Homepage from './components/Homepage'
import NewStory from './components/NewStory'

function App() {
  return (
    <Switch>
        <Route path="/newest">
          <NewStory />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
  );
}

export default App;
