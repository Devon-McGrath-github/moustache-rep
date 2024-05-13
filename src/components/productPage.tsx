import { Product, Selection } from '@/routes/root';
import { Button } from './ui/button';
import { useState } from 'react';
import { Input } from './ui/input';

export default function ProductPage({
  title,
  price,
  description,
  image,
  sizes,
  addToCart,
}: Product & { addToCart: (product: Selection) => void }) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex ">
      <img src={image} alt={'Image of ' + title} />
      <div>
        <h1>{title}</h1>
        <h3>{price}</h3>
        <p>{description}</p>

        <div className="flex gap-2">
          {/* add validation to input - prevent submission of values outside min/max */}
          <Input
            type="number"
            value={quantity}
            min="1"
            max="99"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-12"
          />

          {sizes.map((e) => (
            <Button
              variant="outline"
              key={e}
              onClick={() => setSize(e)}
              className={e === size ? 'border-black' : ''}
            >
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
              quantity,
            });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
