import './Sidebar.css'
import logo from '../../img/logotriforce.png'

export default function Sidebar() {
    return(
        <div className='side'>
            <div className='logotitle'>
                <img src={logo} alt="" />
                <h1>Zeldex</h1>
            </div>
            <nav>
                <div>
                    <span>Equipement</span>
                </div>
                <div>
                    <span>Materials</span>
                </div>
                <div>
                    <span>Monster</span>
                </div>
            </nav>
        </div>
    )
}