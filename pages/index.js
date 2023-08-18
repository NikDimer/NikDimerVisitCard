import Head from 'next/head'
import Hero from '@/src/components/Hero/Hero'
import MyPath from '@/src/components/MyPath/MyPath'

import styles from '@/styles/Home.module.css'
import classnames from 'classnames'

export default function Home() {
  return (
    <>
      <Head>
        <title>NikDimerVisitCard</title>
        <meta name="description" content="Визитная карточка Frontend-разработчика Никитина Дмитрия" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <MyPath />
      </main>
    </>
  )
}
