import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedCounter from '@/components/AnimatedCounter';

const activeStates = ['RS', 'SC', 'PR', 'SP', 'MG', 'PA', 'MA', 'AP'];

const stateLabels: Record<string, string> = {
  RS: 'Rio Grande do Sul (sede)',
  SC: 'Santa Catarina',
  PR: 'Paraná',
  SP: 'São Paulo',
  MG: 'Minas Gerais',
  PA: 'Pará',
  MA: 'Maranhão',
  AP: 'Amapá',
};

// Simplified Brazil state paths
const statePaths: Record<string, string> = {
  AP: 'M280,60 L300,40 L320,55 L315,80 L295,90 Z',
  AM: 'M120,100 L220,80 L280,90 L270,160 L200,180 L120,160 Z',
  PA: 'M270,80 L360,70 L400,100 L390,160 L320,180 L270,160 Z',
  RR: 'M160,30 L200,20 L220,50 L200,80 L160,70 Z',
  RO: 'M140,170 L200,180 L200,220 L160,230 L130,210 Z',
  AC: 'M60,180 L130,170 L130,210 L80,220 L50,200 Z',
  TO: 'M330,170 L360,160 L370,230 L350,280 L320,270 L320,210 Z',
  MA: 'M370,100 L420,90 L430,140 L400,170 L370,160 Z',
  PI: 'M400,140 L430,130 L440,190 L420,230 L390,210 L390,170 Z',
  CE: 'M440,100 L480,95 L480,140 L450,150 L435,130 Z',
  RN: 'M485,110 L510,105 L510,130 L490,135 Z',
  PB: 'M480,135 L510,130 L510,150 L480,155 Z',
  PE: 'M460,155 L510,150 L510,170 L465,175 Z',
  AL: 'M480,175 L510,172 L510,190 L485,190 Z',
  SE: 'M475,190 L500,190 L498,205 L475,205 Z',
  BA: 'M390,210 L480,195 L490,210 L470,300 L410,320 L370,290 Z',
  MT: 'M200,200 L320,210 L310,310 L230,320 L190,270 Z',
  MS: 'M230,320 L300,310 L310,380 L270,400 L230,380 Z',
  GO: 'M310,270 L380,260 L390,330 L350,360 L300,350 L300,310 Z',
  DF: 'M350,295 L365,295 L365,310 L350,310 Z',
  MG: 'M380,300 L460,290 L470,350 L420,380 L370,370 L365,330 Z',
  ES: 'M470,310 L500,305 L500,345 L475,350 Z',
  RJ: 'M440,380 L480,370 L485,390 L450,395 Z',
  SP: 'M340,370 L420,380 L430,410 L370,420 L330,400 Z',
  PR: 'M300,400 L370,400 L375,440 L310,450 L290,430 Z',
  SC: 'M310,450 L370,445 L375,475 L320,480 Z',
  RS: 'M290,480 L340,475 L360,490 L340,540 L290,550 L270,520 Z',
};

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="atuacao" className="py-20 md:py-32 bg-chordata-navy relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chordata-teal/20 to-transparent" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Onde Atuamos —</span>
          <h2 className="section-title text-white">
            Presença Nacional & Impacto
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Brazil Map */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <svg
                viewBox="30 10 500 560"
                className="w-full h-auto drop-shadow-2xl"
                xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/United_States_geographical_collation.svg/960px-United_States_geographical_collation.svg.png"
              >
                {Object.entries(statePaths).map(([code, d]) => {
                  const isActive = activeStates.includes(code);
                  return (
                    <g key={code}>
                      <path
                        d={d}
                        fill={isActive ? 'hsl(180, 50%, 50%)' : 'hsl(224, 53%, 30%)'}
                        stroke="hsl(224, 53%, 20%)"
                        strokeWidth="1.5"
                        className={`transition-all duration-300 ${isActive ? 'hover:brightness-125 cursor-pointer hover:drop-shadow-[0_0_8px_hsla(180,50%,50%,0.5)]' : 'opacity-50'}`}
                      />
                      {isActive && (
                        <text
                          x={getCenter(d).x}
                          y={getCenter(d).y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="Inter, sans-serif"
                          className="pointer-events-none select-none"
                          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                        >
                          {code}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {activeStates.map((code) => (
                  <span
                    key={code}
                    className="inline-flex items-center gap-1.5 bg-chordata-teal/10 text-chordata-teal text-xs font-inter font-medium px-3 py-1.5 rounded-full border border-chordata-teal/20 transition-colors hover:bg-chordata-teal/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-chordata-teal" />
                    {stateLabels[code]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sora font-bold text-white text-xl mb-2">
                Nosso Impacto em Números
              </h3>
              <p className="font-inter text-white/55 text-sm leading-relaxed">
                Resultados concretos da nossa atuação no mercado veterinário brasileiro.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card p-6 text-center hover:bg-white/[0.08] transition-colors">
                <AnimatedCounter target={2000} prefix="+" label="Pessoas Movimentadas" />
              </div>
              <div className="glass-card p-6 text-center hover:bg-white/[0.08] transition-colors">
                <AnimatedCounter target={60} prefix="+" label="Projetos de Consultoria" />
              </div>
              <div className="glass-card p-6 text-center hover:bg-white/[0.08] transition-colors">
                <AnimatedCounter target={300} prefix="+" label="Pessoas Capacitadas" />
              </div>
              <div className="glass-card p-6 text-center hover:bg-white/[0.08] transition-colors">
                <AnimatedCounter target={8} label="Estados Atendidos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function getCenter(d: string): { x: number; y: number } {
  const nums = d.match(/[\d.]+/g)?.map(Number) || [];
  let sx = 0, sy = 0, count = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    sx += nums[i];
    sy += nums[i + 1];
    count++;
  }
  return { x: sx / (count || 1), y: sy / (count || 1) };
}

export default LocationSection;
