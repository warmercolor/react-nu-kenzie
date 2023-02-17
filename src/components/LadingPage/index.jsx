import logo from '../../assets/logoNu-white.svg'
import svg from '../../assets/illustration.svg'
import './style.scss'
import React from 'react'
import {Link} from 'react-router-dom'

function LadingPage(){
    return (
        <main className='main'>
            <div className='mainContent'>
                <figure>
                    <img src={logo} alt='logo' />
                </figure>
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <Link to='/Home'>
                <button>Iniciar</button>
                </Link>
            </div>
            <img
            className='mainImage'
            src={svg}
            alt='' />
        </main>
    )
}

export default LadingPage