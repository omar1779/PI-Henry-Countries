
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './component/Nav'
import Home from './component/home';
import Welcome from './component/welcome';


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
        <Route path='/detailCountry'>
            <Nav/>
        </Route>
        <Route path='/activity'>
            <Nav/>
        </Route>
        <Route path='/aboutme'>
            <Nav/>
        </Route>
        </div>
    );
}

export default App;
