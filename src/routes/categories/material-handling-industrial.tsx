import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Forklift,
  Snowflake,
  Sun,
  Timer,
} from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { useRandomBatteries } from "@/lib/random-batteries";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/categories/material-handling-industrial")({
  head: () => ({
    meta: [
      { title: "Material Handling & Industrial Batteries | Chairman Battery" },
      {
        name: "description",
        content:
          "Vibration-hardened AGM deep-cycle batteries for forklifts, pallet jacks, floor scrubbers, sweepers and aerial lifts running multi-shift duty cycles.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Material Handling & Industrial Batteries | Chairman Battery",
      },
      {
        property: "og:description",
        content:
          "Heavy-duty AGM power built for warehouse floors, yard equipment and multi-shift material handling fleets.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaterialHandlingPage,
});


const STATS = [
  { label: "Rated for 1,200+ charge cycles", detail: "at 50% depth of discharge" },
  { label: "Sealed, spill-proof design", detail: "non-spillable, no watering, any orientation" },
  { label: "Fast opportunity charging", detail: "top up between shifts and breaks" },
];

const USE_CASES = [
  {
    icon: Timer,
    title: "Running 3 shifts on the warehouse floor",
    desc: "High charge acceptance keeps packs topped up during breaks so equipment rolls into the next shift.",
  },
  {
    icon: Sun,
    title: "Outdoor yard equipment in extreme temps",
    desc: "Sealed AGM construction holds capacity through heat soak, humidity and dust that kill flooded cells.",
  },
  {
    icon: Snowflake,
    title: "Cold storage forklift operations",
    desc: "Low internal resistance delivers usable capacity and dependable cranking down in the freezer aisle.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Our scrubbers and pallet jacks used to sit on chargers half the day. With Chairman packs we opportunity-charge between shifts and the fleet stays on the floor.",
    name: "Marcus Hale",
    title: "Warehouse Operations Manager",
  },
  {
    quote:
      "No watering, no acid spills, no surprise swaps. Maintenance hours on the lift fleet dropped and we finally get the cycle life the spec sheet promises.",
    name: "Ana Delgado",
    title: "Fleet Maintenance Lead",
  },
];

function MaterialHandlingPage() {
  const [scrolled, setScrolled] = useState(false);
  const rows = useRandomBatteries(8);

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
              <Forklift className="h-3.5 w-3.5" /> Material Handling &amp; Industrial
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl">
              Vibration-Hardened Power for Equipment That Works Every Shift.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Forklifts, pallet jacks, aerial lifts, scrubbers and sweepers take a beating on
              concrete, dock plates and yard surfaces. Chairman AGM deep-cycle batteries are built
              to absorb that punishment and hold capacity across multi-shift duty cycles.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#specs"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                View Batteries <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-brand-foreground/50 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Request a Fleet Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. EQUIPMENT SELECTOR + SPEC TABLE */}
      <section id="specs" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Specifications
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Batteries offered by Chairman
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Compare voltage, capacity, weight and rated runtime side by side.
            </p>
          </Reveal>


          {/* Table (md+) */}
          <Reveal delay={100}>
            <div className="mt-8 hidden overflow-x-auto rounded-md border border-border md:block">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-primary/5 text-xs tracking-[0.12em] text-primary uppercase">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Part Number</th>
                    <th className="px-5 py-3 font-semibold">Voltage</th>
                    <th className="px-5 py-3 font-semibold">Ah Capacity</th>
                    <th className="px-5 py-3 font-semibold">Weight</th>
                    <th className="px-5 py-3 font-semibold">Min @ 25A</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.part} className="border-t border-border hover:bg-primary/5">
                      <td className="px-5 py-3.5 font-bold text-primary">{r.part}</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{r.volts}V</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{r.cap20} Ah</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{r.weight} lbs</td>
                      <td className="px-5 py-3.5 text-muted-foreground">{r.cap100} min</td>
                      <td className="px-5 py-3.5 text-right">
                        <Link
                          to="/products/$part"
                          params={{ part: r.part }}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
                        >
                          View details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Stacked cards (mobile) */}
          <div className="mt-8 grid gap-4 md:hidden">
            {rows.map((r) => (
              <div key={r.part} className="rounded-md border border-border bg-card p-5">
                <p className="text-lg font-bold text-primary">{r.part}</p>
                <dl className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
                  <dt className="font-medium text-foreground/70">Voltage</dt>
                  <dd>{r.volts}V</dd>
                  <dt className="font-medium text-foreground/70">Capacity</dt>
                  <dd>{r.cap20} Ah</dd>
                  <dt className="font-medium text-foreground/70">Weight</dt>
                  <dd>{r.weight} lbs</dd>
                  <dt className="font-medium text-foreground/70">Min @ 25A</dt>
                  <dd>{r.cap100} min</dd>
                </dl>
                <Link
                  to="/products/$part"
                  params={{ part: r.part }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Specifications shown are representative; confirm exact ratings on the product data
            sheet.
          </p>
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

      {/* 3. BUILT FOR THE WAREHOUSE FLOOR */}
      <section className="bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Durability
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Built for the warehouse floor
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every Chairman cell is assembled to the same aerospace process control we use for
              aircraft batteries. Compressed absorbed-glass-mat plate stacks resist the constant
              vibration and shock of dock plates, expansion joints and yard potholes — the failure
              mode that shortens most industrial battery lives.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Deep discharge tolerance means an operator who runs a scrubber flat at the end of a
              shift hasn't cost you a pack, and multi-shift reliability comes from consistent
              capacity retention cycle after cycle rather than a strong first month.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-md border border-border bg-card p-8">
              <ul className="divide-y divide-border">
                {STATS.map((s) => (
                  <li key={s.label} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="font-semibold text-primary">{s.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. USE-CASE CALLOUTS */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid divide-y divide-border rounded-md border border-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={i * 60}>
                <div className="flex h-full items-start gap-4 p-7">
                  <u.icon className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.6} />
                  <div>
                    <p className="font-semibold text-primary">{u.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS + CTA */}
      <section id="contact-cta" className="bg-background pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="flex h-full flex-col rounded-md border border-border bg-card p-7">
                  <blockquote className="flex-1 leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="relative mt-8 overflow-hidden rounded-md bg-brand p-10 text-brand-foreground lg:p-12">
              <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Need the right battery for your fleet?
                  </h2>
                  <p className="mt-3 max-w-xl text-brand-foreground/85">
                    Send us your equipment list, shift pattern and charging setup — we'll match the
                    exact Chairman part numbers.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
