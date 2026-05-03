import { Link } from "react-router-dom";
import { Brain, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individualterapi",
    desc: "Fokusorientert behandling for traumer, angst og depresjon. Jeg tilbyr både EMDR-terapi og ISTDP (korttidsdynamisk terapi).",
    link: "#",
    subservices: [
      { name: "EMDR", path: "/emdr" },
      { name: "ISTDP", path: "/istdp" },
    ],
  },
  {
    icon: Users,
    title: "Foreldreveiledning",
    desc: "Veiledning for foreldre som ønsker bedre verktøy for å håndtere barnets atferd og følelser.",
    link: "/foreldreveiledning",
    subservices: [],
  },
];

const Services = () => {
  return (
    <section id="tjenester" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Tjenester</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-5">
            Tjenester for deg og din familie
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            Jeg tilbyr individualterapi med dokumenterte metoder og foreldreveiledning. 
            Enten du trenger hjelp for deg selv eller som forelder – jeg har løsninger for deg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-background p-8 md:p-10"
            >
              <s.icon className="h-7 w-7 text-terracotta mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-sage-deep mb-3">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">{s.desc}</p>

              {/* Subservices or main link */}
              {s.subservices.length > 0 ? (
                <div className="space-y-2">
                  {s.subservices.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="inline-block text-terracotta hover:underline text-sm font-medium mr-4"
                    >
                      {sub.name} →
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={s.link}
                  className="inline-block text-terracotta hover:underline text-sm font-medium"
                >
                  Les mer →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
