import styles from './userPage.module.css'
import GreenButton from '../../components/greenButton/greenButton'
import AccountCheck from '../../components/accountCheck/accountCheck'

function UserPage() {

    const userName = 'Tony Jarvis'

    return <section className={styles.background} >
        <h2 className={styles.title}>Welcome back<br/>{userName}!</h2>
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
    </section>
}

export default UserPage