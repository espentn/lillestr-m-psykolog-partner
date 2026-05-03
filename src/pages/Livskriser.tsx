import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Livskriser = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Livskriser – Hjelp gjennom vanskelige perioder
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Livskriser som samlivsbrudd, tap av nære, jobbkrise eller andre store endringer 
            kan være overveldende. Jeg tilbyr støtte for å hjelpe deg gjennom disse periodene.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er en livskrise?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              En livskrise er en periode med ekstraordinær vanskelighet som krever en betydelig 
              emosjonell eller praktisk justering. Det kan være tap, nedgang eller plutselig endring 
              i livet ditt.
            </p>
            <p>
              Selv om kriser er normale deler av livet, kan profesjonell støtte hjelpe deg til å 
              navigere gjennom dem på en friskere måte.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Vanlige typer livskriser</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Samlivsbrudd eller skilsmisse</li>
            <li>Tap av nære personer</li>
            <li>Alvorlig sykdom eller skade</li>
            <li>Jobbkrise eller arbeidsløshet</li>
            <li>Økonomiske vansker</li>
            <li>Familiekonflikt</li>
            <li>Identitetskrise eller livsmening</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Håndtering av livskriser</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Gjennom samtaleterapi kan du få emosjonell støtte, perspektiv og praktiske strategier 
              for å håndtere krisen. Vi arbeider med å forstå det som har hendt, å bearbeide følelsene, 
              og å finne vei fremover.
            </p>
          </div>
        </section>

        <section className="mb-12">
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
      </main>
      <SiteFooter />
    </div>
  );
};

export default Livskriser;
