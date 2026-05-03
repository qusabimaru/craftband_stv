import { useHeroParallax } from '../hooks/useParallax';

const BG_IMAGE = 'https://images.unsplash.com/photo-1695048475638-97ff18a91059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjBicmV3ZXJ5JTIwZGFyayUyMGx1eHVyeXxlbnwxfHx8fDE3Nzc3NTc2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080';

const HERO_VIDEO = '/videos/IMG_7442.MOV';

export function Hero() {
  const { video, overlay, content, videoScale } = useHeroParallax();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#080503' }}
    >
      {/* Parallax video layer — extra height so motion stays covered */}
      <div
        className="absolute inset-x-0 w-full will-change-transform"
        style={{
          top: '-18%',
          height: '136%',
          transform: `translate3d(0, ${video}px, 0) scale(${videoScale})`,
          transformOrigin: 'center center',
        }}
      >
        <video
          src={HERO_VIDEO}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
          autoPlay
          muted
          loop
          playsInline
          poster={BG_IMAGE}
          aria-label="CraftBand — производство"
        />
      </div>

      {/* Warm color wash — slower parallax for depth */}
      <div
        className="absolute inset-x-0 will-change-transform pointer-events-none"
        style={{
          top: '-10%',
          height: '120%',
          transform: `translate3d(0, ${overlay}px, 0)`,
          background:
            'linear-gradient(135deg, rgba(8,5,3,0.7) 0%, rgba(18,10,4,0.4) 50%, rgba(30,16,8,0.6) 100%)',
        }}
      />

      {/* Content — slight counter-motion vs video */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20 w-full py-32 pt-40 will-change-transform"
        style={{ transform: `translate3d(0, ${content}px, 0)` }}
      >
        <div className="reveal reveal-left max-w-3xl">
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-3 mb-8"
              style={{ color: '#DFAF50' }}
            >
              <span className="block w-10 h-px" style={{ backgroundColor: '#C8912A' }} />
              <span className="text-xs tracking-[0.25em] uppercase">
                Ставрополь · С 2018 года
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl text-white mb-8"
              style={{ lineHeight: '1.05', letterSpacing: '-0.03em', textWrap: 'balance' }}
            >
              Ремесленная
              <br />
              <span style={{ color: '#DFAF50' }}>пивоварня</span>
              <br />
              с характером Юга
            </h1>

            <p
              className="text-lg md:text-xl mb-12 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.68)', lineHeight: '1.7' }}
            >
              15+ сортов. 10 городов. 4 золотые медали. Варим линейку для заведений, где важны вкус,
              стабильность и фирменная подача.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#catalog"
                className="inline-block pressable btn-sweep text-sm tracking-wide transition-all duration-300 outline-none"
                style={{
                  backgroundColor: '#C8912A',
                  color: '#080503',
                  padding: '14px 36px',
                  borderRadius: '14px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DFAF50')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8912A')}
              >
                <span>Каталог сортов</span>
              </a>
              <a
                href="#contact"
                className="inline-block pressable btn-sweep text-sm tracking-wide transition-all duration-300"
                style={{
                  color: '#DFAF50',
                  padding: '14px 36px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(200,145,42,0.14)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(200,145,42,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(200,145,42,0.14)')}
              >
                <span>Запросить прайс</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 md:mt-14 flex flex-wrap gap-10 md:gap-20 reveal reveal-delay-3">
          {[
            { num: '15+', label: 'Сортов пива' },
            { num: '10', label: 'Городов' },
            { num: '4', label: 'Золотые медали' },
            { num: '30+', label: 'Заведений-партнёров' },
          ].map((stat) => (
            <div key={stat.num}>
              <div
                className="text-3xl md:text-4xl"
                style={{ color: '#DFAF50', lineHeight: 1 }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs mt-1 tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
