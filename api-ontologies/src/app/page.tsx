import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Api OrkneyTech Ontologies&nbsp;
        </p>
        <div>
          <a
            href="../../public/logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="OrkneyTech Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
       <h1>Ontologies Services</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Ontologies <span>-&gt;</span>
          </h2>
          <p>Find an ontology in XML or JSON.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn how to integrate your app with our services</p>
        </a>

        <a
          href="https://ontologies.orkneytech.com.br"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Terms <span>-&gt;</span>
          </h2>
          <p>Read our terms of use and usage policy</p>
        </a>

        <a
          href="https://ontologies.orkneytech.com.br"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            Contact us.
          </p>
        </a>
      </div>
    </main>
  );
}
