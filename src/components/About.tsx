const About = () => {
  return (
    <section id="om" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Om meg</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-6">
            En psykolog du kan slappe av hos.
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Jeg er spesialist i klinisk voksenpsykologi med over 15 års erfaring
              fra spesialisthelsetjenesten og privat praksis i Lillestrøm-området.
            </p>
            <p>
              Mitt utgangspunkt er at endring krever trygghet. Hos meg skal du få
              tid, varme og faglig dybde – uansett om du sliter med vonde minner,
              depresjon, eller utfordringer i parforholdet.
            </p>
            <p>
              Jeg er medlem av Norsk Psykologforening og sertifisert EMDR-terapeut
              gjennom EMDR Norge.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-sage/20">
            <div>
              <dt className="text-xs uppercase tracking-widest text-sage mb-1">Erfaring</dt>
              <dd className="font-serif text-3xl text-sage-deep">15+ år</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-sage mb-1">Klienter</dt>
              <dd className="font-serif text-3xl text-sage-deep">800+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-sage mb-1">Ventetid</dt>
              <dd className="font-serif text-3xl text-sage-deep">~1 uke</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-sage-soft rounded-sm overflow-hidden shadow-soft">
            <div className="h-full w-full flex items-center justify-center text-sage-deep/40 font-serif text-xl">
              Portrettbilde
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-cream p-6 shadow-card max-w-[220px] hidden md:block">
            <p className="font-serif text-lg text-sage-deep leading-snug">
              «Det viktigste i terapi er at du føler deg sett.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
