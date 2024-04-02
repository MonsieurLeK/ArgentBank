import styles from './accountCheck.module.css'

function AccountCheck(props) {
    
    return <article className={styles.container}>
        <div className={styles.textContainer}>
            <h3 className={styles.text}>Argent Bank {props.accountType}</h3>
            <span className={styles.price} >${props.priceValue}</span>
            <h3 className={styles.text}>{props.availableOrCurrent} Balance</h3>
        </div>
        <input type='button' value='View Transactions' className={styles.button}/>
    </article>
}

export default AccountCheck