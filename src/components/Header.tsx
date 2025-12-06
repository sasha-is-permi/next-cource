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
            Ракетки
          </Link>
        </nav>
      </div>
    </header>
  );
}

