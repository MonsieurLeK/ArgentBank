import styles from "./errorPage.module.css"
import Header from "../../components/header/header"

function ErrorPage() {
    return <>
    <Header />
    <h1 className={styles.title} >ERREUR 404</h1>
    </>
}

export default ErrorPage