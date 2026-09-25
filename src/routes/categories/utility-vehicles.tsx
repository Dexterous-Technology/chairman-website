import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Moon,
  Quote,
  Sunrise,
  Sunset,
  Thermometer,
  Timer,
  Truck,
  Wrench,
} from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { getBatteryProductImage } from "@/lib/battery-images";
import { useRandomBatteries, batterySpecLabel } from "@/lib/random-batteries";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/categories/utility-vehicles")({
  head: () => ({
    meta: [
      { title: "Utility Vehicle Batteries | Chairman Battery" },
      {
        name: "description",
        content:
          "Deep-cycle AGM batteries for utility and grounds fleets — maintenance carts, campus utility vehicles and grounds equipment that run long duty days outdoors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Utility Vehicle Batteries | Chairman Battery" },
      {
        property: "og:description",
        content:
          "All-day range and deep discharge tolerance for utility, grounds and campus fleets in rugged outdoor duty.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UtilityVehiclesPage,
});

const DAY = [
  {
    icon: Sunrise,
    stage: "Morning startup",
    time: "06:00",
    desc: "Low self-discharge means a full state of charge waiting after the weekend — no jump packs, no guesswork.",
  },
  {
    icon: Truck,
    stage: "Full-day grounds rounds",
    time: "08:00 – 16:00",
    desc: "Flat discharge curve holds voltage across gravel, turf and inclines so power doesn't fade by the last stop.",
  },
  {
    icon: Sunset,
    stage: "Deep discharge by dusk",
    time: "17:00",
    desc: "Built to run deep, day after day, without the capacity loss that shortens ordinary battery life.",
  },
  {
    icon: Moon,
    stage: "Overnight recharge",
    time: "20:00",
    desc: "High charge acceptance brings the pack back to full before the next shift — sealed, no watering.",
  },
];

const STATS = [
  { icon: BatteryCharging, label: "Rated for 1,200+ deep-discharge cycles", detail: "at 50% DOD" },
  { icon: Thermometer, label: "Wide temperature tolerance", detail: "−40°F to 140°F operating range" },
  { icon: Timer, label: "Reduced fleet downtime", detail: "sealed, no watering, no equalising" },
];

const TESTIMONIALS = [
  {
    quote:
      "Our grounds carts run from sunrise to dark through the summer. We swapped to Chairman packs two seasons ago and haven't pulled one early yet.",
    name: "Dale Brennan",
    title: "Facilities Fleet Manager",
  },
  {
    quote:
      "Between rain, dust and cold mornings, the old flooded batteries were a constant chore. These just charge overnight and go.",
    name: "Nora Vasquez",
    title: "Grounds Operations Lead",
  },
];

function UtilityVehiclesPage() {
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
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <Truck className="h-3.5 w-3.5" /> Utility Vehicles
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl">
              Deep Discharge Tolerance for Fleets That Run Until the Job Is Done.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Maintenance carts, grounds vehicles and campus utility fleets work long days across
              rough outdoor terrain. Chairman AGM deep-cycle batteries take that discharge cycle
              again and again without giving up capacity.
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
                Get Fleet Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. A DAY IN THE FLEET */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              A day in the fleet
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              One duty day, start to finish
            </h2>
          </Reveal>

          <div className="relative mt-12">
            <div
              className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block"
              aria-hidden="true"
            />
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {DAY.map((d, i) => (
                <Reveal key={d.stage} delay={i * 80}>
                  <div className="relative lg:pr-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
                      <d.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      {d.time}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-primary">{d.stage}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BATTERY LINEUP — horizontal scroll row */}
      <section id="lineup" className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  The lineup
                </p>
                <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                  Batteries offered by Chairman
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">Scroll for more →</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 overflow-x-auto pb-4">
          <div className="mx-auto flex w-max max-w-none gap-5 px-5 lg:px-8">
            {lineup.map((b) => (
              <article
                key={b.part}
                className="card-lift flex w-[260px] shrink-0 flex-col rounded-md border border-border bg-card p-5"
              >
                <div className="flex aspect-square items-center justify-center rounded-md bg-secondary/60 p-3">
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
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl justify-center px-5 lg:px-8">
          <Link
            to="/find-your-battery"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
          >
            See More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4. BUILT FOR OUTDOOR DUTY */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Built for outdoor duty
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                Weather, terrain and deep cycles — by design
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sealed AGM construction keeps moisture, dust and road salt out of the cell and
                keeps acid where it belongs, whatever the vehicle hits on the route. Thick plates
                and a recombinant design absorb repeated deep discharge instead of degrading under
                it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                The result is a fleet pack that holds rated capacity through seasons of heavy use,
                with no watering, no equalising and no acid spills to manage in the yard.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                Talk fleet requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-md border border-accent/40 bg-card p-8">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                <Wrench className="h-3.5 w-3.5" /> Fleet numbers
              </p>
              <ul className="mt-6 space-y-6">
                {STATS.map((s) => (
                  <li key={s.label} className="flex gap-4">
                    <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.7} />
                    <div>
                      <p className="font-semibold text-primary">{s.label}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. TESTIMONIALS + CONTACT CTA */}
      <section id="contact-cta" className="bg-secondary/40 py-20 lg:py-24">
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
                  Need power for your utility fleet?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-brand-foreground/80">
                  Send us your vehicle mix and duty day and we&apos;ll quote the right packs at
                  fleet volume.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                Get Fleet Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
