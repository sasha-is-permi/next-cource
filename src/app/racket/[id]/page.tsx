import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { rackets } from "../../../../materials/mock";

// Generate static params for the first 3 rackets
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RacketPage({ params }: PageProps) {
  const { id } = await params;
  const racket = rackets.find((r) => r.id === Number(id));

  if (!racket) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src={racket.imageUrl}
          alt={racket.name}
          fill
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>{racket.name}</h1>
        <p className={styles.price}>{racket.price} $</p>
        <p className={styles.description}>{racket.description}</p>

        <div className={styles.specs}>
          <h3>Характеристики</h3>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Бренд</span>
            <span className={styles.specValue}>{racket.brand.name}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Модель</span>
            <span className={styles.specValue}>{racket.model}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Год</span>
            <span className={styles.specValue}>{racket.year}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Тип</span>
            <span className={styles.specValue}>{racket.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

