import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ target, prefix = '', suffix = '', label, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2 tabular-nums">
        {prefix}{count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="text-slate-400 text-xs sm:text-sm">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
