import styles from "./page.module.css";
import { getTop10Products } from "../../services/api";
import RacketList from "../../components/RacketList";

export default async function Top10Page() {
  const response = await getTop10Products();
  const topRackets = response.isError ? [] : (response.data || []);

  return (
    <div className={styles.page}>
      <RacketList title="Топ 10 ракеток" rackets={topRackets} />
    </div>
  );
}
