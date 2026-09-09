type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  aside?: string;
};

export function PageHero({ eyebrow, title, lead, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-hero-lead">{lead}</p>
      {aside ? <p className="page-hero-aside">{aside}</p> : null}
    </section>
  );
}
