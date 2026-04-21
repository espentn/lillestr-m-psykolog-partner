const items = [
  { name: "Individualterapi", duration: "50 min", price: "1 450 kr" },
  { name: "Parterapi", duration: "75 min", price: "2 100 kr" },
  { name: "EMDR-time", duration: "75 min", price: "2 100 kr" },
  { name: "Førstegangssamtale", duration: "60 min", price: "1 450 kr" },
];

const Pricing = () => {
  return (
    <section id="priser" className="py-24 md:py-32 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Priser</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-4">
            Tydelig og forutsigbart
          </h2>
          <p className="text-foreground/70">
            Som privatpraktiserende psykolog uten driftstilskudd dekkes ikke timene av HELFO.
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {items.map((i) => (
            <li key={i.name} className="flex items-baseline justify-between py-6 gap-4">
              <div>
                <p className="font-serif text-xl text-sage-deep">{i.name}</p>
                <p className="text-sm text-foreground/60 mt-1">{i.duration}</p>
              </div>
              <span className="font-serif text-2xl text-terracotta">{i.price}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-foreground/60 text-center mt-8">
          Avbestilling senest 24 timer før timen, ellers belastes full pris.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
