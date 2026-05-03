import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Stress = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Stress – Håndtering og lindring
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Stress er en naturlig respons på utfordringer, men når det blir kronisk kan det 
            påvirke helsen. Jeg tilbyr teknikker og terapi for å håndtere og redusere stress.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er stress?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Stress er en fysiologisk og psykologisk respons på krav eller trusler. Litt stress 
              kan være motiverende, men kronisk stress kan ha negative konsekvenser for fysisk 
              og psykisk helse.
            </p>
            <p>
              Stress påvirker kroppen, tankene og atferden, og kan føre til både kortvarige 
              og langsiktige helseplager.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Symptomer på stress</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Muskelspaning eller smerter</li>
            <li>Hodesmerter eller migrene</li>
            <li>Søvnvansker</li>
            <li>Mageproblemer</li>
            <li>Irritabilitet eller dårlig humør</li>
            <li>Konsentrasjonsvanskigheter</li>
            <li>Forverring av eksisterende helsetilstander</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Håndtering av stress</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Stressbehandling involverer å identifisere kilder til stress, å utvikle mestringsstrategier 
              og å gjøre livsstilsendringer. Gjennom terapi lærer du teknikker for avslapning, 
              problemløsning og emosjonell regulering.
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

export default Stress;
