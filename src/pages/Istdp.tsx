import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Istdp = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        {/* HEADER */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            ISTDP – Korttidsdynamisk terapi
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            ISTDP (Intensive Short-Term Dynamic Psychotherapy) er en fokusert og intensiv terapiform 
            som hjelper deg å få tilgang til konfliktfylte følelser og arbeide med mekanismer som 
            hemmer deg i hverdagen. Metoden er særlig effektiv for mennesker som ønsker raskere endring.
          </p>
        </section>

        {/* HVA ER ISTDP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva er ISTDP?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              ISTDP er en psykoterapiform basert på psykodynamisk teori, men med fokus på rask og 
              målrettet arbeidsmetode. Terapeuten arbeider aktivt for å hjelpe deg å identifisere 
              og arbeide med ubevisste konflikter som ligger bak dine symptomer og vansker.
            </p>

            <p>
              I ISTDP fokuseres det på å hjelpe deg å få bedre tilgang til konfliktfylte følelser ved å 
              arbeide med unngåelse av følelser som skaper symptomer. Gjennom denne prosessen kan du få 
              dypere innsikt i deg selv og oppnå varig endring.
            </p>

            <p>
              Metoden krever aktivt samarbeid og villighet til å utforske dine følelser, tanker og 
              reaksjonsmønstre. Mange opplever betydelig bedring på relativt kort tid.
            </p>
          </div>
        </section>

        {/* HVORDAN FUNGERER ISTDP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hvordan fungerer ISTDP?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              I ISTDP starter vi med å kartlegge dine symptomer og vansker. Deretter arbeider vi sammen 
              for å identifisere de emosjonelle konfliktene som ligger bakenfor.
            </p>

            <p>
              Gjennom fokusert og aktiv terapi hjelpes du til å møte og arbeide med følelser som du 
              kanskje har unngått – som sinne, tristhet, angst eller skam. Ved å få tilgang til disse 
              følelsene på en trygg måte, kan du oppnå psykologisk frigjøring og endring.
            </p>

            <p>
              Terapeuten er aktiv og fokusert på å veilede deg gjennom denne prosessen, noe som gjør 
              ISTDP meget effektivt for mange mennesker, spesielt de som ønsker raskere resultater 
              enn tradisjonell psykodynamisk terapi.
            </p>
          </div>
        </section>

        {/* HVA KAN ISTDP HJELPE MED */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva kan ISTDP hjelpe med?
          </h2>

          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Angst og panikkanfall</li>
            <li>Depresjon og nedstemthet</li>
            <li>Emosjonell regulering og følelseskontroll</li>
            <li>Samlivsrelasjonelle vansker</li>
            <li>Selvskade eller destruktiv atferd</li>
            <li>Lav selvfølelse og usikkerhet</li>
            <li>Sinne og aggresjon</li>
            <li>Generalisert uro og angst</li>
            <li>Personlige utviklingsspørsmål</li>
          </ul>
        </section>

        {/* FORSKJELL FRA ANNEN TERAPI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva gjør ISTDP spesielt?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              <strong>Fokus og intensitet:</strong> ISTDP er svært fokusert. Vi arbeider med spesifikke 
              problemer og målbare resultater, ikke diffuse eller generelle vansker.
            </p>

            <p>
              <strong>Rask endring:</strong> Mange opplever betydelig bedring på færre sesjoner enn 
              tradisjonell terapi. Dette gjør ISTDP kostnadseffektiv og praktisk for de fleste.
            </p>

            <p>
              <strong>Aktiv terapeut:</strong> I motsetning til noen terapiformer er terapeuten aktivt 
              engasjert i å hjelpe deg med å arbeide gjennom vansker.
            </p>

            <p>
              <strong>Emosjonell frigjøring:</strong> Gjennom å få tilgang til dyptliggende følelser, 
              oppnår mange en følelse av frigjøring og ny energi.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Kom i gang med ISTDP
          </h2>

          <p className="mb-6 text-foreground/80">
            Hvis du ønsker fokusert og effektiv terapi med rask endring, kan ISTDP være rett for deg. 
            Jeg tilbyr kort ventetid og fleksible behandlingstider.
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
              <Link to="/foreldreveiledning" className="text-terracotta hover:underline">
                Foreldreveiledning
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

export default Istdp;
