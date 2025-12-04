import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { rackets } from "../../../materials/mock";

export default function RacketsPage() {
  return (
    <div className={styles.page}>
      <h1>Все ракетки</h1>
      <div className="card-grid">
        {rackets.map((racket) => (
          <Link href={`/racket/${racket.id}`} key={racket.id} className={styles.card}>
            <div className={styles.imageWrapper}>
               <Image
                  src={racket.imageUrl}
                  alt={racket.name}
                  fill
                  style={{ objectFit: "contain" }}
               />
            </div>
            <h3>{racket.name}</h3>
            <p className={styles.price}>{racket.price} $</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

