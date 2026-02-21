import React, { useState } from 'react';
import { CalculatorState, PRICE_PER_M2, PRICE_PER_CORNER, PRICE_PER_LIGHT } from '../../types';

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    area: 15,
    corners: 4,
    lights: 1,
    type: 'matte'
  });

  const calculateTotal = () => {
    const basePrice = state.area * PRICE_PER_M2[state.type];
    const cornersPrice = state.corners * PRICE_PER_CORNER;
    const lightsPrice = state.lights * PRICE_PER_LIGHT;
    return basePrice + cornersPrice + lightsPrice;
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
              Розрахуйте <span className="text-brand-orange">Вартість</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Дізнайтеся орієнтовну ціну вашої стелі за 1 хвилину. Це безкоштовно і ні до чого не зобов'язує.
            </p>

            <div className="bg-brand-gray p-6 rounded-xl border-l-4 border-brand-orange">
              <p className="text-sm text-gray-500 italic">
                * Розрахунок є попереднім. Точна вартість визначається після безкоштовного заміру майстром, враховуючи особливості стін та складність монтажу.
              </p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-6">

              {/* Type Selection */}
              <div>
                <label className="block text-brand-dark font-bold mb-3">Тип полотна</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['matte', 'satin', 'glossy'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setState({ ...state, type })}
                      className={`py-2 rounded-lg text-sm font-semibold transition-all border ${state.type === type
                          ? 'bg-brand-dark text-white border-brand-dark'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-brand-orange'
                        }`}
                    >
                      {type === 'matte' ? 'Матова' : type === 'satin' ? 'Сатин' : 'Глянець'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-brand-dark font-bold">Площа кімнати</label>
                  <span className="text-brand-orange font-bold">{state.area} м²</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={state.area}
                  onChange={(e) => setState({ ...state, area: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>

              {/* Corners & Lights */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 font-bold mb-1">Кути (шт)</label>
                  <input
                    type="number"
                    min="4"
                    value={state.corners}
                    onChange={(e) => setState({ ...state, corners: Math.max(0, parseInt(e.target.value) || 0) })}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 font-bold mb-1">Точки світла</label>
                  <input
                    type="number"
                    min="0"
                    value={state.lights}
                    onChange={(e) => setState({ ...state, lights: Math.max(0, parseInt(e.target.value) || 0) })}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-gray-500 font-medium">Орієнтовна вартість:</span>
                  <span className="text-4xl font-extrabold text-brand-dark">
                    {calculateTotal()} <span className="text-xl text-gray-400 font-normal">грн</span>
                  </span>
                </div>
                <button className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                  Замовити за цією ціною
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;