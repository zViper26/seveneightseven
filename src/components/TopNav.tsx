import React, { useState } from 'react';
import { Wine, Beer, GlassWater, DollarSign, ShoppingCart, Search, Martini, Globe2, History, ChevronDown } from 'lucide-react';

interface TopNavProps {
  cartCount: number;
  onFilterClick: (filter: string) => void;
  activeFilter: string;
  onCartClick: () => void;
  onViewChange: (view: 'products' | 'history') => void;
  currentView: 'products' | 'history';
}

const TopNav: React.FC<TopNavProps> = ({ 
  cartCount, 
  onFilterClick, 
  activeFilter, 
  onCartClick,
  onViewChange,
  currentView
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');

  const mainFilters = [
    { label: 'Todos', filter: 'all' },
    { label: 'Tequila', filter: 'tequila' },
    { label: 'Whiskey', filter: 'whiskey' },
  ];

  const moreFilters = [
    { label: 'Licor', filter: 'licor' },
    { label: 'Gin', filter: 'gin' },
    { label: 'Cognac', filter: 'cognac' },
    { label: 'Cerveza', filter: 'cerveza' },
    { label: 'Vodka', filter: 'vodka' },
    { label: 'Champaña', filter: 'champana' },
    { label: 'Rum', filter: 'rum' }
  ];

  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'EN', label: 'English' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 glass-nav z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Left section with main filters and More dropdown */}
          <div className="flex items-center gap-4">
            {currentView === 'products' && (
              <>
                {mainFilters.map((item) => (
                  <button
                    key={item.filter}
                    onClick={() => onFilterClick(item.filter)}
                    className={`text-white/70 hover:text-white transition-all px-3 py-1.5 rounded-full text-sm
                      ${activeFilter === item.filter ? 'bg-white/10 text-white' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="relative">
                  <button
                    onClick={() => setShowMoreFilters(!showMoreFilters)}
                    className={`text-white/70 hover:text-white transition-all px-3 py-1.5 rounded-full text-sm flex items-center gap-1
                      ${showMoreFilters ? 'bg-white/10 text-white' : ''}`}
                  >
                    More <ChevronDown size={14} />
                  </button>
                  
                  {showMoreFilters && (
                    <div className="absolute left-0 mt-2 py-2 w-40 glass-nav rounded-xl border border-white/10 shadow-lg">
                      {moreFilters.map((item) => (
                        <button
                          key={item.filter}
                          onClick={() => {
                            onFilterClick(item.filter);
                            setShowMoreFilters(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-all
                            ${activeFilter === item.filter ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'}`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-full">
              <Martini size={24} className="text-purple-400" />
            </div>
            <span className="text-white font-bold text-xl">LUXE</span>
          </div>

          {/* Right section with search, language, history and cart */}
          <div className="flex items-center gap-6">
            {currentView === 'products' && (
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search drinks..."
                  className="w-full bg-white/5 text-white placeholder-white/50 rounded-full px-4 py-2 pl-10 border border-white/10 focus:border-purple-400/50 outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
              </div>
            )}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-all px-3 py-1.5 rounded-full text-sm bg-white/5"
              >
                <Globe2 size={18} />
                <span>{currentLang}</span>
              </button>

              {showLanguages && (
                <div className="absolute right-0 mt-2 py-2 w-32 glass-nav rounded-xl border border-white/10 shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setShowLanguages(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* History Toggle */}
            <button
              onClick={() => onViewChange(currentView === 'products' ? 'history' : 'products')}
              className={`flex items-center gap-2 transition-all px-3 py-1.5 rounded-full text-sm
                ${currentView === 'history' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'}`}
            >
              <History size={18} />
              <span>History</span>
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-all relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;