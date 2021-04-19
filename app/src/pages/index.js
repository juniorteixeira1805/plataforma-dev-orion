import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardProfile from '../components/CardProfile'

// Comentário só pra fazer um novo commit
export default function Home( ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Orion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*
        <CardProfile 
          name={org.name}
          avatar={org.avatar_url}
          bio={org.bio}
          url={org.html_url} />
        */}
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
