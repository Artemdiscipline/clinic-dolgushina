type ResultMaterial = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  consentConfirmed: boolean;
};

type BeforeAfterProps = {
  materials: ResultMaterial[];
};

/**
 * Компонент ничего не показывает, пока клиника не добавит собственные
 * материалы и не подтвердит согласие каждого клиента на публикацию.
 */
export function BeforeAfter({ materials }: BeforeAfterProps) {
  const publishable = materials.filter((item) => item.consentConfirmed);
  if (publishable.length === 0) return null;

  return (
    <section className="results-section" aria-labelledby="results-title">
      <h2 id="results-title">Результаты процедур</h2>
      <div className="results-grid">
        {publishable.map((item) => (
          <figure key={item.beforeSrc + item.afterSrc}>
            <div>
              <Image src={item.beforeSrc} alt={'До: ' + item.alt} width="640" height="640" />
              <Image src={item.afterSrc} alt={'После: ' + item.alt} width="640" height="640" />
            </div>
            <figcaption>{item.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
import Image from 'next/image';
