import styles from './userPage.module.css'
import AccountCheck from '../../components/accountCheck/accountCheck'
import store from '../../store/redux'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUserName } from '../../store/UserSlice'
import { useState } from 'react'


function UserPage() {

    const userToken = store.getState().user.userToken
    const userName = store.getState().user.userName
    const userFirstName = store.getState().user.userFirstName
    const userLastName = store.getState().user.userLastName
    const [newUserName, setNewUserName] = useState("")
    const [formHidden, setFormHidden] = useState(true)
    const dispatch = useDispatch()
    const changeUserNameEvent = (e) => {
        e.preventDefault()
        dispatch(changeUserName({userToken, newUserName}))
    }
  

    if (userToken) {
    return <section className={styles.background} >
        <h2 className={styles.title}>Welcome back<br/>{userFirstName} {userLastName} !</h2>
        <div>
            <form className={formHidden?`${styles.userNameForm} ${styles.hidden}` : styles.userNameForm} onSubmit={changeUserNameEvent}>
                <div className={styles.inputWrapper}>
                    <label for="userName">User name:</label>
                    <input id="userName" type='text' value={newUserName} placeholder={userName}
                    onChange={(e) => setNewUserName(e.target.value)}/>
                </div>
                <div className={styles.inputWrapperReadonly}>
                    <label for="firstName">First name:</label>
                    <input id="firstName" disabled type='text' readOnly="readonly" placeholder={userFirstName} />
                </div>
                <div className={styles.inputWrapperReadonly}>
                    <label for="lastName">Last name:</label>
                    <input id="lastName" disabled type='text' readOnly="readonly" placeholder={userLastName} />
                </div>
                <div className={styles.buttonContainer} >
                    <input type='submit' value="Save" className={styles.button} />
                    <input type='button' value="Cancel" className={styles.button} onClick={() => setFormHidden(true)} />
                </div>
            </form>
            <input type='button' value="Edit Name" className={formHidden ? styles.button : `${styles.button} ${styles.hidden}`} onClick={() => setFormHidden(false)} />
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