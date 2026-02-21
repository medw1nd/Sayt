import React from 'react';
import { FileCheck, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Certificates: React.FC = () => {
  const certs = [
    {
      id: 1,
      title: "Сертифікат MSD",
      description: "Офіційний партнер заводу виробника MSD Premium",
      icon: Award,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Екологічний Стандарт",
      description: "Відповідність нормам ISO 14001:2015",
      icon: FileCheck,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      title: "Пожежна Безпека",
      description: "Клас пожежної безпеки КМ1 (не горить)",
      icon: Shield,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-brand-gray/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Наші <span className="text-brand-orange">Сертифікати</span>
          </h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ми працюємо відкрито та прозоро. Всі матеріали сертифіковані та відповідають європейським стандартам якості.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${cert.color}`}>
                <cert.icon size={40} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
              
              {/* Visual representation of a document */}
              <div className="mt-6 mx-auto w-24 h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-brand-dark/5 transition-opacity">
                    <span className="text-xs font-bold text-gray-500">Перегляд</span>
                 </div>
                 <FileCheck size={32} className="text-gray-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;