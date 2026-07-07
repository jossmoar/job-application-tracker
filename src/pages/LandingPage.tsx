import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Feature {
  title: string;
  description: string;
}

export function LandingPage() {
  const { t } = useTranslation();
  const features = t("landing.features", { returnObjects: true }) as Feature[];

  return (
    <div className="min-h-screen bg-plane">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pb-20 pt-20 text-center">
        <span
          data-aos="fade-up"
          className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-ink-secondary"
        >
          {t("landing.badge")}
        </span>

        <h1
          data-aos="fade-up"
          data-aos-delay="80"
          className="font-display text-4xl font-medium tracking-tight text-ink-primary sm:text-5xl"
        >
          {t("landing.heroTitle")}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="140"
          className="max-w-xl text-base text-ink-secondary"
        >
          {t("landing.heroSubtitle")}
        </p>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/tracker"
            className="rounded-xl bg-ink-primary px-5 py-3 text-sm font-medium text-plane transition-opacity hover:opacity-90"
          >
            {t("landing.ctaPrimary")}
          </Link>
          <a
            href="#features"
            className="rounded-xl border border-hairline px-5 py-3 text-sm font-medium text-ink-primary transition-colors hover:bg-ink-primary/5"
          >
            {t("landing.ctaSecondary")}
          </a>
        </div>
      </div>

      <div id="features" className="mx-auto max-w-5xl px-6 pb-20">
        <h2
          data-aos="fade-up"
          className="mb-6 text-center font-display text-2xl font-medium text-ink-primary"
        >
          {t("landing.featuresTitle")}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="rounded-2xl border border-hairline bg-surface p-5 shadow-sm"
            >
              <p className="font-display text-lg font-medium text-ink-primary">{feature.title}</p>
              <p className="mt-1.5 text-sm text-ink-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        <p data-aos="fade-up" className="mt-10 text-center text-xs text-ink-muted">
          {t("landing.footerNote")}
        </p>
      </div>
    </div>
  );
}
