'use client'; 

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Что-то пошло не так!</h2>
      <p>{error.message}</p>
      <button 
        onClick={() => reset()}
        style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
      >
        Попробовать снова
      </button>
    </div>
  );
}

