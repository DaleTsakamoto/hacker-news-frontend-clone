import Homepage from './components/Homepage'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
      <Switch>
        <Route path="/">
            <Homepage/>
        </Route>
      </Switch>
  );
}

export default App;
