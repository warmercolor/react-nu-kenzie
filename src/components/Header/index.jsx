import { Link } from 'react-router-dom'
import Button from '../Button'
import logo from '../../assets/logoNu.svg'
import './style.scss'

function Header() {
    return (
        <header className='header'>
        <div className={'headerContent container'}>
            <figure>
            <img src={logo} alt="logo" />
            <figcaption>Nu Kenzie</figcaption>
            </figure>

        <Link to="/"><Button>Inicio</Button></Link>
        </div>
        </header>
    )
}

export default Header