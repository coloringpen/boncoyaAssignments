import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boncoya assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to App</h1>

        <p className={styles.description}>Get started</p>

        <div className={styles.grid}>
          <Link href="/LogIn" className={styles.card}>
            <h2>Login Page &rarr;</h2>
          </Link>

          <Link href="/RegisterPage" className={styles.card}>
            <h2>Register Page &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
