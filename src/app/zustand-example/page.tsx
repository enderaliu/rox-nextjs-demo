'use client';

import { useBearStore } from './store';

export default function ZustandExamplePage() {
  const count = useBearStore((state) => state.count);
  const increase = useBearStore((state) => state.increase);

  return (
    <div>
      <h2>Zustand Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}