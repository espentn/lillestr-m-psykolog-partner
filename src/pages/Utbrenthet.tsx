import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Utbrenthet = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Utbrenthet – Gjenopprette balanse
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Utbrenthet oppstår når langvarig stress og overbelastning fører til fysisk og emosjonell 
            utmattelse. Med riktig behandling kan du gjenopprette energi og balanse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er utbrenthet?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Utbrenthet (burnout) er en tilstand av fysisk, emosjonell og mental utmattelse 
              som oppstår fra kronisk arbeidsstress. Det kjennetegnes av uttømmelse, cynisme 
              og følelse av redusert effektivitet.
            </p>
            <p>
              Utbrenthet er mer enn bare å være trøtt – det er en alvorlig tilstand som krever 
              intervention og endringer.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Symptomer på utbrenthet</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Ekstrem utmattelse eller tretthet</li>
            <li>Negativitet eller cynisme mot jobben</li>
            <li>Redusert produktivitet eller effektivitet</li>
            <li>Emosjonell distansering fra arbeid</li>
            <li>Fysiske symptomer som hodepine eller søvnvansker</li>
            <li>Irritabilitet eller dårlig humør</li>
            <li>Følelse av håpløshet om jobben</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av utbrenthet</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Utbrenthet krever både psykologisk behandling og praktiske endringer. Gjennom 
              samtaleterapi arbeider vi med å forstå årsakene, gjenopprette selvtilliten og 
              utvikle strategier for å håndtere stress og etablere grenser.
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

export default Utbrenthet;
