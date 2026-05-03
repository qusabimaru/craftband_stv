import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const RAW_LOGO_SRC = '/images/logo-craftband.svg';
  const [logoSrc, setLogoSrc] = useState(RAW_LOGO_SRC);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = RAW_LOGO_SRC;

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Remove near-white background to make logo truly transparent.
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const isNearWhite = r > 242 && g > 242 && b > 242;
        if (isNearWhite) data[i + 3] = 0;
      }
      ctx.putImageData(imageData, 0, 0);

      // Trim transparent margins so no white box spacing remains.
      const trimmedData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const px = trimmedData.data;
      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = -1;
      let maxY = -1;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const alpha = px[(y * canvas.width + x) * 4 + 3];
          if (alpha > 8) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (maxX >= minX && maxY >= minY) {
        const w = maxX - minX + 1;
        const h = maxY - minY + 1;
        const cropped = document.createElement('canvas');
        const croppedCtx = cropped.getContext('2d');
        if (!croppedCtx) return;
        cropped.width = w;
        cropped.height = h;
        croppedCtx.drawImage(canvas, minX, minY, w, h, 0, 0, w, h);
        setLogoSrc(cropped.toDataURL('image/png'));
        return;
      }

      setLogoSrc(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      if (!cancelled) setLogoSrc(RAW_LOGO_SRC);
    };

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? '#080503' : 'transparent',
        backdropFilter: scrolled ? 'none' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,145,42,0.15)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="inline-flex items-center" aria-label="CraftBand">
          <img
            src={logoSrc}
            alt="CraftBand"
            className="h-14 md:h-16 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Каталог', href: '#catalog' },
            { label: 'О пивоварне', href: '#about' },
            { label: 'Где купить', href: '#where' },
            { label: 'Новости', href: '#news' },
            { label: 'Контакты', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.75)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#DFAF50')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block pressable btn-sweep text-sm tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80"
          style={{
            backgroundColor: '#C8912A',
            color: '#080503',
            padding: '10px 24px',
            borderRadius: '12px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DFAF50')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8912A')}
        >
          <span>Запросить прайс</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5" style={{ backgroundColor: '#DFAF50' }} />
          <span className="block w-6 h-0.5" style={{ backgroundColor: '#DFAF50' }} />
          <span className="block w-4 h-0.5" style={{ backgroundColor: '#DFAF50' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: '#080503' }}
        >
          {[
            { label: 'Каталог', href: '#catalog' },
            { label: 'О пивоварне', href: '#about' },
            { label: 'Где купить', href: '#where' },
            { label: 'Новости', href: '#news' },
            { label: 'Контакты', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center mt-2 pressable btn-sweep text-sm tracking-wide transition-all duration-300 px-4 py-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80"
            style={{
              backgroundColor: '#C8912A',
              color: '#080503',
            }}
          >
            <span>Запросить прайс</span>
          </a>
        </div>
      )}
    </header>
  );
}
