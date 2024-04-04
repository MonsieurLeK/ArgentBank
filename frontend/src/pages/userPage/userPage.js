import styles from './userPage.module.css'
import GreenButton from '../../components/greenButton/greenButton'
import AccountCheck from '../../components/accountCheck/accountCheck'
import store from '../../store/redux'
import { Navigate } from 'react-router-dom'

function UserPage() {

    const userToken = store.getState().user.userToken
    const userFirstName = store.getState().user.userFirstName
    const userLastName = store.getState().user.userLastName

    if (userToken) {
    return <section className={styles.background} >
        <h2 className={styles.title}>Welcome back<br/>{userFirstName} {userLastName} !</h2>
        <GreenButton value='Edit Name' />
        <div className={styles.accountContainer} >
        <AccountCheck accountType='Checking' 
        priceValue='2,082.79'
        availableOrCurrent='Available' />
        <AccountCheck accountType='Savings' 
        priceValue='10,928.42'
        availableOrCurrent='Available' />
        <AccountCheck accountType='Credit Card' 
        priceValue='184.30'
        availableOrCurrent='Current' />
        </div>
    </section>} else {
       return <Navigate replace to="/" />
    }
}

export default UserPage