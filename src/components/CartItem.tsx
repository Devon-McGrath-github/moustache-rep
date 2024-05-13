import { Selection } from '@/routes/root';

export default function CartItem({ title, price, image, size }: Selection) {
  return (
    <div className="w-screen sm:w-72 grid grid-cols-[30%_70%] h-24 gap-2">
      <img src={image} alt={'Image of ' + title} className="w-12" />
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        <h3>${price}</h3>
        <p>{size}</p>
      </div>
    </div>
  );
}
