import styles from './home.module.css'
import bannerImage from '../../assets/img/bank-tree.jpeg'
import Feature from '../../components/feature/feature'
import chatIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-security.png'

function Home() {
    return   <>
    <section className={styles.banner}>
        <img src={bannerImage} className={styles.bannerImg} alt='une plante poussant dans l argent'></img>
        <article className={styles.bannerContent}>
            <h3>No fees. <br/>No minimum deposit. <br/>High interest rates.</h3>
            <p>Open a savings account with Argent Bank today!</p>
        </article>
    </section>
    <section className={styles.featuresContainer}>
        <Feature icon={chatIcon} 
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        imgAlt="chat bubbles" />
        <Feature icon={moneyIcon}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
        imgAlt="Money bills" />
        <Feature icon={securityIcon}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
        imgAlt="safety shield" />
    </section>
    </>
}

export default Home