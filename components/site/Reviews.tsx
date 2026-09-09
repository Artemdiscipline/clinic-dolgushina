import { reviewsConfig } from '@/data/site';

export function Reviews() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-copy">
        <p className="eyebrow">Отзывы на площадках</p>
        <h2 id="reviews-title">Проверьте впечатления посетителей</h2>
        <p>
          Мы не переносим сюда неподтверждённые оценки и тексты. Смотрите
          актуальные отзывы напрямую на независимых площадках.
        </p>
        {reviewsConfig.lastCheckedAt ? (
          <p className="small-note">Данные проверены: {reviewsConfig.lastCheckedAt}</p>
        ) : null}
      </div>
      <div className="review-platforms">
        {reviewsConfig.platforms.map((platform) => (
          <a href={platform.url} target="_blank" rel="noreferrer" key={platform.name}>
            <span>{platform.name}</span>
            {platform.rating !== null && platform.reviewCount !== null ? (
              <strong>{platform.rating} · {platform.reviewCount} отзывов</strong>
            ) : (
              <strong>Смотреть актуальную оценку</strong>
            )}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
