import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import TopNav from './components/TopNav';
import MobileMenu from './components/MobileMenu';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import OrderHistory from './components/OrderHistory';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { Product, CartItem, Filter } from './types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wine',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800',
    category: 'wine',
    alcohol: 13.5,
    description: 'A fine selection from world-renowned vineyards'
  },
  {
    id: '2',
    name: 'Craft Beer',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800',
    category: 'beer',
    alcohol: 5.5,
    description: 'Artisanal brew with unique character'
  },
  {
    id: '3',
    name: 'Single Malt Whiskey',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1582819509237-d6c899f79f34?auto=format&fit=crop&w=800',
    category: 'spirits',
    alcohol: 43,
    description: 'Aged to perfection in oak barrels'
  }
];

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [currentView, setCurrentView] = useState<'products' | 'history'>('products');

  // Initialize scroll animations
  useScrollAnimation();

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const filteredProducts = PRODUCTS.filter(product => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'under50') return product.price < 50;
    return product.category === activeFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="animated-background fixed inset-0 z-0" />
      
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <TopNav 
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onFilterClick={setActiveFilter}
          activeFilter={activeFilter}
          onCartClick={() => setIsCartOpen(true)}
          onViewChange={setCurrentView}
          currentView={currentView}
        />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileMenu 
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onFilterClick={setActiveFilter}
          activeFilter={activeFilter}
          onCartClick={() => setIsCartOpen(true)}
          onViewChange={setCurrentView}
          currentView={currentView}
        />
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {currentView === 'products' ? (
          <div className="p-4 md:p-8 pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 stagger-children">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="scroll-animate fade-up">
                    <ProductCard
                      product={product}
                      onAddToCart={() => addToCart(product)}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <OrderHistory />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;