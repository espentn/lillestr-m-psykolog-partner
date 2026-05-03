import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Angst = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Angst – Forståelse og behandling
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Angst er en naturlig følelse, men når den blir overveldende og påvirker hverdagen, 
            kan det være behov for profesjonell hjelp. Jeg tilbyr evidensbasert behandling 
            for angstlidelser.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er angst?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Angst er en følelse av frykt eller uro som er proporsjonal med en opplevd trussel. 
              Det er en normal del av menneskelivet, men når angsten blir kronisk og interfererer 
              med dagliglivet, kalles det en angstlidelse.
            </p>
            <p>
              Angst kan manifestere seg som panikkanfall, generalisert uro, sosial angst, 
              spesifikke fobier eller andre former. Symptomene kan være både psykiske og fysiske.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Symptomer på angst</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Urolig følelse eller nervøsitet</li>
            <li>Rask hjerteslag eller brystsmerter</li>
            <li>Svimmelhet eller svakhetsfølelse</li>
            <li>Andedrettsvansker</li>
            <li>Søvnvansker</li>
            <li>Konsentrasjonsvanskigheter</li>
            <li>Muskelspaning</li>
            <li>Unngåelse av situasjoner</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av angst</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Angst reagerer meget godt på behandling. EMDR, ISTDP og kognitivterapi er 
              alle effektive metoder. Behandlingen hjelper deg til å forstå hva som utløser 
              angsten og å utvikle verkemidler for å håndtere den.
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

export default Angst;
