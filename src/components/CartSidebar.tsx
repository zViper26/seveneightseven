import React, { useState } from 'react';
import { X, Trash2, ShoppingCart } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }>;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full md:w-96 glass-nav z-50 transform transition-transform duration-300 ease-in-out rounded-l-3xl">
        <div className="h-full flex flex-col text-white p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <ShoppingCart size={24} />
              <h2 className="text-xl font-semibold">Your Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-white/70">
              <ShoppingCart size={48} />
              <p className="mt-4 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white/5 rounded-2xl p-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-white/70">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="px-2 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-auto p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6">
                <div className="flex justify-between mb-6">
                  <span className="text-white/70">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-white/20 hover:bg-white/30 py-4 rounded-2xl font-medium transition-colors"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        total={total}
      />
    </>
  );
};

export default CartSidebar;