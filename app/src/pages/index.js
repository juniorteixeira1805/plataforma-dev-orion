import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// Comentário só pra fazer um novo commit
export default function Home( {org} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Orion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title>Hello</Title>
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