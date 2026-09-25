import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Anchor, ArrowRight, Car, Flag, Quote, Sun } from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { getBatteryProductImage } from "@/lib/battery-images";
import { useRandomBatteries, batterySpecLabel } from "@/lib/random-batteries";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/categories/transportation-leisure")({
  head: () => ({
    meta: [
      { title: "Golf Cart, LSEV & Marine Batteries | Chairman Battery" },
      {
        name: "description",
        content:
          "Sealed deep-cycle AGM batteries for golf carts, low-speed EVs and marine house banks — a full day on the course, the road or the water.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Golf Cart, LSEV & Marine Batteries | Chairman Battery",
      },
      {
        property: "og:description",
        content:
          "Dependable, maintenance-free power for golf carts, neighbourhood EVs and weekend boating.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TransportationLeisurePage,
});

const MOMENTS = [
  {
    icon: Flag,
    title: "A full round without range anxiety",
    desc: "Deep-cycle capacity that still has plenty left on the eighteenth, even with a loaded cart and a warm afternoon.",
  },
  {
    icon: Anchor,
    title: "Marine house power for the whole weekend",
    desc: "Sealed and non-spillable in any orientation, so the fridge, lights and electronics keep running from Friday to Sunday.",
  },
  {
    icon: Sun,
    title: "Quiet, smooth power around the neighbourhood",
    desc: "No fumes, no watering, no maintenance weekend — just turn the key and go for the school run or the beach road.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Two seasons on the same set and my cart still finishes the round with charge to spare. I stopped thinking about the batteries entirely.",
    name: "Greg Hollis",
    title: "Golf Cart Owner",
  },
  {
    quote:
      "We anchor out most weekends and the house bank just keeps up. No topping up, no smell in the cabin — exactly what I wanted.",
    name: "Marisa Kent",
    title: "Marine Enthusiast",
  },
];

function TransportationLeisurePage() {
  const [scrolled, setScrolled] = useState(false);
  const visible = useRandomBatteries(8);

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
        <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(253,216,119,0.22),transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-10 text-accent/40"
          aria-hidden="true"
        >
          <PulseLine className="h-24 w-full" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <Car className="h-3.5 w-3.5" /> Transportation &amp; Leisure
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl">
              Power for the Good Days Out — Course, Road and Water.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Golf carts, low-speed EVs and marine house banks all ask the same thing: start every
              time and last the whole day. Chairman sealed AGM deep-cycle batteries give you the
              range and the reliable starts, with nothing to maintain in between.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#lineup"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                View Batteries <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/find-your-battery"
                className="inline-flex items-center justify-center rounded-md border border-brand-foreground/50 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Find My Battery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. CHOOSE YOUR RIDE + 3. LINEUP */}
      <section id="lineup" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              The lineup
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Batteries offered by Chairman
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every Chairman leisure battery is sealed, non-spillable and maintenance-free.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((b, i) => (
              <Reveal key={b.part} delay={i * 50}>
                <article className="card-lift flex h-full flex-col rounded-md border border-border bg-card p-5">
                  <div className="flex aspect-square items-center justify-center rounded-md bg-secondary/50 p-3">
                    <img
                      src={getBatteryProductImage(b.part)}
                      alt={`Chairman ${b.part} AGM battery`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{b.part}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-accent">{batterySpecLabel(b)}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    Sealed AGM deep-cycle — {b.cap100} minutes at 25 amps, {b.weight} lbs.
                  </p>
                  <Link
                    to="/products/$part"
                    params={{ part: b.part }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
                  >
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
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

      {/* 4. PERFECT FOR YOUR OUTINGS */}
      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Perfect for your outings
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Built around the days you actually use it
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div>
                  <m.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </Reveal>
            ))}
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
                  Ready to power your next outing?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-brand-foreground/80">
                  Tell us what you drive, ride or sail and we&apos;ll match the right pack.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                Find My Battery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
