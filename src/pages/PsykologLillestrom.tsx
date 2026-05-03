import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PsykologLillestrom = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        {/* HERO / INTRO */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Psykolog i Lillestrøm – hjelp med angst, depresjon og livskriser
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            Ser du etter psykolog i Lillestrøm? Jeg tilbyr profesjonell hjelp for deg som
            opplever angst, depresjon, traumer eller står i en krevende livssituasjon.
          </p>

          <p className="text-lg leading-relaxed">
            Som spesialist i klinisk voksenpsykologi med EMDR-sertifisering jobber jeg
            målrettet for å hjelpe deg med å forstå utfordringene dine og finne gode måter
            å håndtere dem på. Du kan møte fysisk i Lillestrøm eller ha samtaler online.
          </p>
        </section>

        {/* HVA JEG KAN HJELPE MED */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva kan jeg hjelpe deg med?
          </h2>

          <ul className="space-y-2 list-disc pl-5">
            <li>Angst og uro</li>
            <li>Depresjon og nedstemthet</li>
            <li>Stress og utbrenthet</li>
            <li>Traumer og belastende opplevelser (EMDR)</li>
            <li>Relasjonsutfordringer</li>
            <li>Livskriser og vanskelige perioder</li>
          </ul>
        </section>

        {/* HVORDAN FOREGÅR DET */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hvordan foregår behandling hos psykolog?
          </h2>

          <p className="mb-4">
            I samtaleterapi jobber vi sammen for å forstå hva som ligger bak det du opplever.
            Du får innsikt i egne tanker og reaksjoner, og vi utforsker konkrete verktøy som
            kan hjelpe deg videre.
          </p>

          <p>
            Behandlingen tilpasses deg og din situasjon. Målet er å skape endring, økt
            mestring og bedre livskvalitet over tid.
          </p>
        </section>

        {/* OM MEG (KORT) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Om psykologen
          </h2>

          <p className="mb-4">
            Jeg er spesialist i klinisk voksenpsykologi og har erfaring med behandling
            av et bredt spekter av psykiske utfordringer.
          </p>

          <p>
            Jeg er også sertifisert i EMDR, en behandlingsmetode som er særlig effektiv
            ved traumer og belastende opplevelser.
          </p>
        </section>

        {/* LOKAL SEO */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Psykolog i Lillestrøm sentrum
          </h2>

          <p>
            Kontoret ligger sentralt i Lillestrøm, med kort reisevei fra Oslo og resten
            av Romerike. Det er også mulig å gjennomføre samtaler online dersom det passer bedre.
          </p>

          <p className="mt-4">
            Adresse: Storgata 14A, 2000 Lillestrøm
          </p>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Bestill time
          </h2>

          <p className="mb-6">
            Det er kort ventetid på timer, og du kan enkelt bestille time online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://booking.konfidens.no/c/5b8c1c86-c3f5-4836-a701-aa35ca4d6053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta text-cream px-6 py-3 rounded-sm"
            >
              Bestill time
            </a>

            <Link
              to="/#kontakt"
              className="inline-block border px-6 py-3 rounded-sm"
            >
              Kontakt
            </Link>
          </div>
        </section>

        {/* INTERN LINKING */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            Les mer
          </h2>

          <ul className="space-y-2">
            <li>
              <Link to="/#tjenester">
                Se alle tjenester
              </Link>
            </li>
            <li>
              <Link to="/#om-meg">
                Les mer om meg
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PsykologLillestrom;
