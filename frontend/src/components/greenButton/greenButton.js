import styles from './greenButton.module.css'

function GreenButton(props) {
    return <input type='button' value={props.value} className={styles.button} />
}

export default GreenButton