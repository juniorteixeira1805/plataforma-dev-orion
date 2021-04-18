import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Orion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página em construção ...
        </h1>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}Dev Orion || devorion01@gmail.com
      </footer>
    </div>
  )
}
