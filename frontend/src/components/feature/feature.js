import styles from './feature.module.css'

function Feature(props) {
    return <article className={styles.feature}>
    <div className={styles.circle}>
        <img src={props.icon} alt={props.imgAlt} />
    </div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </article>
}

export default Feature