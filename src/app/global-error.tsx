'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Глобальная ошибка приложения</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Перезагрузить</button>
        </div>
      </body>
    </html>
  );
}

