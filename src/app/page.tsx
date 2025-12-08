import styles from "./page.module.css";
import { getProducts, getTop10Products } from "../services/api";
import RacketList from "../components/RacketList";

export default async function Home() {
  const top10Response = await getTop10Products();
  const topRackets = top10Response.isError ? [] : (top10Response.data || []);

  const response = await getProducts({ limit: 10 });
  const generalRackets = response.isError ? [] : (response.data || []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Добро пожаловать в магазин ракеток!</h1>
        <p>Лучшие ракетки для профессионалов и любителей.</p>
      </section>

      <RacketList title="Популярные ракетки" rackets={topRackets} />
      
      <RacketList title="Все ракетки" rackets={generalRackets} />
    </div>
  );
}
