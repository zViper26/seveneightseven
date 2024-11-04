import React from 'react';

const Hero: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1000",
      span: "col-span-2 row-span-2",
    },
    {
      url: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=500",
      span: "col-span-1 row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=500",
      span: "col-span-1 row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=500",
      span: "col-span-1 row-span-2",
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Club 787</h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          Experience the finest selection of premium drinks in our exclusive collection
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl ${image.span} transition-transform duration-500 hover:scale-[1.02] group`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
            <img
              src={image.url}
              alt={`Gallery ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Premium Selection", desc: "Curated collection of finest spirits" },
          { title: "Table Service", desc: "Direct delivery to your table" },
          { title: "Expert Mixology", desc: "Crafted by professional bartenders" },
        ].map((feature, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-white/70">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;