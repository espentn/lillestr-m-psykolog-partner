const items = [
  { name: "Individualterapi 45 min", duration: "Dagtid (oppstart senest kl 14.00)", price: "1 650 kr" },
  { name: "Individualterapi 45 min", duration: "Ettermiddag/kveldstid fom kl 15.00", price: "1 750 kr" },
  { name: "Individualterapi 60 min", duration: "Dagtid (oppstart senest kl 14.00)", price: "1 950 kr" },
  { name: "Individualterapi 60 min", duration: "Ettermiddag/kveldstid fom kl 15.00", price: "2 050 kr" },
  { name: "Individualterapi 75 min", duration: "Dagtid", price: "2 390 kr" },
  { name: "Individualterapi 75 min", duration: "Ettermiddag/kveldstid fom kl 15.00", price: "2 490 kr" },
  { name: "Individualterapi 90 min", duration: "Dagtid", price: "2 890 kr" },
  { name: "Individualterapi 90 min", duration: "Ettermiddag/kveldstid fom kl 15.00", price: "2 990 kr" },
  { name: "Uttalelse/erklæring", duration: "Inntil 45 min tidsbruk", price: "1 490 kr" },
  { name: "Veiledning av annet helsepersonell", duration: "Ta direkte kontakt for pris", price: "Kontakt" },
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
          Avbestilling senest 48 timer før timen på virkedag, ellers belastes full pris.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
