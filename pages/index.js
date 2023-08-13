import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import land1 from '@/src/images/land1.png'
import houses from '@/src/images/houses.svg'
import moon from '@/src/images/moon.svg'

export default function Home() {
  function CloudAnimation() {
    while(true) {
      
    }
  }

  return (
    <>
      <Head>
        <title>NikDimerVisitCard</title>
        <meta name="description" content="Визитная карточка Frontend-разработчика Никитина Дмитрия" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.HeroMain}>
          <Image className={styles.HeroBackgroundMoon} src={moon}/>
          <div className={styles.HeroBackgroundGround}>
              <Image className={styles.HeroBackgroundLand1} src={land1}/>
              <div className={styles.HeroBackgroundRight}>
                <Image className={styles.HeroBackgroundHouses} src={houses}/>
                <div className={styles.HeroBackgroundLand2}/>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
