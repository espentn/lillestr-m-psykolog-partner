import { Brain, HeartHandshake, Sparkles, CloudRain, Stethoscope, Monitor } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Traumer & PTSD",
    desc: "Sertifisert EMDR-terapi og traumebehandling for å bearbeide vanskelige opplevelser, PTSD og kroppslige reaksjoner. Hjelp til å minske følelsesmessig ubehag fra fortiden.",
  },
  {
    icon: CloudRain,
    title: "Depresjon & Angst",
    desc: "Forstå hva som holder deg fast og finn tilbake til energi, mening og hverdagsmestring. Dokumenterte metoder for behandling av depresjon og angst.",
  },
  {
    icon: HeartHandshake,
    title: "Korttidsdynamisk terapi (ISTDP)",
    desc: "Fokus på å hjelpe deg å få bedre tilgang til konfliktfylte følelser ved å arbeide med unngåelse av følelser som skaper symptomer og vansker i hverdagen.",
  },
  {
    icon: Stethoscope,
    title: "Livskriser & Utbrenthet",
    desc: "Støtte ved samlivsbrudd, tap av nære, jobbelastninger og andre belastninger i livet. Hjelp til å komme seg gjennom tunge perioder.",
  },
  {
    icon: Monitor,
    title: "Online terapi",
    desc: "Alle konsultasjoner kan gjennomføres via sikker videoløsning. Fleksible timer på dagtid og kveldstid for deg som ikke kan møte fysisk.",
  },
];

const Services = () => {
  return (
    <section id="tjenester" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Tjenester</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-5">
            Psykologhjelp i Lillestrøm – traumer, EMDR, depresjon og angst
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            Jeg tilbyr individualterapi for voksne med dokumenterte metoder. Enten du sliter med traumer, trenger EMDR-terapi, 
            eller har behov for hjelp med depresjon eller angst – jeg tilpasser behandlingen til deg.
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
