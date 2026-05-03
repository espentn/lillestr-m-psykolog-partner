import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Traumer = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Traumer – Healing og recovery
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Traumer kan være en resultatet av overgrep, ulykker, vold eller andre belastende hendelser. 
            Med EMDR-behandling og trauma-fokusert terapi kan du heles fra traumatiske opplevelser.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er traumer?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Et trauma er en psykologisk reaksjon på en overveldet eller skremmende hendelse. 
              Det kan være en enkelt hendelse eller gjentakende opplevelser. Traumer påvirker 
              hvordan hjernen lagrer og behandler minner.
            </p>
            <p>
              Traumer kan få vedvarende effekter som påvirker relasjonene dine, arbeid og dagliglivet.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Symptomer på trauma</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Flashbacks eller gjengår av traumet</li>
            <li>Mareritt eller søvnvansker</li>
            <li>Unngåelse av påminnelser</li>
            <li>Hypervigilans eller overstyring</li>
            <li>Negativ selvoppfatning</li>
            <li>Tvetydighet eller emosjonell numbing</li>
            <li>Selvskadende atferd</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av traumer</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              EMDR er en spesialisert behandlingsmetode som er særlig effektiv for traumer. 
              Jeg er sertifisert EMDR-terapeut og tilbyr denne behandlingen. EMDR hjelper hjernen 
              din til å reprocessere traumatiske minner slik at de mister sin følelsesmessige kraft.
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

export default Traumer;
