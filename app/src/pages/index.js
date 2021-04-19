import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardProfile from '../components/CardProfile'

import Image from 'next/image'

// Comentário só pra fazer um novo commit
export default function Home( ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Orion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/assets/logo1.png"
          alt="Logo da dev orion"
          width={250}
          height={250}
        />
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

export const getStaticProps = async () => {

  const response = await fetch('https://api.github.com/users/juniorteixeira1805')
  const data = await response.json()

  return {
    props: {
      org: data,
    },
    
    revalidate: 20,
  }

}
