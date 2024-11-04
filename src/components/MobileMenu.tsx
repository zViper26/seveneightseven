import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Martini, Globe2, History } from 'lucide-react';

interface MobileMenuProps {
  cartCount: number;
  onFilterClick: (filter: string) => void;
  activeFilter: string;
  onCartClick: () => void;
  onViewChange: (view: 'products' | 'history') => void;
  currentView: 'products' | 'history';
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  cartCount, 
  onFilterClick, 
  activeFilter, 
  onCartClick,
  onViewChange,
  currentView
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');

  const filters = [
    { label: 'Todos', filter: 'all' },
    { label: 'Tequila', filter: 'tequila' },
    { label: 'Licor', filter: 'licor' },
    { label: 'Gin', filter: 'gin' },
    { label: 'Cognac', filter: 'cognac' },
    { label: 'Cerveza', filter: 'cerveza' },
    { label: 'Vodka', filter: 'vodka' },
    { label: 'Whiskey', filter: 'whiskey' },
    { label: 'Champaña', filter: 'champana' },
    { label: 'Rum', filter: 'rum' }
  ];

  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'EN', label: 'English' }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-2">
            <Martini size={24} className="text-purple-400" />
            <span className="text-white font-bold text-xl">LUXE</span>
          </div>

          <div className="flex items-center gap-4">
            {/* History Toggle */}
            <button
              onClick={() => onViewChange(currentView === 'products' ? 'history' : 'products')}
              className={`flex items-center text-white/70 hover:text-white transition-all
                ${currentView === 'history' ? 'text-white' : ''}`}
            >
              <History size={20} />
            </button>

            {/* Language Selector */}
            <div className="flex items-center">
              <button
                onClick={() => setCurrentLang(currentLang === 'ES' ? 'EN' : 'ES')}
                className="flex items-center gap-1 text-white/70 hover:text-white"
              >
                <Globe2 size={20} />
                <span className="text-sm">{currentLang}</span>
              </button>
            </div>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="p-2 text-white/70 hover:text-white relative"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && currentView === 'products' && (
        <div className="fixed top-16 left-4 right-4 bg-white/10 backdrop-blur-md rounded-[2rem] p-4 z-50">
          <div className="grid grid-cols-2 gap-4">
            {filters.map((item) => (
              <button
                key={item.filter}
                onClick={() => {
                  onFilterClick(item.filter);
                  setIsOpen(false);
                }}
                className={`p-4 rounded-[1.5rem] transition-all text-center
                  ${activeFilter === item.filter 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;