import React from 'react';
import { useEffect, useState } from 'react';

const HomeView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1000",
      title: "Premium Spirits",
      description: "Discover our exclusive collection"
    },
    {
      image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=1000",
      title: "Craft Cocktails",
      description: "Expertly mixed by our bartenders"
    },
    {
      image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=1000",
      title: "Fine Wines",
      description: "Selected from the world's best vineyards"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=500",
      title: "VIP Experience",
      description: "Exclusive table service and premium offerings"
    },
    {
      image: "https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?auto=format&fit=crop&q=80&w=500",
      title: "Expert Mixology",
      description: "Crafted cocktails by professional bartenders"
    },
    {
      image: "https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?auto=format&fit=crop&q=80&w=500",
      title: "Premium Selection",
      description: "Curated collection of finest spirits"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Carousel */}
      <div className="relative h-[70vh] overflow-hidden rounded-3xl">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl text-white/80">{item.description}</p>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Club 787</h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          Experience the finest selection of premium drinks in our exclusive collection
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;