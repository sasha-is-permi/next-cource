import styles from "./page.module.css";
import { getProducts } from "../../services/api";
import RacketList from "../../components/RacketList";

export default async function RacketsPage() {
  const response = await getProducts({ limit: 20 });
  const rackets = response.isError ? [] : (response.data || []);

  return (
    <div className={styles.page}>
      <RacketList title="Все ракетки" rackets={rackets} />
    </div>
  );
}
