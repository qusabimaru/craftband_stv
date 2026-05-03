export function Footer() {
  return (
    <footer style={{ backgroundColor: '#060402' }}>
      {/* Top divider line */}
      <div className="h-px w-full" style={{ backgroundColor: 'rgba(200,145,42,0.2)' }} />

      <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="text-2xl tracking-widest uppercase mb-4"
              style={{ color: '#DFAF50', letterSpacing: '0.18em' }}
            >
              CraftBand
            </div>
            <p className="text-sm" style={{ color: '#786A52', lineHeight: 1.8 }}>
              Ремесленная пивоварня
              <br />
              Юга России
            </p>
            <p className="text-xs mt-4" style={{ color: '#4A3A28' }}>
              Ставрополь · С 2018 года
            </p>
          </div>

          {/* Сорта */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#DFAF50' }}
            >
              Сорта
            </h4>
            <ul className="space-y-3">
              {['Лагеры', 'Эли', 'Стауты', 'Сезонные'].map((item) => (
                <li key={item}>
                  <a
                    href="#catalog"
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#786A52' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DFAF50')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#786A52')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#DFAF50' }}
            >
              Компания
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'О пивоварне', href: '#about' },
                { label: 'Производство', href: '#about' },
                { label: 'Награды', href: '#about' },
                { label: 'Новости', href: '#news' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#786A52' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DFAF50')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#786A52')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Партнёрам */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#DFAF50' }}
            >
              Партнёрам
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Где купить', href: '#where' },
                { label: 'Стать дистрибьютором', href: '#contact' },
                { label: 'Контакты', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#786A52' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DFAF50')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#786A52')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(200,145,42,0.1)' }}
        >
          <p className="text-xs" style={{ color: '#4A3A28' }}>
            © CraftBand 2026 · Все права защищены
          </p>

          <div className="flex gap-6">
            {['Telegram', 'VK', 'Instagram'].map((soc) => (
              <a
                key={soc}
                href={
                  soc === 'Telegram'
                    ? 'https://t.me/'
                    : soc === 'VK'
                      ? 'https://vk.com/'
                      : 'https://www.instagram.com/'
                }
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-wide transition-colors duration-300"
                style={{ color: '#786A52' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#DFAF50')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#786A52')}
              >
                {soc}
              </a>
            ))}
          </div>

          <div className="flex gap-5">
            <a
              href="/privacy-policy.html"
              className="text-xs transition-colors duration-300"
              style={{ color: '#4A3A28' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#786A52')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3A28')}
            >
              Политика конфиденциальности
            </a>
            <a
              href="/cooperation-terms.html"
              className="text-xs transition-colors duration-300"
              style={{ color: '#4A3A28' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#786A52')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A3A28')}
            >
              Условия сотрудничества
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
