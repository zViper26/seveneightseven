import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  index: number;
}

const getDescription = (category: string, alcohol: number): string => {
  const descriptions = {
    wine: `A sophisticated ${alcohol}% wine with complex notes`,
    beer: `Craft beer with ${alcohol}% alcohol content`,
    spirits: `Premium spirit at ${alcohol}% ABV`,
  };
  return descriptions[category as keyof typeof descriptions] || 'Premium beverage';
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, index }) => {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => setAmount(prev => Math.min(prev + 1, 99));
  const handleDecrement = () => setAmount(prev => Math.max(prev - 1, 1));

  return (
    <div className="glass-card rounded-[2rem] overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-[1.5rem] scroll-animate scale"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-medium text-lg">{product.name}</h3>
          <span className="text-white/70 text-sm bg-white/10 px-2.5 py-1 rounded-full ml-2">
            {product.alcohol}%
          </span>
        </div>
        <p className="text-white/60 text-sm mb-4 line-clamp-3">
          {getDescription(product.category, product.alcohol)}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-white/90 font-semibold">${product.price}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/10 rounded-2xl h-10">
              <button
                onClick={handleDecrement}
                className="px-2.5 h-full hover:bg-white/10 rounded-2xl transition-colors"
              >
                <Minus size={16} className="text-white/70" />
              </button>
              <span className="px-3 text-white min-w-[2rem] text-center">{amount}</span>
              <button
                onClick={handleIncrement}
                className="px-2.5 h-full hover:bg-white/10 rounded-2xl transition-colors"
              >
                <Plus size={16} className="text-white/70" />
              </button>
            </div>
            <button
              onClick={() => {
                onAddToCart();
                setAmount(1);
              }}
              className="bg-white/10 hover:bg-white/20 text-white h-10 w-10 flex items-center justify-center rounded-2xl transition-all"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;