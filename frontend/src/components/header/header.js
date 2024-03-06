import styles from './header.module.css'
import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
    return <header className={styles.header}>
        <Link to='/'>
        <img src={logo} className={styles.logo} alt="le logo"></img>
        </Link>
        <Link to='/signin' className={styles.link}>
            <FontAwesomeIcon icon={faCircleUser} className='icon' />Sign In
        </Link>
        
    </header>
}

export default Header