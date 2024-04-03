import styles from './header.module.css'
import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import store from '../../store/redux'
import userSlice from '../../store/UserSlice'

function Header() {
    const userToken = store.getState().user.userToken
    const navigate = useNavigate()

    if (userToken){
        const userFirstName = store.getState().user.userFirstName

        return <header className={styles.header}>
            <Link to='/'>
            <img src={logo} className={styles.logo} alt="le logo"></img>
            </Link>
            <nav className={styles.nav}>
                <Link to='/user' className={styles.link}>
                    <FontAwesomeIcon icon={faCircleUser} className='icon' />{userFirstName}
                </Link>
                <Link className={styles.link} onClick={store.dispatch(userSlice.actions.resetState)} >
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