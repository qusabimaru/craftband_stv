import { useParallax } from '../hooks/useParallax';

export function Awards() {
  const parallax = useParallax(0.15);

  const awardedBeers = [
    { name: 'Helles «Дизель»', style: 'Helles', year: '2023' },
    { name: 'IPA «Tortuga»', style: 'IPA', year: '2023' },
    { name: 'Oyster Stout «Bell Rock»', style: 'Oyster Stout', year: '2024' },
    { name: 'APA «HighWay»', style: 'APA', year: '2024' },
  ];

  return (
    <>
      {/* Awards counter section */}
      <section
        className="py-28 overflow-hidden relative"
        style={{ backgroundColor: '#0D0805' }}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Big number with parallax */}
            <div className="reveal reveal-left" style={{ transform: `translateY(${-parallax * 0.5}px)` }}>
              <div
                className="text-[10rem] md:text-[14rem] leading-none select-none"
                style={{ color: '#C8912A', opacity: 0.9, lineHeight: 0.9 }}
              >
                4
              </div>
              <h2
                className="text-4xl md:text-5xl text-white mt-2 mb-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                Золотые медали
              </h2>
              <p style={{ color: '#9A8C72' }}>
                International Beer Festival, Sochi · 2023–2024
              </p>
            </div>

            {/* Award list */}
            <div className="space-y-5 reveal reveal-right reveal-delay-1">
              {awardedBeers.map((beer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-5 rounded-2xl transition-all duration-300"
                  style={{ backgroundColor: '#1C1208' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#251A0C')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#1C1208')
                  }
                >
                  <div>
                    <span
                      className="inline-block text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-2"
                      style={{
                        backgroundColor: 'rgba(200,145,42,0.2)',
                        color: '#DFAF50',
                      }}
                    >
                      {beer.style}
                    </span>
                    <h3 className="text-xl text-white">{beer.name}</h3>
                  </div>
                  <div
                    className="text-xs tracking-widest"
                    style={{ color: '#9A8C72' }}
                  >
                    {beer.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship beer spotlight */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#1C1208' }}
      >
        {/* Decorative circle */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            backgroundColor: '#C8912A',
            transform: `translateY(calc(-50% + ${parallax * 0.2}px))`,
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20 text-center">
          <div className="max-w-2xl mx-auto reveal reveal-delay-1">
            {/* Medal icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ backgroundColor: '#C8912A' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 2L16.9 10.5H26L18.5 15.9L21.4 24.4L14 19L6.6 24.4L9.5 15.9L2 10.5H11.1L14 2Z"
                  fill="#080503"
                />
              </svg>
            </div>

            <div
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: '#C8912A' }}
            >
              Флагманский сорт
            </div>

            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Oyster Stout «Bell Rock»
            </h2>
            <p
              className="text-xl"
              style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}
            >
              Победитель International Beer Festival. Тёмный стаут с устричным
              экстрактом, кофейными и шоколадными нотами.
            </p>

            <div
              className="inline-block mt-8 px-6 py-2 rounded-full text-sm tracking-wide"
              style={{
                backgroundColor: 'rgba(200,145,42,0.15)',
                color: '#DFAF50',
              }}
            >
              7.2% ABV · 45 IBU
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
