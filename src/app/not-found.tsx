import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h2>404 - Страница не найдена</h2>
      <p>К сожалению, мы не смогли найти запрашиваемую страницу.</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Вернуться на главную
      </Link>
    </div>
  );
}

