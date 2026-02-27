import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
        <button onClick={() => setCount(count + 1)}>
        + Increase {count}
        </button>
        <button onClick={() => setCount(count - 1)}>
        - Decrease {count}
        </button>
    </>
  );
}

export default Counter;
