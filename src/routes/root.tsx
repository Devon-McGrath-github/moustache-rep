import { useState } from 'react';
import viteLogo from '/vite.svg';
import { createContext } from 'react';
import ProductPage from '@/components/productPage';
import classicTeeImage from '@/assets/classic-tee.jpg';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
}

const classicTee: Product = {
  id: 1,
  title: 'Classic Tee',
  price: 75.0,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum consectetur enim, vitae egestas neque fermentum sit amet. Integer volutpat magna ut vulputate vulputate. Donec mattis purus vel lacinia convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed aliquam nisl. Sed ultrices erat nulla. Phasellus gravida mauris sed magna condimentum viverra sed sit amet odio.',
  image: classicTeeImage,
  sizes: ['S', 'M', 'L'],
};

export default function Root() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div className="card">
        {/* <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button> */}

        <ProductPage key={classicTee.id} {...classicTee} />
      </div>
    </>
  );
}
