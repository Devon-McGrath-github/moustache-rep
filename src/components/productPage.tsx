import { Product, Selection } from '@/routes/root';
import { Button } from './ui/button';
import { useState } from 'react';

export default function ProductPage({
  title,
  price,
  description,
  image,
  sizes,
  addToCart,
}: Product & { addToCart: (product: Selection) => void }) {
  const [count, setCount] = useState(0);

  // PLACEHOLDER for adding size to cart
  const size = 'S';

  return (
    <div className="flex ">
      <img src={image} alt={'Image of ' + title} />
      <div>
        <h1>{title}</h1>
        <h3>{price}</h3>
        <p>{description}</p>

        <div className="flex gap-2">
          {sizes.map((e) => (
            <Button variant="outline" key={e}>
              {e}
            </Button>
          ))}
        </div>

        <Button
          onClick={() => {
            setCount(count + 1);
            addToCart({
              id: count.toString(),
              title,
              price,
              description,
              image,
              size,
            });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
