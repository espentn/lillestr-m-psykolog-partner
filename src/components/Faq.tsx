import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Trenger jeg henvisning fra fastlegen?",
    a: "Nei. Som privatpraktiserende psykolog kan du ta direkte kontakt uten henvisning. Det er heller ingen ventelister via spesialisthelsetjenesten å forholde seg til.",
  },
  {
    q: "Hvor lang er ventetiden?",
    a: "Vanligvis får du første time innen 1–2 uker. Ring eller send e-post for ledige tider.",
  },
  {
    q: "Hva er EMDR, og hvem passer det for?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) er en anerkjent metode for behandling av traumer, PTSD, angst og fastlåste minner. Metoden er anbefalt av WHO og brukes av meg som sertifisert EMDR-terapeut.",
  },
  {
    q: "Hva koster en time?",
    a: "Prisen varierer fra kr 1650 til kr 2990 avhengig av timetype og tidspunkt (dagtid eller ettermiddag/kveldstid). Alle konsultasjoner kan gjennomføres via sikker videoløsning om ønskelig.",
  },
  {
    q: "Kan jeg få time på kveldstid?",
    a: "Ja, Lillestrømpsykologen tilbyr timer både på dagtid og kveldstid.",
  },
  {
    q: "Hvor ligger kontoret?",
    a: "Kontoret ligger i Storgata 14A i Lillestrøm sentrum (i 4. etg. i NeuroClinic Norway, samme bygg som Olivia Restaurant), 5 minutters gange fra Lillestrøm stasjon. God parkering i Byhaven P-hus, Voldgata 7-9 i nærheten.",
  },
  {
    q: "Har du taushetsplikt?",
    a: "Ja. Som autorisert psykolog er jeg underlagt streng taushetsplikt etter helsepersonelloven.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Spørsmål & svar</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3">
            Det folk lurer på
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-sage/20">
              <AccordionTrigger className="text-left font-serif text-lg text-sage-deep hover:text-terracotta hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
