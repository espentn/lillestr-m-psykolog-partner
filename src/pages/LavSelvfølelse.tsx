import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const LavSelvfølelse = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Lav selvfølelse – Bygge selvtillit
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Lav selvfølelse kan påvirke alle områder av livet, fra relasjoner til karriere. 
            Gjennom terapi kan du bygge en sunt og realistisk selvbilde.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er lav selvfølelse?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Selvfølelse er hvordan du oppfatter deg selv og din verdi. Lav selvfølelse 
              innebærer å ha negativ oppfatning av seg selv, mangel på tillit og dårlig selvbilde.
            </p>
            <p>
              Lav selvfølelse kan oppstå fra tidligere opplevelser, kritikk, trauma eller 
              kronisk negativ selvsamtale.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tegn på lav selvfølelse</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Negativ selvkritikk og selvbebreidelse</li>
            <li>Unngåelse av utfordringer eller risiko</li>
            <li>Søken etter validering fra andre</li>
            <li>Anpassning og underkastelse for å behage andre</li>
            <li>Perfeksjonisme</li>
            <li>Sosial angst eller tilbaketrekking</li>
            <li>Depresjon eller angst</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Opprustning av selvfølelse</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Gjennom terapi arbeider vi med å identifisere kilder til lav selvfølelse, 
              utfordre negative tanker og bygge et mer balansert selvbilde. Vi fokuserer på 
              dine styrker og på å utvikle selvmedfølelse og akseptans.
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

export default LavSelvfølelse;
