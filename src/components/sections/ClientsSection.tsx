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
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(180,50%,50%,0.03),transparent_40%)] pointer-events-none" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Clientes e Parceiros —</span>
          <h2 className="section-title text-primary">
            Ecossistema Chordata
          </h2>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
          {clients.map((client) => (
            <div
              key={client}
              className="card-light-interactive p-4 flex items-center justify-center text-center min-h-[80px]"
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
