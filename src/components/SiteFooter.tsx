const SiteFooter = () => {
  return (
    <footer className="bg-sage-deep border-t border-cream/10 text-cream/70">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-serif text-cream text-lg">Lillestrømpsykologen</p>
        <p>© {new Date().getFullYear()} Lillestrømpsykologen · Org.nr 999 999 999 · Aut. psykolog</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
