
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './component/Nav'
/* __________________________________________________________________________ */
function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Nav/>
      </Route>
      <Route exact path='/home'>
        <div>Search</div>
      </Route>
      <Route path='/detailCountry'>
        <div>DetailCountry</div>
      </Route>
    </div>
  );
}

export default App;
