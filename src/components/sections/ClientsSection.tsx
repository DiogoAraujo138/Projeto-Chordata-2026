import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  'Welpen', 'CPEA', 'BioSul', 'FlixPet', 'UCS', 'Pirajú Veterinária',
  'Atacadão da Ração', 'Santo Chico', 'Turma do Frank', 'DogDoc',
  'Pet Sperk', 'DaSerra', 'Delphis', 'MP Presidente', 'Wazlawik',
  'Daiana Rauber', 'Cesal', 'NuPet', 'Boulevard', 'DescomplicaVet',
  'Gatices', 'Projetta', 'Anclivepa',
];

const ClientsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div ref={ref} className={`container mx-auto px-4 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Clientes e Parceiros —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-primary">
            Ecossistema Chordata
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-card border border-border rounded-2xl p-4 flex items-center justify-center text-center hover:shadow-lg hover:border-chordata-teal/30 hover:-translate-y-1 transition-all duration-300 min-h-[80px]"
            >
              <span className="font-inter text-sm font-medium text-primary">{client}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-inter text-sm mt-8">
          Presentes em 5 estados, atendendo os mais diversos segmentos do mercado pet/vet
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
