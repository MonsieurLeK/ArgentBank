import styles from './userPage.module.css'
import AccountCheck from '../../components/accountCheck/accountCheck'
import store from '../../store/redux'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUserName } from '../../store/UserSlice'


function UserPage() {

    const userToken = store.getState().user.userToken
    const userName = store.getState().user.userName
    const userFirstName = store.getState().user.userFirstName
    const userLastName = store.getState().user.userLastName
    const [newUserName, setNewUserName] = ""
    const dispatch = useDispatch()
    const changeUserNameEvent = (e) => {
        e.preventDefault()
        dispatch(changeUserName(userToken, newUserName))
    }
  

    if (userToken) {
    return <section className={styles.background} >
        <h2 className={styles.title}>Welcome back<br/>{userFirstName} {userLastName} !</h2>
        <div>
            <form className={styles.userNameForm} onSubmit={changeUserNameEvent}>
                <div className={styles.inputWrapper}>
                    <label for="userName">User name:</label>
                    <input id="userName" value={newUserName} placeholder={userName}
                    onChange={setNewUserName}/>
                </div>
                <div className={styles.inputWrapperReadonly}>
                    <label for="firstName">First name:</label>
                    <input id="firstName" readOnly="readonly" placeholder={userFirstName} />
                </div>
                <div className={styles.inputWrapperReadonly}>
                    <label for="lastName">Last name:</label>
                    <input id="lastName" readOnly="readonly" placeholder={userLastName} />
                </div>
                <input type='submit' value="Edit Name" className={styles.button} />
            </form>
        </div>
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
       return <Navigate replace to="/signin" />
    }
}

export default UserPage