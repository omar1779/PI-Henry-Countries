import Search from './Search'
import './style/nav.css'

export default function Nav (props) {
    return (
        <nav className='nav'>
            <div className='container-title'>
                <h1>HENRY COUNTRIES</h1>
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