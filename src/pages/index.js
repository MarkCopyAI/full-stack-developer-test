import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Copy Take home project</title>
        <meta name="description" content="Take home project for Mark Copy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://markcopy.ai" target="_blank" rel="noreferrer">
            Mark Copy
          </a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>You can replace everything here</code>
        </p>

        <div className={styles.grid}>
          And also delete all existing styles if you feel like it
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src="/mark-logo-min.svg"
            alt="Mark Copy Logo"
            width={72}
            height={16}
          />
          Mark Copy
        </span>
      </footer>
    </div>
  );
};

export default Home;
