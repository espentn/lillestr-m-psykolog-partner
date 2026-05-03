import theaImage from "@/assets/thea.png";

const Practical = () => {
  return (
    <section id="praktisk" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-sage">Praktiske opplysninger</span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-deep mt-3 mb-6">
            Praktiske opplysninger
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Medlem av Norsk Psykologforening.
            </p>

            <p>
              Lillestrømpsykologen har taushetsplikt, som innebærer at opplysninger ikke deles med andre.
            </p>

            <p>
              Lillestrømpsykologen tilbyr behandling uten driftstilskudd, som vil si at en må betale fullpris for behandlingstimene.
            </p>

            <p>
              Det er ikke behov for henvisning fra lege.
            </p>

            <p>
              Avtalte timer må avbestilles/endres innen 48 timer på virkedag før oppsatt tidspunkt, uansett årsak. Timeavtaler mandager må avbestilles/endres torsdag før kl 12.00. Timer faktureres i sin helhet, uavhengig av årsak.
            </p>

            <p>
              Lillestrømpsykologen har ingen akuttfunksjon, og er heller ikke del av det offentlige helsevesenet. Ved behov for koordinerte tjenester og omfattende vansker, er ikke dette rett tilbud.
            </p>

            <p>
              Timer bookes direkte i kalender via Konfidens.com. Lillestrømpsykologen kan også nåes via sms eller e-post, men er dessverre ikke tilgjengelig for drøfting pr tlf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practical;
