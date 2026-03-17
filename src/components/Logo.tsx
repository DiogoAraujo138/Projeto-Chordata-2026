import { useState, useRef, useEffect } from 'react';

// Import all logos
import chordataPrincipal from '@/assets/logos/chordata-principal.png';
import chordataAnalytics from '@/assets/logos/chordata-analytics.png';
import mentallvet from '@/assets/logos/mentallvet.png';
import descomplicavet from '@/assets/logos/descomplicavet.png';
import vetconnection from '@/assets/logos/vetconnection.png';

const logoMap = {
  principal: chordataPrincipal,
  analytics: chordataAnalytics,
  mentallvet: mentallvet,
  descomplicavet: descomplicavet,
  vetconnection: vetconnection,
} as const;

export type LogoVariant = keyof typeof logoMap;
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';

const sizeMap: Record<LogoSize, { width: number; height: number; className: string }> = {
  xs: { width: 24, height: 24, className: 'h-6 w-auto' },
  sm: { width: 32, height: 32, className: 'h-8 w-auto' },
  md: { width: 40, height: 40, className: 'h-10 w-auto' },
  lg: { width: 64, height: 64, className: 'h-16 w-auto' },
  xl: { width: 80, height: 80, className: 'h-20 w-auto' },
  hero: { width: 200, height: 200, className: 'h-28 sm:h-32 md:h-40 lg:h-44 w-auto' },
};

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  alt?: string;
  rounded?: boolean;
  glow?: boolean;
}

const Logo = ({
  variant = 'principal',
  size = 'md',
  className = '',
  alt,
  rounded = false,
  glow = false,
}: LogoProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sizeConfig = sizeMap[size];
  const src = logoMap[variant];
  const altText = alt || `Logo ${variant}`;

  return (
    <div
      ref={imgRef}
      className={`inline-flex items-center justify-center transition-all duration-500 ${
        rounded ? 'rounded-xl overflow-hidden' : ''
      } ${glow ? 'drop-shadow-[0_0_12px_hsla(180,50%,50%,0.3)]' : ''} ${className}`}
    >
      {inView ? (
        <img
          src={src}
          alt={altText}
          width={sizeConfig.width}
          height={sizeConfig.height}
          className={`${sizeConfig.className} object-contain transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          decoding="async"
        />
      ) : (
        <div
          className={`${sizeConfig.className} bg-white/10 animate-pulse rounded`}
          style={{ width: sizeConfig.width, height: sizeConfig.height }}
        />
      )}
    </div>
  );
};

export default Logo;
export { logoMap };
