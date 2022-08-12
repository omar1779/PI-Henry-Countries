
import './App.css';
import { Route } from 'react-router-dom';
import NavScrollExample from './component/Nav.jsx'
import Home from './component/home';
import Welcome from './component/welcome';
import CountryDetail from './component/CountryDetail';
import CreateActivity from './component/CreateActivity';
import AboutMe from './component/AboutMe';

/* __________________________________________________________________________ */
function App() {
    return (
        <div className="App" >
        <Route exact path='/'>
            <Welcome/>
        </Route>
        <Route exact path='/home'>
            <NavScrollExample/>
            <Home/>
        </Route>
        <Route exact path="/home/:id"component={NavScrollExample} />
        <Route exact path="/home/:id"component={CountryDetail} />
        <Route path='/activity'>
            <NavScrollExample/>
            <CreateActivity/>
        </Route>
        <Route path='/aboutme'>
            <NavScrollExample/>
            <AboutMe/>
        </Route>
        </div>
    );
}

export default App;
