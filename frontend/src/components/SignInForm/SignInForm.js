import styles from './SignInForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../store/UserSlice'
import { useNavigate } from "react-router-dom"
import store from "../../store/redux"

function SignInForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const redirect = () => {
        setTimeout( () => {
        if (store.getState().user.userToken){
            navigate("/")
        } else {
            console.log("gros nul")
        }}, 500)
    }

    const dispatch = useDispatch()
    const signInEvent = (e) => {
        e.preventDefault()
        let userCredentials = {email, password}
        dispatch(signInUser(userCredentials))
        redirect()
    }

    return <article className={styles.formContainer} onSubmit={signInEvent} >
        <FontAwesomeIcon icon={faCircleUser} className='icon' />
        <h2>Sign In</h2>
        <form className={styles.form} >
        <div className={styles.inputWrapper} >
            <label for="username" >Username</label>
            <input type='email' id='username' value={email}
            onChange={(e) => setEmail(e.target.value)} ></input>
        </div>
        <div className={styles.inputWrapper} >
            <label for="password" >Password</label>
            <input type='password' id='password' value={password}
            onChange={(e) => setPassword(e.target.value)} ></input>
        </div>
        <div className={styles.checkboxWrapper} >
            <input type='checkbox' id='rememberMe' ></input>
            <label for="rememberMe" >Remember me</label>
        </div>
        <input type='submit' value="Sign In" className={styles.submitButton} ></input>
        </form>
    </article>
}

export default SignInForm