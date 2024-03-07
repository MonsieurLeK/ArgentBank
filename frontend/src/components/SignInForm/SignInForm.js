import styles from './SignInForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'

function SignInForm() {
    return <article className={styles.formContainer} >
        <FontAwesomeIcon icon={faCircleUser} className='icon' />
        <h2>Sign In</h2>
        <form className={styles.form} >
        <div className={styles.inputWrapper} >
            <label for="username" >Username</label>
            <input type='text' id='username' ></input>
        </div>
        <div className={styles.inputWrapper} >
            <label for="password" >Password</label>
            <input type='password' id='password' ></input>
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