
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './component/Nav'
import Home from './component/home';
/* __________________________________________________________________________ */
function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Nav/>
      </Route>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route path='/detailCountry'>
        <div></div>
      </Route>
    </div>
  );
}

export default App;
