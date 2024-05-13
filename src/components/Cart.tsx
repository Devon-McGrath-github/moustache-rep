import { Selection } from '@/routes/root';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ShoppingCartIcon } from 'lucide-react';
import CartItem from './CartItem';

interface CartProps {
  cart: Selection[];
}

export default function Cart({ cart }: CartProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-1 items-center">
          <p className="hidden md:block">My Cart</p>
          <ShoppingCartIcon className="w-4 h-4 md:hidden" />
          <p>({cart.length})</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {cart.length === 0 && (
          <DropdownMenuItem>
            <p>Your cart is empty</p>
          </DropdownMenuItem>
        )}
        {cart.map((product: Selection) => (
          <>
            <DropdownMenuItem key={product.id}>
              <CartItem {...product} />
            </DropdownMenuItem>
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
