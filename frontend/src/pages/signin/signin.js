import styles from './signin.module.css'
import SignInForm from '../../components/SignInForm/SignInForm'

function SignIn() {
    return <section className={styles.background} >
        <SignInForm />
    </section>
}

export default SignIn