"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Главная
          </Link>
          <Link
            href="/rackets"
            className={pathname === "/rackets" ? styles.active : ""}
          >
            Все ракетки
          </Link>
          <Link
            href="/top-10"
            className={pathname === "/top-10" ? styles.active : ""}
          >
            Топ 10
          </Link>
        </nav>
      </div>
    </header>
  );
}
