import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Tvangslidelser = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Tvangslidelser (OCD) – Frigjøring fra tvang
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Tvangslidelser (OCD) er karakterisert av påtrengende tanker og repetitive atferd. 
            Med riktig behandling kan du få kontroll over tvangen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er tvangslidelser?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Tvangslidelser (Obsessive-Compulsive Disorder) består av to komponenter: obsesjonene 
              (påtrengende tanker) og kompulsjonene (repetitiv atferd). Personen med OCD føler seg 
              tvunget til å utføre handlinger for å redusere angsten fra obsesjonene.
            </p>
            <p>
              OCD handler ikke om å være ordentlig eller organisert – det er en alvorlig psykisk lidelse 
              som kan være veldig plagsom.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Symptomer på OCD</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Påtrengende tanker om kontaminasjon, skade eller tablå</li>
            <li>Overdreven rengjøring eller vaskinger</li>
            <li>Ordnings- eller symmetritvang</li>
            <li>Telling eller repetisjon</li>
            <li>Kontrolltvang</li>
            <li>Påtrengende aggressive eller seksualiserte tanker</li>
            <li>Intense angst eller ubehag</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av tvangslidelser</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Kognitiv atferdsterapi (KAT) med eksposisjon og responsforholdelse er gullstandarden 
              for behandling av OCD. Gjennom graduell eksposisjon for tvangen og ved å unngå å 
              utføre kompulsjonene, lærer hjernen at angsten avtar av seg selv.
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

export default Tvangslidelser;
