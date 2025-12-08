import Link from "next/link";
import Image from "next/image";
import styles from "./RacketList.module.css";
import { IRacket } from "../services/api";

interface RacketListProps {
  title: string;
  rackets: IRacket[];
}

export default function RacketList({ title, rackets }: RacketListProps) {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <div className="card-grid">
        {rackets.map((racket) => (
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
  );
}

