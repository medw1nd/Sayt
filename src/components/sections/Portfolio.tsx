import React from 'react';
import { PORTFOLIO_ITEMS } from '../../config/constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
              Наші <span className="text-brand-orange">Роботи</span>
            </h2>
            <div className="w-20 h-1 bg-brand-orange rounded-full mb-4"></div>
            <p className="text-gray-600">
              Реальні фото наших об'єктів в Івано-Франківську та області.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white h-72">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;