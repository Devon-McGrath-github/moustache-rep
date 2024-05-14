import { Selection } from '@/routes/root';

export default function CartItem({
  title,
  price,
  imageURL,
  size,
  quantity,
}: Selection) {
  return (
    <div className="w-screen sm:w-72 grid grid-cols-[20%_80%] sm:grid-cols-[30%_70%] h-24 gap-2">
      <img src={imageURL} alt={'Image of ' + title} className="w-12" />
      <div className="flex flex-col gap-2">
        <h1>
          <strong>{title}</strong>
        </h1>
        <h3 className="text-[#222222]">
          <strong>
            {quantity} x ${price}
          </strong>
        </h3>
        <p>Size: {size}</p>
      </div>
    </div>
  );
}
