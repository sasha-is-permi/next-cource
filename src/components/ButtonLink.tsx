import Link from "next/link";
import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <div className={styles.container}>
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    </div>
  );
}

