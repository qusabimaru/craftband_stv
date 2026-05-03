import React, { useEffect, useRef, useState } from 'react';

export function Contact() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'error' | 'success'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const socials = [
    { label: 'Telegram', href: 'https://t.me/' },
    { label: 'VK', href: 'https://vk.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A99f66c6421358aeb8616961580e2f8ab0067d37a350aabf9988f9713d8f1b4a6&width=100%25&height=260&lang=ru_RU&scroll=true';

    mapContainerRef.current.innerHTML = '';
    mapContainerRef.current.appendChild(script);

    return () => {
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const values = Object.values(formData).map((item) => item.trim());
    const hasEmpty = values.some((item) => item.length === 0);
    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (hasEmpty) {
      setSubmitState('error');
      setSubmitMessage('Заполните все поля, чтобы отправить заявку.');
      return;
    }

    if (phoneDigits.length < 10) {
      setSubmitState('error');
      setSubmitMessage('Укажите корректный телефон для обратной связи.');
      return;
    }

    setSubmitState('success');
    setSubmitMessage('Заявка принята. Менеджер свяжется с вами в течение рабочего дня.');
    setFormData({
      name: '',
      phone: '',
    });
  };

  return (
    <section
      className="py-28"
      id="contact"
      style={{ backgroundColor: '#0D0805' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Left: contact info */}
          <div className="space-y-10 reveal reveal-left md:col-span-6 h-full">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="block w-8 h-px" style={{ backgroundColor: '#C8912A' }} />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ color: '#9A8C72' }}
                >
                  Свяжитесь с нами
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                Контакты
              </h2>
            </div>

            {/* Info blocks */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Адрес', value: 'Ставрополь, Старомарьевское шоссе, 16' },
                { label: 'Телефон', value: '+7 (962) 445-40-61' },
                { label: 'Email', value: 'info@craftband.ru' },
                { label: 'Часы работы', value: 'Пн–Пт 9:00–18:00' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: '#1C1208' }}
                >
                  <div
                    className="text-xs tracking-wider uppercase mb-2"
                    style={{ color: '#9A8C72' }}
                  >
                    {item.label}
                  </div>
                  <p className="text-white text-sm" style={{ lineHeight: 1.6 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm tracking-wide transition-all duration-300 px-5 py-2.5 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(200,145,42,0.12)',
                    color: '#DFAF50',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(200,145,42,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(200,145,42,0.12)';
                  }}
                >
                  {soc.label}
                </a>
              ))}
            </div>

          </div>

          {/* Right: B2B Form */}
          <div className="space-y-10 reveal reveal-right md:col-span-6 h-full flex flex-col">
            <div
              className="flex items-center gap-4 mb-4 opacity-0 select-none pointer-events-none"
              aria-hidden="true"
            >
              <span className="block w-8 h-px" />
              <span className="text-xs tracking-[0.25em] uppercase">.</span>
            </div>
            <h3
              className="text-4xl md:text-5xl text-white"
              style={{ letterSpacing: '-0.02em' }}
            >
              Для партнёров
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1" noValidate>
              {[
                { key: 'name', placeholder: 'Ваше имя' },
                { key: 'phone', placeholder: 'Телефон', type: 'tel' },
              ].map((field) => (
                <input
                  key={field.key}
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.key]: e.target.value })
                  }
                  className="w-full text-white text-sm transition-all duration-300 outline-none focus:outline-none"
                  style={{
                    backgroundColor: '#1C1208',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    color: '#FFFFFF',
                    border:
                      submitState === 'error' ? '1px solid rgba(239, 68, 68, 0.65)' : '1px solid transparent',
                  }}
                  aria-invalid={submitState === 'error'}
                  onFocus={(e) =>
                    (e.currentTarget.style.backgroundColor = '#251A0C')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.backgroundColor = '#1C1208')
                  }
                />
              ))}

              <button
                type="submit"
                className="w-full pressable btn-sweep text-sm tracking-wide transition-all duration-300 outline-none"
                style={{
                  backgroundColor: '#C8912A',
                  color: '#080503',
                  padding: '15px 24px',
                  borderRadius: '12px',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#DFAF50')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = '#C8912A')
                }
              >
                <span>Отправить заявку</span>
              </button>

              {submitState !== 'idle' && (
                <p
                  className="text-sm"
                  style={{
                    color: submitState === 'success' ? '#4ADE80' : '#F87171',
                  }}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Full-width map */}
          <div className="md:col-span-12">
            <div
              className="h-[240px] md:h-[260px] rounded-3xl overflow-hidden relative reveal reveal-right reveal-delay-1"
              style={{ backgroundColor: '#1C1208' }}
            >
              <div ref={mapContainerRef} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
