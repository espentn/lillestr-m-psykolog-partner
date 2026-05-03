import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Depresjon = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Depresjon – Hjelp og håp
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Depresjon er mer enn å være lei seg. Det er en alvorlig psykisk lidelse som påvirker 
            tankene, følelsene, energien og evnen til å fungere. Jeg tilbyr effektiv behandling 
            for depresjon.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er depresjon?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Depresjon er en psykisk lidelse karakterisert av vedvarende tristesse, håpløshet 
              og mangel på interesse for aktiviteter. Det er ikke noe som bare "går over" og 
              krever ofte profesjonell behandling.
            </p>
            <p>
              Depresjon kan variere fra mild til alvorlig, og kan oppstå som et engangstilfelle 
              eller som gjentakende episoder.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Symptomer på depresjon</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Vedvarende tristesse eller tomt sinnelag</li>
            <li>Tap av interesse for aktiviteter du pleide å nyte</li>
            <li>Endringer i appetitt eller vekt</li>
            <li>Søvnvansker eller oversøvn</li>
            <li>Utmattelse og mangel på energi</li>
            <li>Følelse av verdiløshet eller skyldfølelse</li>
            <li>Vansker med konsentrasjon eller beslutninger</li>
            <li>Tanker på død eller selvskade</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av depresjon</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Psykologisk behandling for depresjon er svært effektiv. Gjennom samtaleterapi 
              arbeider vi med å forstå hva som forverrer depresionen, og vi utvikler strategier 
              for å bygge tilbake aktivitet, mening og glede i livet ditt.
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

export default Depresjon;
