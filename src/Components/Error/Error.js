import './Error.css'
import Daruk from './img/Daruk.png'
import Link from './img/link.png'
import Mipha from './img/mipha.png'
import Revali from './img/Revali.png'
import Urbosa from './img/Urbosa.png'
import Zelda from './img/zelda.png'

function ErrorPage() {
    let perso = [Daruk, Link, Mipha, Revali, Urbosa, Zelda]
    let rdm = perso[Math.floor(Math.random() * perso.length)]

    return(
        <div className='errorpage'>
            <div className='carderror'>
                <div className='imgerror'>
                    <img src={rdm} alt="" />
                </div>
                <div>
                    <h1 className='titlerror'>La page n'existe pas</h1>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage