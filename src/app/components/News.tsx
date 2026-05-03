import { useState } from 'react';

export function News() {
  const [hovered, setHovered] = useState<number | null>(null);

  const articles = [
    {
      date: '15 апреля 2026',
      category: 'Фестиваль',
      title: 'CraftBand на Sochi Beer Festival',
      excerpt:
        'Представляем 4 новых сорта на крупнейшем пивном фестивале юга России. Приходите на дегустацию.',
    },
    {
      date: '3 апреля 2026',
      category: 'Новый сорт',
      title: 'Запуск сезонного Spring Ale',
      excerpt:
        'Весенний эль с цветочными нотами и лёгкой горчинкой. Ограниченная партия до конца мая.',
    },
    {
      date: '28 марта 2026',
      category: 'Дегустация',
      title: 'Открытая дегустация на пивоварне',
      excerpt:
        'Каждую субботу приглашаем на экскурсию по производству с дегустацией всех сортов.',
    },
  ];

  return (
    <section className="py-28" id="news" style={{ backgroundColor: '#F8F3E8' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px" style={{ backgroundColor: '#C8912A' }} />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: '#9A8C72' }}
              >
                Актуально
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: '#120A04', letterSpacing: '-0.02em' }}
            >
              Новости и события
            </h2>
          </div>
          <a
            href="#"
            className="text-sm tracking-wide transition-colors"
            style={{ color: '#C8912A' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#A07020')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#C8912A')}
          >
            Все новости →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-400 cursor-pointer reveal ${
                index === 0 ? 'reveal-delay-1' : index === 1 ? 'reveal-delay-2' : 'reveal-delay-3'
              }`}
              style={{
                backgroundColor: '#FEFCF7',
                transform: hovered === index ? 'translateY(-6px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Color band top */}
              <div
                className="h-1 w-full rounded-t-2xl"
                style={{ backgroundColor: hovered === index ? '#C8912A' : '#E2D5BB' }}
              />

              <div className="card-stagger p-7">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-block text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(200,145,42,0.12)',
                      color: '#C8912A',
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: '#9A8C72' }}
                  >
                    {article.date}
                  </span>
                </div>

                <h3
                  className="text-2xl mb-4"
                  style={{ color: '#120A04', lineHeight: 1.3 }}
                >
                  {article.title}
                </h3>

                <p
                  className="text-sm mb-6"
                  style={{ color: '#786A52', lineHeight: 1.8 }}
                >
                  {article.excerpt}
                </p>

                <a
                  href="#"
                  className="text-sm tracking-wide transition-colors"
                  style={{ color: '#C8912A' }}
                >
                  Читать →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
