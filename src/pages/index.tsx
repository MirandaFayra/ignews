import Head from 'next/head'
import styles from './home.module.scss'
import { GirlCoding } from '../images/imageComponet/GirlCode'


export default function Home() {
    return(
        <>
            <Head>
                <title> Home | ig.News</title>
            </Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <span> 👋 Hey, welcome</span>
                    <h1>News about the <span>React</span> world.</h1>
                    <p>Get acess to all publications <br/>
                    <span>for $9.90 month</span>
                    </p>
                    <GirlCoding/>
                </section>
            </main>
        </>
    )
}