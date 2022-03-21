import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flashcards Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to FlashCard game</h1>

          <div>
            <Link href="/mental-flashcard">Mental</Link>
          </div>
          <div>
            <Link href="/input-flashcard">Input</Link>
          </div>
          <div>
            <Link href="/multiple-choices-answer-flashcard">Multiple</Link>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
