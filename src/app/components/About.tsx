import React, { useEffect, useRef } from 'react';
import { useSectionParallax } from '../hooks/useParallax';

/** Файл из `public/videos/` — тот же способ подключения, что у Hero (`/videos/IMG_7442.MOV`). */
const ABOUT_VIDEO = '/videos/1.mov';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { video, overlay, videoScale } = useSectionParallax(sectionRef);

  useEffect(() => {
    const el = videoRef.current;
    const sec = sectionRef.current;
    if (!el || !sec) return;

    el.muted = true;
    el.defaultMuted = true;

    const tryPlay = () => void el.play().catch(() => {});
    tryPlay();

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) tryPlay();
      },
      { threshold: 0.08 },
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden py-28"
      id="about"
      style={{ backgroundColor: '#080503' }}
    >
      <div
        className="absolute inset-x-0 w-full z-0 will-change-transform"
        style={{
          top: '-18%',
          height: '136%',
          transform: `translate3d(0, ${video}px, 0) scale(${videoScale})`,
          transformOrigin: 'center center',
        }}
      >
        <video
          ref={videoRef}
          src={ABOUT_VIDEO}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="CraftBand — о пивоварне"
        />
      </div>

      <div
        className="absolute inset-x-0 z-[1] will-change-transform pointer-events-none"
        style={{
          top: '-10%',
          height: '120%',
          transform: `translate3d(0, ${overlay}px, 0)`,
          background:
            'linear-gradient(135deg, rgba(8,5,3,0.75) 0%, rgba(18,10,4,0.5) 45%, rgba(30,16,8,0.65) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20 w-full">
        <div className="max-w-3xl space-y-6 reveal reveal-left">
          <div className="flex items-center gap-4 mb-2">
            <span className="block w-8 h-px" style={{ backgroundColor: '#C8912A' }} />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: '#DFAF50' }}
            >
              О нас
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.15, textWrap: 'balance' }}
          >
            7 лет варим
            <br />
            пиво
          </h2>

          <div
            className="space-y-5 text-base md:text-lg"
            style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}
          >
            <p>
              CRAFTBAND — ремесленная пивоварня, которая варит пиво по своим правилам.
            </p>
            <p>
              Мы используем только натуральное сырьё, не добавляем искусственных ферментов,
              консервантов и ароматизаторов. Естественная карбонизация — без искусственных
              пузырьков, как это делают крупные производители. В нашей линейке — светлый грюйт,
              стауты, IPA, APA, пшеничное пиво и авторские эли вроде «Трын-Травы» с тархуном и
              душицей.
            </p>
            <p>
              Мы чтим традиции и не боимся их нарушать. Варим то, что нравится, а не то, что диктует
              рынок. Верим, что отечественное пиво может быть качественным, разным и доступным — и
              доказываем это каждой варкой.
            </p>
            <p>
              Наше пиво уже представлено в барах Ставрополя, Сочи и Ростова. Для нас это не повод
              останавливаться — мы уже работаем над новыми вкусами.
            </p>
            <p className="pb-1">
              Пивоварение для нас — ремесло и искусство. Мы открыты для общения: пишите, что думаете
              о нашем пиве.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
