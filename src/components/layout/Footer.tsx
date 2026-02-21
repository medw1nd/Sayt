import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="h-12 w-auto flex items-center gap-2 text-white">
          <img
            src="/logo.png"
            alt="Steli Lux Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Steli Lux. Всі права захищено.
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;