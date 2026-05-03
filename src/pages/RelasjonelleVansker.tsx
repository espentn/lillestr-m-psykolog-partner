import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const RelasjonelleVansker = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Relasjonelle vansker – Bedre forhold
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Problemer i romantiske forhold, familie eller vennskaper kan være veldig belastende. 
            Gjennom terapi kan du få bedre forståelse og forbedre dine relasjoner.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er relasjonelle vansker?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Relasjonelle vansker oppstår når det er konflikt, mangel på kommunikasjon eller 
              utidig attraktivitet i relasjoner. Dette kan påvirke alle typer forhold – romantiske, 
              familier eller vennskaper.
            </p>
            <p>
              Ofte handler relasjonelle problemer om underliggende mønstre, ulløste konflikter 
              eller manglende kommunikasjonsevner.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tegn på relasjonelle vansker</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Hyppige konflikter eller uenigheter</li>
            <li>Manglende kommunikasjon</li>
            <li>Følelse av distanse eller fremmedhet</li>
            <li>Gjentakende negative mønstre</li>
            <li>Manglende tillid eller mistillit</li>
            <li>Infidelitet eller utroskap</li>
            <li>Ulikheter i verdier eller livsmål</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av relasjonelle vansker</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Terapi kan hjelpe deg til å forstå mønstre i dine relasjoner, til å forbedre 
              kommunikasjonsevner og til å løse underliggende konflikter. Vi arbeider også med 
              selvforståelse og personlig vekst som kan forbedre alle dine relasjoner.
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

export default RelasjonelleVansker;
