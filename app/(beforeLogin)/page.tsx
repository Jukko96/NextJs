import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        main
      </main>
      <div>
        <Link href={"/signin"}>로그인</Link>
      </div>
      <footer className={styles.footer}>
      footer
      </footer>
    </div>
  );
}
