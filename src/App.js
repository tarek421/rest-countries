import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './components/Countries/Countries';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Countries}></Route>
        <Route exact path='/' component={Countries}></Route>
        <Route path="/country/:CountryName" component={CountryDetail}></Route>
        <Route path='*' component={NoMatch}></Route>
      </Switch>
    </Router>
  );
}

export default App;
