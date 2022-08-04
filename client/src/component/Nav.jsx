import { NavLink } from 'react-router-dom'
import Search from './Search'
import './style/nav.css'

export default function Nav (props) {
    return (
        <nav className='nav'>
            <div className='container-title'>
            <NavLink to={'/'} className={'link'}>
                <h1 className='title-nav'>HENRY COUNTRIES</h1>
            </NavLink>
            </div>
            <Search/>
            <div className='container-list'>
                <ul className='container-list-ul'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/activity">Activity</a></li>
                    <li><a href="/aboutme">AboutMe</a></li>
                </ul>
            </div>
        </nav>
    )
}