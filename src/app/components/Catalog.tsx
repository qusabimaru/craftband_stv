import { useEffect, useState } from 'react';

const BEER_IMAGE =
  'https://images.unsplash.com/photo-1585620384249-5cf9442c87f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmVlciUyMGJvdHRsZXMlMjBwcmVtaXVtJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc3NzU3Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080';

const SECTION_BG = '#060402';

const ease = 'cubic-bezier(0.32, 0.72, 0, 1)';

const BTN_GOLD = '#D1C48D';
const BTN_GOLD_HOVER = '#C4B67E';

type Drink = {
  title: string;
  categoryLine: string;
  image: string;
  inStock: boolean;
  /** Короткий текст для окна быстрого осмотра */
  summary: string;
};

const drinks: Drink[] = [
  {
    title: 'HELLES «ДИЗЕЛЬ»',
    categoryLine: 'ЛАГЕР | ЧИСТЫЙ ПРОФИЛЬ',
    image: '/images/craft-band/3.jpg',
    inStock: true,
    summary:
      'Светлый лагер в немецкой традиции: чистый солодовый профиль, мягкое тело и деликатная горечь в послевкусии. Отличная базовая позиция для знакомства с линейкой.',
  },
  {
    title: 'IPA «TORTUGA»',
    categoryLine: 'IPA | ТРОПИЧЕСКИЙ ХМЕЛЬ',
    image: '/images/craft-band/4.jpg',
    inStock: true,
    summary:
      'Аромат тропических фруктов и цитруса, выразительный хмелевой характер без лишней резкости. Для тех, кто любит яркий, но сбалансированный IPA.',
  },
  {
    title: 'STOUT «BELL ROCK»',
    categoryLine: 'OYSTER STOUT | ШОКОЛАД',
    image: '/images/craft-band/8.jpg',
    inStock: true,
    summary:
      'Насыщенный тёмный сорт с нотами обжаренного какао и карамели. Устричный экстракт добавляет глубину и мягкое «морское» ореховое звучание.',
  },
  {
    title: 'FRUIT «РУБИНЬОТ»',
    categoryLine: 'FRUIT BEER | ЯГОДНЫЙ',
    image: '/images/craft-band/9.jpg',
    inStock: true,
    summary:
      'Лёгкое ягодное пиво с умеренной кислинкой: вишня и малина в балансе с солодовой основой. Освежающий формат для тёплого сезона и дегустаций.',
  },
];

