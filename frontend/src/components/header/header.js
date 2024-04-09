import styles from './header.module.css'
import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import store from '../../store/redux'
import { resetState } from '../../store/UserSlice'
import { useSelector } from "react-redux"

function Header() {
    const userToken = store.getState().user.userToken
    const userName = useSelector(state => state.user.userName)

    if (userToken){

        return <header className={styles.header}>
            <Link to='/'>
            <img src={logo} className={styles.logo} alt="le logo"></img>
            </Link>
            <nav className={styles.nav}>
                <Link to='/user' className={styles.link}>
                    <FontAwesomeIcon icon={faCircleUser} className='icon' />{userName}
                </Link>
                <Link className={styles.link} onClick={resetState()} >
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Sign Out
                </Link>
            </nav>
        </header>} else {
            return <header className={styles.header}>
            <Link to='/'>
            <img src={logo} className={styles.logo} alt="le logo"></img>
            </Link>
            <Link to='/signin' className={styles.link}>
                <FontAwesomeIcon icon={faCircleUser} className='icon' />Sign In
            </Link>            
        </header>
        }
}

export default Header