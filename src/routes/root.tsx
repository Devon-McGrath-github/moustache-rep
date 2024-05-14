import { useEffect, useState } from 'react';
import classicTeeImage from '@/assets/classic-tee.jpg';
import Cart from '@/components/Cart';
import ProductPage from '@/components/ProductPage';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageURL: string;
  sizeOptions: { id: number; label: string }[];
}

export interface Selection {
  id: string;
  title: string;
  price: number;
  description: string;
  imageURL: string;
  size: string;
  quantity: number;
}

export default function Root() {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState([] as Selection[]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  function addToCart(product: Selection) {
    setCart([...cart, product]);
  }

  return (
    <>
      <nav className="w-screen max-w-full py-6">
        <div className="flex bg-[#F6F6F7] pr-4 md:pr-0 justify-end md:justify-center ">
          <div className="flex justify-end gap-2 items-center md:w-10/12 md:max-w-6xl">
            <Cart cart={cart} />
          </div>
        </div>
      </nav>

      <div className="card">
        {product !== null && (
          <ProductPage key={product.id} {...product} addToCart={addToCart} />
        )}
      </div>
    </>
  );
}