export function Catalog() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [quickViewIndex, setQuickViewIndex] = useState<number | null>(null);

  const closeQuickView = () => setQuickViewIndex(null);

  useEffect(() => {
    if (quickViewIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuickView();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [quickViewIndex]);

  const activeDrink =
    quickViewIndex !== null ? drinks[quickViewIndex] ?? null : null;

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      id="catalog"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img src={BEER_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 0%, rgba(200, 145, 42, 0.35) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139, 32, 64, 0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20">
        <header className="mb-10 md:mb-14 reveal">
          <p
            className="text-[11px] tracking-[0.28em] uppercase mb-3"
            style={{ color: '#9A8C72' }}
          >
            Линейка · 4 позиции
          </p>
          <h2
            className="text-3xl md:text-4xl font-normal tracking-tight text-white"
            style={{ letterSpacing: '-0.02em' }}
          >
            Наши сорта
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-xl leading-relaxed" style={{ color: '#786A52' }}>
            Каждый рецепт — отдельный характер: от чистого лагера до тёмного стаута и ягодного
            финала.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {drinks.map((drink, index) => {
            const isHover = hovered === index;
            return (
              <article
                key={drink.title}
                className={`group spotlight-card relative flex flex-col rounded-2xl overflow-hidden cursor-default reveal ${
                  index === 0 ? 'reveal-delay-1' : index === 1 ? 'reveal-delay-2' : index === 2 ? 'reveal-delay-3' : 'reveal-delay-4'
                }`}
                style={{
                  backgroundColor: SECTION_BG,
                  border: `1px solid ${
                    isHover ? 'rgba(200, 145, 42, 0.35)' : 'rgba(200, 145, 42, 0.14)'
                  }`,
                  boxShadow: isHover
                    ? '0 16px 40px rgba(0, 0, 0, 0.45)'
                    : '0 8px 28px rgba(0, 0, 0, 0.28)',
                  transform: isHover ? 'translateY(-4px)' : 'translateY(0)',
                  transition: `border-color 0.45s ${ease}, box-shadow 0.45s ${ease}, transform 0.45s ${ease}`,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
                }}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden shrink-0"
                  style={{ backgroundColor: SECTION_BG }}
                >
                  <img
                    src={drink.image}
                    alt={drink.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: isHover ? 'scale(1.04)' : 'scale(1)',
                      transitionTimingFunction: ease,
                    }}
                  />
                </div>

                <div className="card-stagger flex flex-col flex-1 p-4 md:p-5 items-center text-center relative z-[1]">
                  <h3
                    className="text-base md:text-[17px] font-semibold leading-snug mb-1.5 w-full"
                    style={{ color: '#F5F0E8' }}
                  >
                    {drink.title}
                  </h3>
                  <p
                    className="text-xs md:text-[13px] leading-relaxed mb-3 w-full"
                    style={{ color: '#9A8C72' }}
                  >
                    {drink.categoryLine}
                  </p>

                  {/* Без hover (тач): отдельная ссылка на то же окно */}
                  <button
                    type="button"
                    className="[@media(hover:hover)]:hidden pressable text-[11px] font-medium tracking-wide mb-3 outline-none underline-offset-2"
                    style={{ color: '#DFAF50' }}
                    onClick={() => setQuickViewIndex(index)}
                  >
                    Быстрый осмотр
                  </button>

                  <div className="mt-auto mb-4 w-full flex justify-center">
                    {drink.inStock ? (
                      <span
                        className="text-xs font-medium whitespace-nowrap"
                        style={{ color: '#4ADE80' }}
                      >
                        В наличии
                      </span>
                    ) : (
                      <span className="text-xs font-medium" style={{ color: '#6B5C48' }}>
                        Нет в наличии
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="pressable btn-sweep text-sm font-medium px-8 py-2.5 rounded-lg text-white transition-colors duration-300 outline-none mx-auto relative z-[2]"
                    style={{
                      backgroundColor: BTN_GOLD,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = BTN_GOLD_HOVER;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = BTN_GOLD;
                    }}
                  >
                    <span>Подробнее</span>
                  </button>
                </div>

                {/* Оверлей на всю карточку: по центру — «Быстрый осмотр» (только для устройств с hover) */}
                <div
                  className="pointer-events-none absolute inset-0 z-[12] hidden [@media(hover:hover)]:flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{ backgroundColor: 'rgba(6, 4, 2, 0.72)' }}
                >
                  <button
                    type="button"
                    className="pointer-events-auto pressable btn-sweep text-xs font-semibold tracking-[0.12em] uppercase px-6 py-3 rounded-lg text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
                    style={{
                      backgroundColor: 'rgba(200, 145, 42, 0.95)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewIndex(index);
                    }}
                  >
                    <span>Быстрый осмотр</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-start reveal reveal-delay-2">
          <button
            type="button"
            className="pressable btn-sweep text-sm tracking-wide px-10 py-3.5 rounded-[14px] transition-colors duration-300 outline-none"
            style={{
              backgroundColor: '#C8912A',
              color: '#060402',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#DFAF50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C8912A';
            }}
          >
            <span>Полный каталог</span>
          </button>
        </div>
      </div>

      {/* Модальное окно быстрого осмотра */}
      {activeDrink !== null && quickViewIndex !== null ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-view-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default border-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.72)' }}
            aria-label="Закрыть"
            onClick={closeQuickView}
          />

          <div
            className="relative w-full max-w-[420px] max-h-[min(90vh,640px)] overflow-y-auto rounded-2xl shadow-2xl"
            style={{
              backgroundColor: SECTION_BG,
              border: '1px solid rgba(200, 145, 42, 0.25)',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.55)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-lg leading-none outline-none transition-colors"
              style={{
                backgroundColor: 'rgba(6, 4, 2, 0.85)',
                color: '#DFAF50',
                border: '1px solid rgba(200, 145, 42, 0.3)',
              }}
              aria-label="Закрыть окно"
              onClick={closeQuickView}
            >
              ×
            </button>

            <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
              <img
                src={activeDrink.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p
                className="text-[10px] tracking-[0.22em] uppercase mb-2"
                style={{ color: '#9A8C72' }}
              >
                Быстрый осмотр
              </p>
              <h3
                id="quick-view-title"
                className="text-xl sm:text-2xl font-semibold leading-tight mb-2"
                style={{ color: '#F5F0E8', letterSpacing: '-0.02em' }}
              >
                {activeDrink.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: '#C8912A' }}
              >
                {activeDrink.categoryLine}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#B8A894' }}>
                {activeDrink.summary}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
