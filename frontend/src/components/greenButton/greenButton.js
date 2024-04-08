import styles from './greenButton.module.css'

function GreenButton(props) {
    return <input type='button' value={props.value} className={styles.button}
    onClick={props.action} />
}

export default GreenButton