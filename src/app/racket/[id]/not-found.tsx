import Link from "next/link";

export default function RacketNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h2>Ракетка не найдена</h2>
      <p>К сожалению, запрашиваемая ракетка не существует или была удалена.</p>
      <Link href="/rackets" style={{ color: "blue", textDecoration: "underline" }}>
        Вернуться в каталог
      </Link>
    </div>
  );
}

