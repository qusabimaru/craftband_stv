export function Partners() {
  const partners = [
    "Harat's Pub",
    'BeerWood',
    'Craft Republic',
    'Пинта',
    'Drunk Cherry',
    'Beerлога',
    'Hopkins',
    'КрафтБирБар',
  ];

  return (
    <section className="py-24" id="where" style={{ backgroundColor: '#F8F3E8' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div
            className="lg:col-span-5 rounded-3xl p-8 md:p-10 reveal reveal-left"
            style={{
              background:
                'linear-gradient(145deg, #1C1208 0%, #120A04 100%)',
              boxShadow: '0 18px 48px rgba(6, 4, 2, 0.45)',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px" style={{ backgroundColor: '#C8912A' }} />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: '#9A8C72' }}
              >
                Для HoReCa
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl mb-5"
              style={{ color: '#F5F0E8', letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              Поставки крафта для баров и ресторанов
            </h2>

            <p className="text-sm md:text-base mb-8 max-w-[48ch]" style={{ color: '#B8A894', lineHeight: 1.7 }}>
              Помогаем собрать рабочую пивную карту: стабильные поставки, сезонные релизы и
              поддержка команды заведения.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: '48 ч', label: 'Средний срок отгрузки' },
                { value: '30+', label: 'Партнерских точек' },
                { value: '10+', label: 'Городов поставки' },
                { value: '4', label: 'Медали фестивалей' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl px-4 py-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <p className="text-2xl md:text-[30px]" style={{ color: '#DFAF50', lineHeight: 1 }}>
                    {item.value}
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#9A8C72', letterSpacing: '0.04em' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center pressable btn-sweep text-sm tracking-wide transition-all duration-300 px-6 py-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80"
              style={{
                backgroundColor: '#C8912A',
                color: '#080503',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DFAF50')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8912A')}
            >
              <span>Запросить оптовый прайс</span>
            </a>
          </div>

          <div className="lg:col-span-7 reveal reveal-right reveal-delay-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px" style={{ backgroundColor: '#C8912A' }} />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: '#9A8C72' }}
              >
                Нам доверяют
              </span>
            </div>
            <h3
              className="text-3xl md:text-4xl mb-8"
              style={{ color: '#120A04', letterSpacing: '-0.01em' }}
            >
              Наши партнеры
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`h-20 flex items-center justify-center transition-all duration-300 cursor-default rounded-2xl border reveal ${
                    index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'
                  }`}
                  style={{
                    backgroundColor: '#FEFCF7',
                    borderColor: 'rgba(200,145,42,0.18)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FDF7EC';
                    e.currentTarget.style.borderColor = 'rgba(200,145,42,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FEFCF7';
                    e.currentTarget.style.borderColor = 'rgba(200,145,42,0.18)';
                  }}
                >
                  <span
                    className="text-sm tracking-wide"
                    style={{ color: '#786A52' }}
                  >
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-base"
              style={{ color: '#9A8C72' }}
            >
              30+ заведений в 10+ городах России
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
