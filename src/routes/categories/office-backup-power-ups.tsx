import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Quote, Server } from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { useRandomBatteries, batterySpecLabel } from "@/lib/random-batteries";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/categories/office-backup-power-ups")({
  head: () => ({
    meta: [
      { title: "Office & Backup Power (UPS) Batteries | Chairman Battery" },
      {
        name: "description",
        content:
          "Sealed AGM batteries built for float service — standby readiness and long design life for office UPS systems, server rooms and critical backup power.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Office & Backup Power (UPS) Batteries | Chairman Battery",
      },
      {
        property: "og:description",
        content:
          "Float-service reliability that holds capacity for years — standby power you can count on when the mains drop.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OfficeBackupPowerPage,
});

const READINESS = [
  { value: "10 yr", label: "Design float life at 77°F" },
  { value: "95%", label: "Capacity retention after 3 years on float" },
  { value: "VRLA", label: "Sealed AGM, valve-regulated design" },
  { value: "24/7", label: "Rated for continuous float charging" },
];

const TESTIMONIALS = [
  {
    quote:
      "We test our UPS strings twice a year. Three years in, the Chairman blocks are still coming back within spec — that used to be a yearly replacement line item.",
    name: "Erin Colefax",
    title: "IT Infrastructure Manager",
  },
  {
    quote:
      "Sealed, no venting requirements, no maintenance window. For a comms closet on the fourth floor, that matters as much as the runtime does.",
    name: "Victor Nnamdi",
    title: "Facilities Operations Lead",
  },
];

function OfficeBackupPowerPage() {
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
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-10 text-accent/40"
          aria-hidden="true"
        >
          <PulseLine className="h-24 w-full" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
              <p className="inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                <Server className="h-3.5 w-3.5" /> Office &amp; Backup Power (UPS)
              </p>
              <span className="rounded-full bg-yellow px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-yellow-ink uppercase">
                New
              </span>
            </div>
            <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl">
              Float-Service Reliability That Still Holds Capacity Years From Now.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Backup power only matters in the minutes it is needed. Chairman sealed AGM blocks sit
              on continuous float without drifting, so your UPS strings, server rooms and critical
              systems stay ready through years of standby duty.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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
                Get a Backup Power Assessment
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. STANDBY READINESS STAT BAND */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {READINESS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. BATTERY LINEUP */}
      <section id="lineup" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              The lineup
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Batteries offered by Chairman
            </h2>
          </Reveal>

          <Reveal delay={80}>
            {/* Header row — desktop only */}
            <div className="mt-10 hidden grid-cols-[1.1fr_1fr_1.2fr_auto] gap-4 border-b border-border pb-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase md:grid">
              <span>Part Number</span>
              <span>Voltage / Ah</span>
              <span>Min @ 25A</span>
              <span className="text-right">Details</span>
            </div>

            <ul className="mt-4 divide-y divide-border md:mt-0">
              {lineup.map((b) => (
                <li
                  key={b.part}
                  className="grid grid-cols-1 gap-1.5 py-5 md:grid-cols-[1.1fr_1fr_1.2fr_auto] md:items-center md:gap-4"
                >
                  <span className="font-display text-lg font-bold text-primary md:text-base">
                    {b.part}
                  </span>
                  <span className="text-sm font-semibold text-accent">{batterySpecLabel(b)}</span>
                  <span className="text-sm text-muted-foreground">{b.cap100} min</span>
                  <Link
                    to="/products/$part"
                    params={{ part: b.part }}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent md:mt-0 md:justify-self-end"
                  >
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
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

      {/* 4. WHY FLOAT-SERVICE RELIABILITY MATTERS */}
      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Why float-service reliability matters
            </p>
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="lg:border-r lg:border-border lg:pr-16">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  When backup power fails, it fails at the worst moment
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A UPS string that has quietly lost capacity looks identical to a healthy one until
                  the mains drop. Then it is unsaved work, interrupted transactions, an unclean
                  shutdown across a rack, and hardware that took the hit on the way down.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  The cost is rarely the battery. It is the downtime, the recovery hours and the
                  equipment damage that follow a few missing minutes of runtime.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  Built for standby, not adapted to it
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Chairman AGM blocks are designed for continuous float charging: low self-discharge
                  so a stored or lightly cycled string stays near full, and corrosion-resistant
                  grids that keep the plate healthy across years on charge.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Sealed, valve-regulated construction means no watering, no venting requirement and
                  no acid to manage — consistent readiness from a battery you can install in an
                  office closet and largely forget.
                </p>
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
                  Make sure your backup power is ready when you need it.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-brand-foreground/80">
                  Tell us what your UPS systems protect and we&apos;ll size the string and service
                  interval with you.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                Get a Backup Power Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
