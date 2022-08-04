
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './component/Nav'
import Home from './component/home';
import Welcome from './component/welcome';
import CountryDetail from './component/CountryDetail';
import CreateActivity from './component/CreateActivity';
/* __________________________________________________________________________ */
function App() {
    return (
        <div className="App" >
        <Route exact path='/'>
            <Welcome/>
        </Route>
        <Route exact path='/home'>
            <Nav/>
            <Home/>
        </Route>
        <Route exact path="/home/:id"component={Nav} />
        <Route exact path="/home/:id"component={CountryDetail} />
        <Route path='/activity'>
            <Nav/>
            <CreateActivity/>
        </Route>
        <Route path='/aboutme'>
            <Nav/>
        </Route>
        </div>
    );
}

export default App;
