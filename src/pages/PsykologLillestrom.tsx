import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PsykologLillestrom = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        {/* HEADER */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Psykologisk behandling
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Vi kan alle oppleve psykiske plager i utfordrende perioder i livet. Når det blir 
            for vanskelig å håndtere alene, kan psykologisk behandling i en trygg relasjon 
            hjelpe deg videre.
          </p>
        </section>

        {/* HVORDAN KAN BEHANDLING HJELPE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hvordan kan psykologisk behandling hjelpe deg?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              Psykologisk behandling kan hjelpe deg dersom du kjenner deg trist og strever med å finne 
              like mye glede i hverdagen som tidligere.
            </p>

            <p>
              Dersom tankekjør og indre uro blir plagsomt, og gjør det vanskelig å sovne, eller at du 
              kjenner deg ekstra sliten og stresset i hverdagen, kan det være hjelpsomt med samtaleterapi.
            </p>

            <p>
              Opplever du at du sliter med vanskelige følelser uten at du vet hvordan du skal håndtere dem? 
              Har angsten tatt overhånd? Strever du i forholdet til dine nærmeste? Eller har du opplevd 
              å miste noen som var nær deg?
            </p>

            <p>
              For små eller store vansker, kan psykologisk behandling av kortere eller lengre varighet 
              være nyttig. Psykoterapi har dokumentert effekt vist gjennom mange omfattende studier.
            </p>
          </div>
        </section>

        {/* HVA ER SAMTALETERAPI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Hva er samtaleterapi?
          </h2>

          <div className="space-y-4 text-foreground/80">
            <p>
              Samtaleterapi er et samarbeid mellom klient og psykolog, hvor man arbeider mot et felles mål.
            </p>

            <p>
              Det er psykologens oppgave å skape en trygg relasjon hvor klienten kjenner det trygt nok til 
              å kunne utforske sine vansker. Du skal oppleve å kjenne deg forstått og respektert i møtet 
              med din psykolog.
            </p>

            <p>
              Dere skal sammen bli bedre kjent med dine følelser, tanker og din atferd, og gjøre endringer 
              slik at du når dine mål og mestrer dine utfordringer.
            </p>
          </div>
        </section>

        {/* HJELP MED */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Psykologisk behandling kan hjelpe med:
          </h2>

          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Livsbelastninger (samlivsbrudd, tap av nære, jobbelastninger osv)</li>
            <li>Traumatiske opplevelser</li>
            <li>Depresjon</li>
            <li>Angst</li>
            <li>Utbrenthet og stressreaksjoner</li>
            <li>Uro og bekymring</li>
            <li>Lavt selvbilde</li>
            <li>Vansker i relasjoner til andre</li>
            <li>Uheldige mestringsstrategier</li>
            <li>Ensomhet</li>
            <li>Personlig utvikling</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Kom i gang
          </h2>

          <p className="mb-6 text-foreground/80">
            Er du klar for å ta første steg? Jeg tilbyr kort ventetid og fleksible 
            behandlingstider både fysisk og online.
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
      </main>
      <SiteFooter />
    </div>
  );
};

export default PsykologLillestrom;
