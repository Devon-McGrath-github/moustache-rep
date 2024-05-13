import { useState } from 'react';
// import { createContext } from 'react';
import classicTeeImage from '@/assets/classic-tee.jpg';
import Cart from '@/components/Cart';
import ProductPage from '@/components/ProductPage';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
}

export interface Selection {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  size: string;
}

/* NEED TO FETCH PRODUCT FROM API */
const classicTee: Product = {
  id: '1adfsdf',
  title: 'Classic Tee',
  price: 75,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum consectetur enim, vitae egestas neque fermentum sit amet. Integer volutpat magna ut vulputate vulputate. Donec mattis purus vel lacinia convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed aliquam nisl. Sed ultrices erat nulla. Phasellus gravida mauris sed magna condimentum viverra sed sit amet odio.',
  image: classicTeeImage,
  sizes: ['S', 'M', 'L'],
};

export default function Root() {
  const [cart, setCart] = useState([] as Selection[]);

  function addToCart(product: Selection) {
    setCart([...cart, product]);
  }

  return (
    <>
      <nav className="w-screen max-w-full py-6">
        <div className="flex bg-[#F6F6F7] pr-4 justify-end md:justify-center ">
          <div className="flex justify-end gap-2 items-center md:w-10/12">
            <Cart cart={cart} />
          </div>
        </div>
      </nav>

      <div className="card">
        <ProductPage
          key={classicTee.id}
          {...classicTee}
          addToCart={addToCart}
        />
      </div>
    </>
  );
}
