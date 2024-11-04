import React from 'react';
import { Wine, Beer, GlassWater } from 'lucide-react';

const SearchFilters: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Wine, label: 'Wine' },
              { icon: Beer, label: 'Beer' },
              { icon: GlassWater, label: 'Spirits' },
            ].map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all"
              >
                <category.icon size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-white font-semibold mb-4">Price Range</h3>
          <input
            type="range"
            min="0"
            max="500"
            className="w-full accent-purple-500"
          />
          <div className="flex justify-between text-white/70 text-sm mt-2">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h3 className="text-white font-semibold mb-4">Sort By</h3>
          <select className="w-full bg-white/5 text-white border border-white/20 rounded-lg p-2 outline-none focus:border-purple-500">
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;