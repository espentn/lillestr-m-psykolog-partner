import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Emdr = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        {/* HEADER */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            EMDR – Behandling av traumer og belastende opplevelser
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            EMDR (Eye Movement Desensitization and Reprocessing) er en veldokumentert behandlingsmetode 
            særlig egnet for traumatiske opplevelser og belastende minner. Jeg er sertifisert EMDR-terapeut 
            og tilbyr denne behandlingen både fysisk og online.
          </p>
        </section>

        {/* HVA ER EMDR */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva er EMDR?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              EMDR er en psykologisk behandlingsmetode som bruker øyebevegelser eller andre former for 
              bilateral stimulering (øyebevegelser, tapping eller lyder) mens du tenker på traumatiske 
              minner eller belastende opplevelser.
            </p>

            <p>
              Metoden er basert på hvordan hjernen naturlig behandler informasjon og minne. Under EMDR 
              aktiveres begge hjernehemisferene, noe som kan hjelpe hjernen til å reprocessere vanskelige 
              opplevelser på en måte som reduserer den følelsesmessige intensiteten.
            </p>

            <p>
              EMDR er kortere og ofte mer effektiv enn tradisjonell samtaleterapi for traumatiserte personer, 
              selv om det varierer fra person til person.
            </p>
          </div>
        </section>

        {/* HVA KAN EMDR HJELPE MED */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva kan EMDR hjelpe med?
          </h2>

          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Posttraumatisk stresslidelse (PTSD)</li>
            <li>Traumer fra ulykker, vold eller overgrep</li>
            <li>Mobbing og sosiale traumer</li>
            <li>Tap av nære personer</li>
            <li>Arbeidstraumer eller ulykker</li>
            <li>Angst og panikkanfall relatert til traumatiske hendelser</li>
            <li>Søvnvansker fra traumatiske opplevelser</li>
            <li>Skyld og skam relatert til traumatiske hendelser</li>
          </ul>
        </section>

        {/* HVORDAN FOREGÅR EMDR */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hvordan foregår EMDR-behandling?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              EMDR-behandlingen starter med en grundig kartlegging av dine symptomer, historikk og det 
              spesifikke traumet som skal behandles. Vi jobber sammen for å identifisere hvilke minner 
              eller opplevelser som er kilder til dine vansker.
            </p>

            <p>
              Under behandlingen vil du fokusere på det traumatiske minnet mens jeg veileder øyebevegelser 
              eller annen bilateral stimulering. Mange opplever at minnene blir mindre intense og emotionelt 
              belastende under prosessen.
            </p>

            <p>
              Behandlingen kan ta fra noen få sesjoner til flere måneder, avhengig av traumaets karakter 
              og din respons på behandlingen. Målet er å redusere påvirkningen av traumatiske minner 
              slik at du kan leve et mer utfylt og mindre begrenset liv.
            </p>
          </div>
        </section>

        {/* FORSKNING OG EFFEKTIVITET */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Forskning og effektivitet
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              EMDR er anbefalt av Verdens Helseorganisasjon (WHO) og flere nasjonale og internasjonale 
              psykologiske organisasjoner som en førstehåndsbehandling for PTSD.
            </p>

            <p>
              Omfattende klinisk forskning har vist at EMDR er særlig effektiv for mennesker med traumer. 
              Mange opplever betydelig reduksjon i symptomer etter kun noen få sesjoner.
            </p>

            <p>
              Jeg følger internasjonale standarder for EMDR-behandling og holder meg oppdatert på 
              siste forskning og beste praksis innen feltet.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Kom i gang med EMDR
          </h2>

          <p className="mb-6 text-foreground/80">
            Hvis du har opplevd trauma eller belastende hendelser, kan EMDR være en effektiv vei til bedring. 
            Jeg tilbyr kort ventetid og fleksible behandlingstider.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://booking.konfidens.no/c/5b8c1c86-c3f5-4836-a701-aa35ca4d6053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta text-cream px-6 py-3 rounded-sm hover:bg-terracotta/90 transition-colors"
            >
              Bestill time
            </a>

            <Link
              to="/#kontakt"
              className="inline-block border border-sage-deep px-6 py-3 rounded-sm hover:bg-sage-deep/5 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </section>

        {/* NAVIGATION */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            Andre tjenester
          </h2>

          <ul className="space-y-2">
            <li>
              <Link to="/istdp" className="text-terracotta hover:underline">
                ISTDP (Korttidsdynamisk terapi)
              </Link>
            </li>
            <li>
              <Link to="/foreldreveiledning" className="text-terracotta hover:underline">
                Foreldreveiledning
              </Link>
            </li>
            <li>
              <Link to="/#tjenester" className="text-terracotta hover:underline">
                Se alle tjenester
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Emdr;
