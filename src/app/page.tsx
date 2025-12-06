import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "../services/api";

export default async function Home() {
  const response = await getProducts({ limit: 100 });
  const allRackets = response.isError ? [] : (response.data || []);
  
  const topRackets = allRackets.filter((r) => r.top10).slice(0, 10);
  const generalRackets = allRackets.slice(0, 10);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Добро пожаловать в магазин ракеток!</h1>
        <p>Лучшие ракетки для профессионалов и любителей.</p>
      </section>

      <section className={styles.featured}>
        <h2>Популярные ракетки</h2>
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
      </section>

      <section className={styles.featured}>
        <h2>Все ракетки</h2>
        <div className="card-grid">
          {generalRackets.map((racket) => (
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
      </section>
    </div>
  );
}
