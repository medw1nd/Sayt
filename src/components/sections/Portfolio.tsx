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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;