const SiteFooter = () => {
  return (
    <footer className="bg-sage-deep border-t border-cream/10 text-cream/70">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-serif text-cream text-lg">Lillestrømpsykologen</p>
        <p>© {new Date().getFullYear()} Psykologspesialist Thea Hasle Arnesen · Org.nr 933 932 699 · Medlem av Norsk Psykologforening</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
