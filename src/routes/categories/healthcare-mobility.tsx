import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseMedical,
  Check,
  Quote,
  ShieldCheck,
  X,
} from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { useRandomBatteries, batterySpecLabel } from "@/lib/random-batteries";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/categories/healthcare-mobility")({
  head: () => ({
    meta: [
      { title: "Health Care & Mobility Batteries | Chairman Battery" },
      {
        name: "description",
        content:
          "Quiet, sealed, non-spillable AGM batteries for wheelchairs, mobility scooters and clinical carts — safe for indoor, patient-adjacent use and zero maintenance.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Health Care & Mobility Batteries | Chairman Battery",
      },
      {
        property: "og:description",
        content:
          "Sealed, non-spillable AGM power for mobility equipment and clinical environments — silent, maintenance-free and safe close to patients.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HealthcareMobilityPage,
});

const TRUST_MARKERS = [
  "Non-spillable, AGM sealed design",
  "UL-recognized",
  "Zero-maintenance",
  "Safe for indoor & patient-adjacent use",
];

const RISKS = [
  "Acid leakage and spills near patients and staff",
  "Gassing and fumes in enclosed rooms and wards",
  "Audible fan and electrolyte noise in quiet spaces",
  "Watering, equalising and routine upkeep schedules",
];

const DELIVERS = [
  "Fully sealed, non-spillable construction — any orientation",
  "Recombinant design with minimal gas emission",
  "Silent operation suited to wards and consult rooms",
  "Zero maintenance for the life of the battery",
];

const TESTIMONIALS = [
  {
    quote:
      "We build chairs that go into homes and hospitals. Sealed, non-spillable packs mean our units ship and fly without a hazmat conversation every single time.",
    name: "Helen Whitcombe",
    title: "Mobility Equipment Manufacturer",
  },
  {
    quote:
      "Our carts sit beside patients all day. No fumes, no noise, nothing to water — the maintenance team simply stopped having to think about them.",
    name: "Raymond Ellis",
    title: "Clinical Facilities Manager",
  },
];

function HealthcareMobilityPage() {
  const [scrolled, setScrolled] = useState(false);
  const lineup = useRandomBatteries(8);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConcordeTopBar />
      <header
        className={`sticky top-0 z-50 border-b border-border bg-background transition-shadow ${
          scrolled ? "shadow-[0_6px_24px_-14px_rgba(1,22,137,0.55)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center">
            <img
              src={logo.url}
              alt="Chairman Battery — the heart of your system"
              className="h-8 w-auto shrink-0 sm:h-10 dark:invert dark:hue-rotate-180"
              width={220}
              height={40}
            />
          </Link>
          <SiteNav />
          <HeaderActions />
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-8 text-accent/25"
          aria-hidden="true"
        >
          <PulseLine className="h-24 w-full" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center lg:px-8 lg:py-32">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <BriefcaseMedical className="h-3.5 w-3.5" /> Health Care &amp; Mobility
            </p>
            <h1 className="font-display text-4xl leading-[1.08] font-bold sm:text-5xl">
              Quiet, Sealed, Non-Spillable Power for the People You Care For.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Wheelchairs, mobility scooters and clinical carts work within arm&apos;s reach of
              patients and staff. Chairman AGM batteries are fully sealed and maintenance-free, so
              indoor, close-proximity operation stays safe and worry-free.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#lineup"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                View Batteries <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-brand-foreground/50 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Talk to Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. TRUST & COMPLIANCE STRIP */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-6 lg:px-8">
          {TRUST_MARKERS.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-primary sm:text-sm"
            >
              <ShieldCheck className="h-4 w-4 text-accent" />
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* 3. BATTERY LINEUP */}
      <section id="lineup" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              The lineup
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Batteries offered by Chairman
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Eight sealed AGM sizes most often specified by chair builders, scooter makers and
              facility teams.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {lineup.map((b, i) => (
              <Reveal key={b.part} delay={i * 40}>
                <div className="flex items-start justify-between gap-6 border-b border-border py-5">
                  <div className="min-w-0">
                    <p className="font-display text-lg font-bold text-primary">{b.part}</p>
                    <p className="mt-0.5 text-sm font-semibold text-accent">{batterySpecLabel(b)}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      Sealed, non-spillable AGM — {b.cap100} minutes at 25 amps, {b.weight} lbs.
                    </p>
                  </div>
                  <Link
                    to="/products/$part"
                    params={{ part: b.part }}
                    className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
                  >
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/find-your-battery"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
            >
              See More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY IT MATTERS FOR CARE ENVIRONMENTS */}
      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold text-primary sm:text-4xl">
              Why it matters for care environments
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-md border border-border bg-card p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Risks in standard batteries
                </p>
                <ul className="mt-5 space-y-4">
                  {RISKS.map((r) => (
                    <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-md border border-accent/40 bg-card p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  What our sealed batteries deliver
                </p>
                <ul className="mt-5 space-y-4">
                  {DELIVERS.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS + CONTACT CTA */}
      <section id="contact-cta" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="h-full rounded-md border border-border bg-card p-7">
                  <Quote className="h-6 w-6 text-accent" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-primary">{t.name}</span>
                    <span className="text-muted-foreground"> · {t.title}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-md bg-brand px-8 py-10 text-center text-brand-foreground md:flex-row md:text-left">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Have a mobility or clinical power need?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-brand-foreground/80">
                  Tell us the equipment and duty cycle and our team will match the right sealed AGM
                  size.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
