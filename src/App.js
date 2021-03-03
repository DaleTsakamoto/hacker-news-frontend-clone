import { Route, Switch } from "react-router-dom";

import Homepage from './components/Homepage'
import NewStory from './components/NewStory'
import AskStory from './components/AskStory'
import ShowStory from './components/ShowStory'

function App() {
  return (
    <Switch>
        <Route path="/newest">
          <NewStory />
        </Route>
        <Route path="/ask">
          <AskStory />
        </Route>
        <Route path="/show">
          <ShowStory />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
  );
}

export default App;
