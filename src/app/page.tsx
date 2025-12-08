import styles from "./page.module.css";
import { getTop10Products, getProducts } from "../services/api";
import RacketList from "../components/RacketList";
import ButtonLink from "../components/ButtonLink";

export default async function Home() {
  const top10Response = await getTop10Products();
  const topRackets = top10Response.isError ? [] : (top10Response.data || []);

  const generalResponse = await getProducts({ limit: 10 });
  const generalRackets = generalResponse.isError ? [] : (generalResponse.data || []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Добро пожаловать в магазин ракеток!</h1>
        <p>Лучшие ракетки для профессионалов и любителей.</p>
      </section>

      <RacketList title="Популярные ракетки" rackets={topRackets} />

      <RacketList title="Общий список" rackets={generalRackets} />
      
      <ButtonLink href="/rackets">
        Перейти ко всем ракеткам
      </ButtonLink>
    </div>
  );
}
