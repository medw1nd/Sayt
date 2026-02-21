import { ShieldCheck, Zap, Award, Users, BadgeCheck, Leaf, Sparkles, HeartHandshake } from 'lucide-react';
import { ServiceFeature, PortfolioItem } from './types';

export const FEATURES: ServiceFeature[] = [
  {
    icon: Users,
    title: "Професійна Команда",
    description: "Наші майстри мають досвід роботи від 5 років. Ми знаємо всі нюанси складних конструкцій, світлових ліній та тіньових швів."
  },
  {
    icon: ShieldCheck,
    title: "Безпечний Монтаж",
    description: "Ми використовуємо виключно полімерно-композитні газові балони, які є вибухобезпечними. Ваша безпека для нас на першому місці."
  },
  {
    icon: HeartHandshake,
    title: "Індивідуальний Підхід",
    description: "Ми не просто монтуємо стелі, а допомагаємо підібрати ідеальне рішення саме для вашого інтер'єру, враховуючи всі побажання та бюджет."
  },
  {
    icon: BadgeCheck,
    title: "Чесна Ціна",
    description: "Остаточна вартість озвучується на замірі і не змінюється в процесі роботи. Ніяких прихованих доплат за 'складність' в кінці."
  }
];

export const MATERIAL_BENEFITS = [
  {
    icon: Award,
    title: "MSD Premium",
    description: "Ми працюємо лише з сертифікованою плівкою MSD Premium. Це еталон якості: ідеально біла, міцна та довговічна."
  },
  {
    icon: Leaf,
    title: "Екологічність",
    description: "Матеріали мають маркування A+, не виділяють токсинів, гіпоалергенні та дозволені для дитячих кімнат."
  },
  {
    icon: Zap,
    title: "Без Запаху",
    description: "Дешеві стелі пахнуть тижнями. Наші матеріали не мають різкого хімічного запаху навіть у день монтажу."
  },
  {
    icon: ShieldCheck,
    title: "Надійність",
    description: "Полотно витримує навантаження до 100 кг/м². Ваш ремонт захищений від затоплення сусідами зверху."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Світлові Лінії",
    category: "Сучасне освітлення",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Глянцева Фактура",
    category: "Візуальне збільшення",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Матова Класика",
    category: "Ідеальна площина",
    imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Ванна Кімната",
    category: "Вологостійкість",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Тіньовий Профіль",
    category: "Ефект левітації",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Трекове Освітлення",
    category: "Зонування світлом",
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Дворівнева Стеля",
    category: "Дизайн",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Паряща Стеля",
    category: "Підсвітка",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Сатинове Полотно",
    category: "Текстура",
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop"
  }
];