import React from 'react';
import { MATERIAL_BENEFITS } from '../../config/constants';
import { motion } from 'framer-motion';

const Materials: React.FC = () => {
  return (
    <section id="materials" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-orange blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 mb-6 border border-brand-orange/30 rounded-full bg-brand-orange/10">
              <span className="text-brand-orange font-bold text-sm tracking-wider uppercase">Висока Якість</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ми обираємо тільки <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                найкращі матеріали
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Стеля встановлюється один раз на десятиліття. Ми принципово не використовуємо дешевий китайський пластик, який жовтіє та має неприємний запах. Ваше здоров'я та естетика інтер'єру — наш пріоритет.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {MATERIAL_BENEFITS.map((item, index) => (
              <div key={index} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
                    <item.icon className="text-brand-orange" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Materials;