import React from 'react';
import { Home, Wine, Beer, GlassWater, DollarSign, ShoppingCart } from 'lucide-react';

interface SidebarProps {
  cartCount: number;
  onFilterClick: (filter: string) => void;
  activeFilter: string;
  onCartClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cartCount, onFilterClick, activeFilter, onCartClick }) => {
  const leftFilters = [
    { icon: Home, label: 'Home', filter: 'home', description: 'Welcome to Club 787' },
    { icon: Wine, label: 'Wine Selection', filter: 'wine', description: 'Premium wines from around the world' },
    { icon: Beer, label: 'Craft Beer', filter: 'beer', description: 'Unique craft and draft beers' },
  ];

  const rightFilters = [
    { icon: GlassWater, label: 'Premium Spirits', filter: 'spirits', description: 'Top-shelf spirits and liquors' },
    { icon: DollarSign, label: 'Budget Friendly', filter: 'price', description: 'Great drinks under $50' },
    { icon: ShoppingCart, label: 'Cart', filter: 'cart', description: 'View your selected items', isCart: true },
  ];

  const renderIcon = (item: typeof leftFilters[0] & { isCart?: boolean }) => (
    <button
      key={item.filter}
      onClick={() => item.isCart ? onCartClick() : onFilterClick(item.filter)}
      className={`p-2 flex items-center gap-3 text-white/70 hover:text-white transition-all group relative
        ${activeFilter === item.filter ? 'text-white' : ''}`}
    >
      <item.icon size={24} />
      <span className="text-sm font-medium">{item.label}</span>
      {item.isCart && cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </button>
  );

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl py-6 px-6 border border-white/20">
      <div className="flex flex-col items-start gap-6">
        {/* Left side icons */}
        <div className="flex flex-col gap-4 w-full">
          {leftFilters.map(renderIcon)}
        </div>

        {/* Club name */}
        <div className="text-white font-bold text-xl py-2 self-center">787</div>

        {/* Right side icons */}
        <div className="flex flex-col gap-4 w-full">
          {rightFilters.map(renderIcon)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;