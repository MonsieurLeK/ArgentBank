import styles from './home.module.css'
import bannerImage from '../../assets/img/bank-tree.jpeg'

function Home() {
    return   <section className={styles.banner}>
        <img src={bannerImage} className={styles.bannerImg} alt='une plante poussant dans l argent'></img>
        <article className={styles.bannerContent}>
            <h3>No fees. <br/>No minimum deposit. <br/>High interest rates.</h3>
            <p>Open a savings account with Argent Bank today!</p>
        </article>
    </section>
}

export default Home