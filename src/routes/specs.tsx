import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Battery } from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/chairman-logo.jpg.asset.json";
import batteriesImg from "@/assets/hero-battery.jpg";

export const Route = createFileRoute("/specs")({
  head: () => ({
    meta: [
      { title: "Deep Cycle Battery Specifications | Chairman Battery" },
      {
        name: "description",
        content:
          "Chairman deep cycle AGM battery design features: copper alloy threaded terminals, AGM micro-porous glass separators, valve regulated construction, terminal adapter kits and hardware specifications.",
      },
      { property: "og:title", content: "Deep Cycle Battery Specifications | Chairman Battery" },
      {
        property: "og:description",
        content:
          "Design features, terminal adapter kits, torque values and hardware specifications for Chairman deep cycle AGM batteries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpecsPage,
});

const FEATURES = [
  "Terminals - Copper Alloy Threaded Inserts for improved electrical connections.",
  "Terminals are recessed to prevent short circuits across wheelchair battery connections.",
  "Terminal protectors are now available for after connection protection.",
  "New cover is a flat top design-No protruding or exposed vent valves.",
  "Built in lifting Handles.",
  "Reinforced container walls to reduce bulging.",
  "High Impact Strength Polypropylene Case and Cover.",
  "Valve Regulated Construction.",
  "Immobilized Electrolyte - Non-Spillable.",
  "Maintenance Free Design Never Requires Watering.",
  "Absorbed Glass Mat (AGM) Micro-porous Glass Separators.",
  "Flame Arresting Pressure Regulated Safety Valves.",
  "UL Recognized Systems Component.",
  "Positive Plates - Proprietary Lead Calcium Alloy- Negatives Plates - Lead Calcium.",
  "Low Self Discharge Rate Approximately 1 % per month at 25\u00B0 C (77\u00B0 F).",
  "Operational over a Wide Range of Temperatures, -40\u00B0 C (-40\u00B0 F) to +72\u00B0 C (+160\u00B0 F).",
  'Classified as "Non-Spillable Battery" for Transport. Complies with DOT HMR49 Non-Hazardous Materials.',
];

const ADAPTER_KITS = [
  { part: "6918", desc: '"A" Type -Automotive Post Terminal adapter kit for "T" batteries only.' },
  {
    part: "6918-12",
    desc: '"A" Type -Automotive Post Terminal adapter kit for "T" batteries only. -- 12 kits per box.',
  },
  { part: "6920", desc: '"L" Type -Blade Terminal adapter kit for "T" batteries only.' },
  {
    part: "6920-12",
    desc: '"L" Type -Blade Terminal adapter kit for "T" batteries only. -- 12 kits per box.',
  },
];

const INFO_ROWS: { label: string; value: React.ReactNode }[] = [
  {
    label: "Optional Terminals:",
    value: (
      <>
        Most deep cycle AGM batteries are available, in quantity, with specific terminals, as a
        special order.{" "}
        <Link to="/contact" className="font-semibold text-accent underline underline-offset-2">
          Please contact us here for Special Order Specifics.
        </Link>
      </>
    ),
  },
  {
    label: "Metric / U.S. Sizes:",
    value:
      'Nearest U.S. Dimmentions: M6 = 1/4", M8 = 5/16", M10 = 3/8" (U.S. reference sizes only, not interchangeable).',
  },
  {
    label: "Torque Values:",
    value: "(M6 use 35 in-lbs / 4.0 Nm) (M8 & M10 use 70 in-lbs / 7.9 Nm)",
  },
  {
    label: "Terminal Hardware:",
    value:
      "When required, all batteries are supplied with silicon bronze bolts, nuts & washers necessary for installation.",
  },
  {
    label: "Handles:",
    value: "All part numbers include carrying or lifting handles.",
  },
  {
    label: "Ratings:",
    value:
      "Capacity ratings are after 15 cycles & are at 77\u00B0F (25\u00B0C) to 1.75 volts per cell.",
  },
];

function SpecsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConcordeTopBar />
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-[0_6px_24px_-14px_rgba(1,22,137,0.55)]">
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
          <SiteNav active="specs" />
          <HeaderActions />
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-4 text-accent/40"
          aria-hidden="true"
        >
          <PulseLine className="h-16 w-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <Battery className="h-3.5 w-3.5" /> Technical Reference
            </p>
            <h1 className="font-display text-3xl font-bold underline decoration-accent decoration-2 underline-offset-8 sm:text-4xl">
              CHAIRMAN&reg; DEEP CYCLE AGM BATTERY DESIGN FEATURES
            </h1>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
          <Reveal>
            <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-foreground sm:text-base">
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={batteriesImg}
              alt="Chairman AGM deep-cycle batteries"
              width={1200}
              height={1200}
              className="w-full rounded-lg border border-border"
            />
          </Reveal>
        </div>
      </section>

      {/* ADAPTER KITS */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-md border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary/5">
                    <th className="w-44 px-5 py-3 text-right font-semibold text-primary">
                      Part Number
                    </th>
                    <th className="px-5 py-3 text-left font-semibold text-primary">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {ADAPTER_KITS.map((k) => (
                    <tr key={k.part} className="border-b border-border last:border-0">
                      <td className="px-5 py-4 text-right font-bold text-primary">{k.part}</td>
                      <td className="px-5 py-4 text-muted-foreground">{k.desc}</td>
                    </tr>
                  ))}
                  {INFO_ROWS.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <td className="px-5 py-4 text-right align-top font-bold whitespace-nowrap text-primary">
                        {row.label}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-10 text-lg font-bold text-primary">
              Note: Never install wheelchair batteries in an unventilated compartment or sealed
              container.
            </p>
            <p className="mt-6 text-sm font-semibold text-muted-foreground">
              The data/information contained herein has been reviewed and approved for general
              release on the basis that this document contains no export-controlled information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(110deg,var(--brand),color-mix(in_oklab,var(--accent)_85%,var(--brand)))] px-7 py-12 text-brand-foreground sm:px-12">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 text-brand-foreground/25"
                aria-hidden="true"
              >
                <PulseLine className="h-20 w-full" />
              </div>
              <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Need a part number matched to these specs?
                  </h2>
                  <p className="mt-3 max-w-xl text-brand-foreground/85">
                    Filter the full Chairman AGM catalog by voltage, capacity, dimensions and
                    weight.
                  </p>
                </div>
                <a
                  href="/find-your-battery"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Find Your Battery <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
