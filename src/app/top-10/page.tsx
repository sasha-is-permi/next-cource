import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "../../services/api";

export default async function Top10Page() {
  // Fetching 100 to ensure we get all Top 10 items. 
  // Ideally API supports filtering.
  const response = await getProducts({ limit: 100 });
  const allRackets = response.isError ? [] : (response.data || []);
  const topRackets = allRackets.filter((r) => r.top10).slice(0, 10);

  return (
    <div className={styles.page}>
      <h1>Топ 10 ракеток</h1>
      <div className="card-grid">
        {topRackets.map((racket) => (
          <Link href={`/racket/${racket.id}`} key={racket.id} className={styles.card}>
            <div className={styles.imageWrapper}>
               <Image
                  src={racket.imageUrl}
                  alt={racket.name}
                  fill
                  className={styles.image}
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

