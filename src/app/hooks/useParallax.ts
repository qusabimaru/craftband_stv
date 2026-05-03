import { useEffect, useState, type RefObject } from 'react';

export function useParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}

export type HeroParallaxLayers = {
  video: number;
  overlay: number;
  content: number;
  videoScale: number;
};

/** Multi-layer parallax for hero: video moves faster, overlay slower, content slightly counter-shifted. */
export function useHeroParallax(): HeroParallaxLayers {
  const [layers, setLayers] = useState<HeroParallaxLayers>({
    video: 0,
    overlay: 0,
    content: 0,
    videoScale: 1,
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      setLayers({
        video: y * 0.52,
        overlay: y * 0.22,
        content: y * -0.09,
        videoScale: 1 + Math.min(y / 2000, 0.06),
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return layers;
}

/**
 * Parallax tied to a section’s document position (not global scroll).
 * Use below the fold so background video/overlay stay in frame; avoids clipping in-flow content.
 */
export function useSectionParallax(sectionRef: RefObject<HTMLElement | null>): {
  video: number;
  overlay: number;
  videoScale: number;
} {
  const [layers, setLayers] = useState({ video: 0, overlay: 0, videoScale: 1 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const y = window.scrollY - top;

      setLayers({
        video: y * 0.52,
        overlay: y * 0.22,
        videoScale: 1 + Math.min(Math.max(y, 0) / 2000, 0.06),
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionRef]);

  return layers;
}
