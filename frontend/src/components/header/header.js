import styles from './header.module.css'
import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
function Header() {
    return <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="le logo"></img>
        <a href='#' className={styles.link}>
            <FontAwesomeIcon icon={faCircleUser} className='icon' />Sign In
        </a>
        
    </header>
}

export default Header