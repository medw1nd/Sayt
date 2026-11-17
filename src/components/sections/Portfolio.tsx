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
            <figure key={item.id} className="group overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-brand-dark">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={item.presentation && {
                    objectPosition: item.presentation.position,
                    filter: `brightness(${item.presentation.brightness}) saturate(0.94)`
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              {item.presentation && (
                <figcaption className="px-5 py-4">
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <h3 className="mt-1 font-bold text-brand-dark">{item.title}</h3>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
