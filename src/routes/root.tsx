import { useState } from 'react';
import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <Link to={`page2`}>
          <Button>Page2</Button>
        </Link>
      </div>

      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}
