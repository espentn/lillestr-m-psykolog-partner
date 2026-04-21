import { Brain, HeartHandshake, Sparkles, CloudRain, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Traumebehandling",
    desc: "Hjelp til å bearbeide vanskelige opplevelser, PTSD og kroppslige reaksjoner i et trygt tempo.",
  },
  {
    icon: Sparkles,
    title: "EMDR-terapi",
    desc: "Anerkjent og dokumentert metode for traumer, angst og fastlåste minner. Sertifisert EMDR-terapeut.",
  },
  {
    icon: HeartHandshake,
    title: "Parterapi",
    desc: "Bedre kommunikasjon, gjenoppbygge tillit og finne tilbake til hverandre – også etter brudd og kriser.",
  },
  {
    icon: CloudRain,
    title: "Depresjon & angst",
    desc: "Forstå hva som holder deg fast og finn tilbake til energi, mening og hverdagsmestring.",
  },
  {
    icon: Stethoscope,
    title: "Klinisk voksenpsykologi",
    desc: "Bred utredning og behandling for voksne. Spesialistgodkjent og medlem av Norsk Psykologforening.",
  },
];

const Services = () => {
  return (
    <section id="tjenester" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Tjenester</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-5">
            Spesialisert psykologhjelp i Lillestrøm
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            Jeg tilbyr individualterapi og parterapi for voksne. Behandlingen tilpasses
            deg – og baserer seg på dokumenterte metoder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-background p-8 md:p-10 transition-colors hover:bg-sage-soft/40"
            >
              <s.icon className="h-7 w-7 text-terracotta mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-sage-deep mb-3">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
