import './style/nav.css'

export default function Nav (props) {
    return (
        <nav className='nav'>
            <div className='container-title'>
                <h1>HENRY COUNTRIES</h1>
            </div>
            <div className='container-list'>
                <ul className='container-list-ul'>
                    <li>Home</li>
                    <li>CreateActivity</li>
                    <li>AboutMe</li>
                </ul>
            </div>
        </nav>
    )
}