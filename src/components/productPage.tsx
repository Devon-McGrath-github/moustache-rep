import { Product } from '@/routes/root';
import { Button } from './ui/button';

export default function ProductPage({
  title,
  price,
  description,
  image,
  sizes,
}: Product) {
  return (
    <div>
      <img src={image} alt={'Image of ' + title} />
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>{description}</p>
      {sizes.map((e) => (
        <Button>{e}</Button>
      ))}
    </div>
  );
}
