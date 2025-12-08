import styles from "./page.module.css";
import { getProducts } from "../../services/api";
import RacketList from "../../components/RacketList";
import ButtonLink from "../../components/ButtonLink";

export default async function RacketsPage() {
  const response = await getProducts({ limit: 20 });
  const rackets = response.isError ? [] : (response.data || []);

  return (
    <div className={styles.page}>
      <RacketList title="Все ракетки" rackets={rackets} />
      
      <ButtonLink href="/">
        Перейти к популярным ракеткам
      </ButtonLink>
    </div>
  );
}
