import theaImage from "@/assets/thea.png";
  return (
    <section id="om" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Om meg</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-6">
            Thea Hasle Arnesen
          </h2>
          <p className="text-xs uppercase tracking-widest text-sage mb-4">Spesialist i klinisk voksenpsykologi</p>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Jeg er psykologspesialist med privatpraksis som tilbyr samtaleterapi på dagtid, sentralt i Lillestrøm eller online. 
              Gjennom Lillestrømpsykologen tilbyr jeg psykologtjenester i form av psykologisk behandling og veiledning til voksne. 
              Jeg har mange års erfaring innen det offentlige helsevesenet med arbeid i poliklinikk, døgnavdeling, akutteam og ambulantteam.  
            </p>
            <p>
              Jeg har erfaring med et bredt spekter av psykiske vansker og livsutfordringer, men har arbeidet særlig mye med problemstillinger som depresjon, 
              angst, traumer (PTSD) og livskriser og utbrenthet. Jeg benytter meg av dokumentert effektive behandlingsmetoder. 
              Jeg arbeider mye med korttidsdynamisk psykoterapi (ISTDP) hvor fokus rettes mot å hjelpe deg å få bedre tilgang til dine konfliktfylte 
              følelser ved å arbeide med unngåelse av følelser som skaper symptomer, problemer og vansker med å fungere i hverdagen. 
              Jeg arbeider også med elementer av emosjonsfokusert psykoterapi og med sensorimotoriske teknikker. 
              Jeg arbeider også mye med traumebehandling ved bruk av EMDR hvor fokus rettes mot å minske følelsesmessig ubehag relatert 
              til ubehagelige opplevelser i fortiden. Jeg har en dynamisk forståelsesramme og integrerer ulike teorier og metoder. 
              Det er min jobb som psykolog å tilpasse terapien til den enkelte klient.
            </p>
            <p>
              Utdanning

                Profesjonsstudiet for psykologi, ved Universitetet i Bergen. Autorisert psykolog og helsepersonell.

                Spesialisering i klinisk voksenpsykologi ved Institutt for Aktiv Psykoterapi.

                Godkjent psykologspesialist av Norsk Psykologforening.

                EMDR Trinn 1 og 2

                Sensorimotorisk Psykoterapi nivå 1

                Tryggere Traumeterapeut

                Intensive Short-Term Psychotherapy (ISTDP)  videreutdanning 3,5 år
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-sage/20">
            <div>
              <dt className="text-xs uppercase tracking-widest text-sage mb-1">Erfaring</dt>
              <dd className="font-serif text-3xl text-sage-deep">15+ år</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-sage mb-1">Klienter</dt>
              <dd className="font-serif text-3xl text-sage-deep">800+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-sage mb-1">Ventetid</dt>
              <dd className="font-serif text-3xl text-sage-deep">~1 uke</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-lilac/30 rounded-sm overflow-hidden shadow-soft">
            {<img src={theaImage} alt="Thea Hasle Arnesen" className="h-full w-full object-cover" /> }
            <div className="h-full w-full flex items-center justify-center text-sage-deep/40 font-serif text-xl">
              
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-cream p-6 shadow-card max-w-[220px] hidden md:block">
            <p className="font-serif text-lg text-sage-deep leading-snug">
              «Det viktigste i terapi er at du føler deg sett.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );


export default About;
