
import { X, ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const closeCart = () => {
    document.getElementById('cart-drawer')?.classList.toggle('translate-x-full');
  };

  return (
    <div 
      id="cart-drawer" 
      className="fixed right-0 top-0 z-50 h-screen w-full sm:w-96 bg-white shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col"
    >
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Your Basket
        </h2>
        <Button variant="ghost" size="icon" onClick={closeCart}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Your basket is empty</h3>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any treats yet.</p>
          <Button onClick={closeCart} className="bg-chocolate hover:bg-chocolate-light">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">£{(item.price * item.quantity).toFixed(2)}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total</span>
              <span>£{totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-gold hover:bg-gold-dark text-foreground font-bold">
              Checkout
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={clearCart}
            >
              Clear Basket
            </Button>
            <p className="text-xs text-center text-muted-foreground">This is a demonstration site. No real purchases will be processed.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
