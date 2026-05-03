import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Foreldreveiledning = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        {/* HEADER */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Foreldreveiledning – Støtte for foreldre
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Foreldrerollen kan være utfordrende. Jeg tilbyr foreldreveiledning for foreldre som ønsker 
            bedre verktøy for å håndtere barnets atferd, følelser og relasjonelle utfordringer.
          </p>
        </section>

        {/* HVA ER FORELDREVEILEDNING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva er foreldreveiledning?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              Foreldreveiledning er en form for konsultasjon og veiledning hvor jeg arbeider med deg 
              som forelder for å styrke dine evner og selvtillit. Vi fokuserer på konkrete strategier 
              og verktøy som kan hjelpe deg med utfordringer i hverdagen.
            </p>

            <p>
              I stedet for å fokusere på barnets atferd alene, arbeider vi med hvordan du som forelder 
              kan påvirke situasjonen. Fokus er på det du kan endre – dine reaksjoner, kommunikasjonsmåte 
              og grensesetting.
            </p>

            <p>
              Foreldreveiledning er kortere og mindre tidkrevende enn fullstendig famileterapi, og den 
              fokuserer på praktiske løsninger som du kan implementere umiddelbart hjemme.
            </p>
          </div>
        </section>

        {/* HVOR KAN FORELDREVEILEDNING HJELPE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva kan foreldreveiledning hjelpe med?
          </h2>

          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Grensesetting og disiplin som funker</li>
            <li>Håndtering av barns sinne og følelsesutbrudd</li>
            <li>Konflikt mellom barn og forelder</li>
            <li>Atferdsvansker hjemme eller på skolen</li>
            <li>Søvnvansker og rutiner</li>
            <li>Oppmerksomhetsvansker og konsentrasjonsproblemer</li>
            <li>Angst eller depresjon hos barn</li>
            <li>Mobbing eller sosiale vansker</li>
            <li>Kommunikasjon mellom foreldre og barn</li>
            <li>Selvtillit og selvbilde hos barn</li>
          </ul>
        </section>

        {/* HVORDAN FOREGÅR FORELDREVEILEDNING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hvordan foregår foreldreveiledning?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              Vi starter med et møte hvor jeg får en grundig forståelse av situasjonen, barnets alder, 
              karakteristikker og de spesifikke utfordringene du står overfor.
            </p>

            <p>
              Basert på dette utviklinger vi konkrete strategier og verktøy tilpasset din familie og 
              ditt barn. Jeg gir deg praktiske Tips og teknikker som du kan prøve hjemme.
            </p>

            <p>
              I oppfølgingsmøter evaluerer vi hvordan strategiene fungerer, gjør justeringer etter behov, 
              og arbeider med nye utfordringer. Fokus er alltid på det som er praktisk og gjennomførbart 
              for deg som forelder.
            </p>

            <p>
              Foreldreveiledning kan foregå over få sesjoner eller lengre perioder, avhengig av 
              kompleksiteten av utfordringene og ditt behov for oppfølging.
            </p>
          </div>
        </section>

        {/* FORDELER MED FORELDREVEILEDNING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Fordeler med foreldreveiledning
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              <strong>Fokus på endring:</strong> Ved å endre dine som forelder, endres ofte barnet også. 
              Dette er en effektiv vei til bedring.
            </p>

            <p>
              <strong>Praktiske løsninger:</strong> Du får konkrete verktøy og strategier som du kan 
              implementere umiddelbart.
            </p>

            <p>
              <strong>Styrket foreldreskap:</strong> Du får økt selvtillit og trygghet i din rolle som 
              forelder.
            </p>

            <p>
              <strong>Kortere og billigere:</strong> Foreldreveiledning er gjerne kortere enn terapi 
              og fokuserer på spesifikke mål.
            </p>

            <p>
              <strong>Bedre relasjon:</strong> Bedre kommunikasjon og forståelse mellom deg og barnet 
              kan forbedre relasjon og trivsel.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Kom i gang med foreldreveiledning
          </h2>

          <p className="mb-6 text-foreground/80">
            Som forelder kan du få støtte og veiledning for å håndtere utfordringer på en bedre måte. 
            Jeg tilbyr kort ventetid og fleksible tidspunkter.
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
              <Link to="/emdr" className="text-terracotta hover:underline">
                EMDR (Traumebehandling)
              </Link>
            </li>
            <li>
              <Link to="/istdp" className="text-terracotta hover:underline">
                ISTDP (Korttidsdynamisk terapi)
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

export default Foreldreveiledning;
