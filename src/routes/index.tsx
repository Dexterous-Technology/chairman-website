import { createFileRoute, Link } from "@tanstack/react-router";
import { HeaderActions } from "@/components/HeaderActions";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Battery,
  Bot,
  BriefcaseMedical,
  Car,
  Forklift,
  Plug,
  Scale,
  Server,
  Truck,
  Zap,
} from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { getBatteryProductImage } from "@/lib/battery-images";
import logo from "@/assets/chairman-logo.jpg.asset.json";
import heroDiagram from "@/assets/chairman-battery-hero.png.asset.json";
import facility from "@/assets/facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chairman Battery | Aerospace-Grade AGM Deep-Cycle Batteries" },
      {
        name: "description",
        content:
          "Aerospace-grade AGM deep-cycle batteries for robotics, material handling, medical mobility, UPS and utility vehicles. Built to ISO 9001, AS9100 and MIL-PRF-8565.",
      },
      {
        property: "og:title",
        content: "Chairman Battery | Aerospace-Grade AGM Deep-Cycle Batteries",
      },
      {
        property: "og:description",
        content:
          "The heart of every system that can't afford to fail. AGM deep-cycle power engineered for continuous duty, vibration and temperature extremes.",
      },
    ],
  }),
  component: Home,
});


const APPLICATIONS = [
  {
    icon: Bot,
    name: "Robotics & Automation",
    cat: "Robotics & Automation",
    desc: "Continuous-duty cycling for AMRs, AGVs and service robots.",
    badge: "Best Seller",
  },
  {
    icon: Forklift,
    name: "Material Handling & Industrial",
    cat: "Material Handling",
    desc: "Vibration-hardened power for lifts, sweepers and scrubbers.",
  },
  {
    icon: BriefcaseMedical,
    name: "Health Care & Mobility",
    cat: "Health Care & Mobility",
    desc: "Quiet, sealed, non-spillable power for chairs and clinical carts.",
  },
  {
    icon: Truck,
    name: "Utility Vehicles",
    cat: "Utility Vehicles",
    desc: "Deep discharge tolerance for utility and grounds fleets.",
  },
  {
    icon: Server,
    name: "Office & Backup Power (UPS)",
    cat: "Office & Backup Power",
    desc: "Float-service reliability that holds capacity for years.",
    badge: "New",
  },
  {
    icon: Car,
    name: "Transportation & Leisure",
    cat: "Transportation & Leisure",
    desc: "Golf carts, low-speed EVs and marine house banks.",
  },
];

const AGM_STATS = [
  { value: "1,000+", label: "Design cycles @ 50% DoD" },
  { value: "80°C", label: "Upper operating limit" },
  { value: "38 yrs", label: "Continuous US production" },
];

const COMPARISON: { param: string; chairman: string; chinese: string; lfp: string }[] = [
  {
    param: "Design cycle life @ 50% DoD",
    chairman: "1,000+ cycles",
    chinese: "~400 cycles",
    lfp: "3,000+ cycles",
  },
  {
    param: "Manufacturing standard",
    chairman: "AS9100 aerospace",
    chinese: "Commodity",
    lfp: "Varies",
  },
  {
    param: "Plate alloy",
    chairman: "Proprietary Pb-Ca-Sn",
    chinese: "Recycled Pb-Sb",
    lfp: "N/A",
  },
  { param: "Non-spillable / DOT-38.3", chairman: "Yes", chinese: "Claimed", lfp: "Yes" },
  {
    param: "Warranty (deep-cycle)",
    chairman: "2 yrs full / 7 pro-rata",
    chinese: "1 yr",
    lfp: "2-5 yrs",
  },
  {
    param: "Operating temp range",
    chairman: "-40° to +80°C",
    chinese: "0° to +40°C",
    lfp: "0° to +45°C",
  },
  { param: "Field-serviceable BMS req.", chairman: "None", chinese: "None", lfp: "Required" },
];

const CERTS = [
  { name: "ISO 9001", note: "Audited quality management on every production line." },
  { name: "AS9100", note: "The aerospace standard — traceability on every cell." },
  { name: "MIL-B-8565", note: "Military spec for sealed battery safety and gas emission." },
  { name: "MIL-PRF-8565", note: "Performance qualification under shock and vibration." },
  { name: "PolyGuard®", note: "Separator armor that stops shorts before they start." },
  { name: "Pure Lead-Calcium", note: "Thin, high-purity grids for low resistance and long life." },
];

const STATS = [
  { value: "40+", label: "Years manufacturing in the USA" },
  { value: "4", label: "Aerospace & military certifications" },
  { value: "6", label: "Application categories served" },
  { value: "100%", label: "Recyclable lead-acid chemistry" },
];

const FEATURED: {
  part: string;
  volts: number;
  cap: number;
  weight: number;
  badge?: string;
}[] = [
  { part: "AGM-1248T", volts: 12, cap: 48, weight: 35, badge: "Best Seller" },
  { part: "AGM-1265T", volts: 12, cap: 65, weight: 50, badge: "Best Seller" },
  { part: "AGM-12100T", volts: 12, cap: 100, weight: 62 },
  { part: "AGM-6220T", volts: 6, cap: 220, weight: 66 },
  { part: "AGM-21200HT", volts: 2, cap: 1200, weight: 123 },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConcordeTopBar />
      {/* NAV */}
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-10 text-accent/40"
          aria-hidden="true"
        >
          <PulseLine className="h-24 w-full" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 pb-32 lg:grid-cols-2 lg:px-8 lg:py-28 lg:pb-44">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <Battery className="h-3.5 w-3.5" /> AGM Deep-Cycle · AS9100
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              The Heart of Every System That Can&apos;t Afford to Fail.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Chairman builds AGM deep-cycle batteries on aerospace production lines — engineered
              for continuous duty, punishing vibration and temperature extremes that end the life of
              ordinary industrial cells.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/find-your-battery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                Find Your Battery <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#applications"
                className="inline-flex items-center justify-center rounded-md border border-brand-foreground/50 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Explore Applications
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="min-w-0">
            <figure className="mx-auto w-full max-w-[21.6rem] lg:max-w-[25.2rem] xl:max-w-[28.8rem]">
                {/* Desktop: smaller battery with floating labels and pulsing dots */}
                <div className="relative mx-auto hidden w-full overflow-visible py-3 lg:block">
                  <img
                  src={heroDiagram.url}
                  alt="Chairman AGM battery technical illustration with four feature callouts"
                  width={909}
                  height={836}
                  className="relative z-10 w-full"
                />

                <span
                  className="battery-callout-dot left-[6%] top-[12%] z-20"
                  aria-hidden="true"
                />
                <span
                  className="battery-callout-dot right-[6%] top-[12%] z-20"
                  aria-hidden="true"
                />
                <span
                  className="battery-callout-dot left-[6%] bottom-[-8%] z-20"
                  aria-hidden="true"
                />
                <span
                  className="battery-callout-dot right-[6%] bottom-[-8%] z-20"
                  aria-hidden="true"
                />

                <p className="absolute bottom-[calc(100%-30px)] left-0 z-30 max-w-[38%] text-left text-sm font-semibold leading-snug text-brand-foreground">
                  Lower price, direct from an Authorized Distributor
                </p>
                <p className="absolute bottom-[calc(100%-30px)] right-0 z-30 max-w-[38%] text-right text-sm font-semibold leading-snug text-brand-foreground">
                  Form, fit &amp; function replacement
                </p>
                <p className="absolute top-[calc(100%+50px)] left-0 z-30 max-w-[38%] text-left text-sm font-semibold leading-snug text-brand-foreground">
                  100% recyclable — the green solution
                </p>
                <p className="absolute top-[calc(100%+50px)] right-0 z-30 max-w-[38%] text-right text-sm font-semibold leading-snug text-brand-foreground">
                  Hazmat exempt — ships by land, sea, or air
                </p>
              </div>

              {/* Mobile: image stacked above label list */}
              <div className="lg:hidden">
                <img
                  src={heroDiagram.url}
                  alt="Chairman AGM battery technical illustration with four feature callouts"
                  width={909}
                  height={836}
                  className="mx-auto w-full max-w-md"
                />
                <figcaption className="mt-5 grid gap-3">
                  {[
                    "Lower price, direct from an Authorized Distributor",
                    "Form, fit & function replacement",
                    "100% recyclable — the green solution",
                    "Hazmat exempt — ships by land, sea, or air",
                  ].map((label) => (
                    <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                      <span className="battery-callout-list-dot mt-1.5" aria-hidden="true" />
                      <span className="text-sm font-semibold leading-relaxed text-brand-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">What are you powering?</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Pick your world. Every category has matched part numbers, discharge curves and
              installation documentation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map((app, i) => (
              <Reveal key={app.name} delay={i * 60}>
                <Link
                  {...(app.cat === "Robotics & Automation"
                    ? { to: "/categories/robotics-automation" as const }
                    : app.cat === "Material Handling"
                      ? { to: "/categories/material-handling-industrial" as const }
                      : app.cat === "Health Care & Mobility"
                        ? { to: "/categories/healthcare-mobility" as const }
                        : app.cat === "Utility Vehicles"
                          ? { to: "/categories/utility-vehicles" as const }
                          : app.cat === "Office & Backup Power"
                            ? { to: "/categories/office-backup-power-ups" as const }
                            : app.cat === "Transportation & Leisure"
                              ? { to: "/categories/transportation-leisure" as const }
                              : { to: "/find-your-battery" as const })}
                  className="card-lift group block h-full rounded-md border border-border bg-card p-7"
                >
                  <div className="flex items-start justify-between">
                    <app.icon className="h-8 w-8 text-accent" strokeWidth={1.6} />
                    {app.badge ? (
                      <span className="rounded-full bg-yellow px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-yellow-foreground uppercase">
                        {app.badge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-primary">{app.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{app.desc}</p>
                  <span className="mt-6 block h-px w-10 bg-accent transition-all duration-300 group-hover:w-full" />
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
                    View batteries <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative overflow-hidden bg-brand py-20 text-brand-foreground lg:py-28">
        <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-foreground/60 uppercase">
              03 · The AGM Advantage
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold text-brand-foreground sm:text-4xl">
              Read the Row That Matters{" "}
              <span className="text-yellow">to Your Application.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-brand-foreground/75">
              Deep-cycle AGM is a mature chemistry. What separates products is manufacturing
              discipline. Below: representative field data compared to a commodity import AGM and a
              mid-tier LFP alternative.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-brand-foreground/15 bg-brand-foreground/15 sm:grid-cols-3">
            {AGM_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="h-full bg-brand-foreground/[0.06] p-7">
                  <p className="font-mono text-4xl font-bold text-yellow">{s.value}</p>
                  <p className="mt-3 text-xs font-medium tracking-[0.12em] text-brand-foreground/70 uppercase">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-8 overflow-x-auto rounded-md border border-brand-foreground/15">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-brand-foreground/15">
                    {["Parameter", "Chairman", "Chinese AGM", "LFP"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 font-mono text-xs font-semibold tracking-[0.15em] text-brand-foreground/60 uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.param} className="border-b border-brand-foreground/10 last:border-b-0">
                      <td className="px-5 py-4 text-sm text-brand-foreground">{row.param}</td>
                      <td className="px-5 py-4 font-mono text-sm font-semibold text-brand-foreground">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="inline-block h-2 w-2 shrink-0 bg-yellow"
                            aria-hidden="true"
                          />
                          {row.chairman}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-mono text-sm text-brand-foreground/60">
                        {row.chinese}
                      </td>
                      <td className="px-5 py-4 font-mono text-sm text-brand-foreground/60">
                        {row.lfp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 font-mono text-[11px] tracking-[0.15em] text-brand-foreground/50 uppercase">
              Ref · CB-DS-001 Rev. 1 · Full datasheet in resources
            </p>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-y border-border bg-yellow/15 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Certified & Qualified
            </p>
          </Reveal>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-display text-lg font-bold text-primary">{c.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BATTERIES */}
      <section id="featured" className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Popular Products
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Explore Our Best-Selling AGM Batteries
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A quick look at some of our most trusted part numbers across applications.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {FEATURED.map((b, i) => (
              <Reveal key={b.part} delay={i * 60}>
                <Link
                  to="/products/$part"
                  params={{ part: b.part }}
                  className="card-lift group relative block h-full overflow-hidden rounded-md border border-border bg-card p-5 hover:shadow-[0_18px_40px_-20px_color-mix(in_oklab,var(--accent)_65%,transparent)]"
                >
                  {b.badge ? (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-yellow px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-yellow-foreground uppercase">
                      {b.badge}
                    </span>
                  ) : null}
                  <div className="flex aspect-square items-center justify-center rounded bg-primary/5 p-3">
                    <img
                      src={getBatteryProductImage(b.part)}
                      alt={`${b.part} AGM battery`}
                      loading="lazy"
                      className="h-full w-full object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{b.part}</h3>
                  <div className="mt-4 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Zap className="h-4 w-4 text-accent" strokeWidth={1.8} /> {b.volts}V
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Plug className="h-4 w-4 text-accent" strokeWidth={1.8} /> {b.cap} Ah
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Scale className="h-4 w-4 text-accent" strokeWidth={1.8} /> {b.weight} lbs
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <a
                href="/find-your-battery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
              >
                View All Batteries <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINDER */}
      <section id="finder" className="bg-background py-20 lg:py-24">
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
                    Not sure which battery you need?
                  </h2>
                  <p className="mt-3 max-w-xl text-brand-foreground/85">
                    Answer 3 quick questions — application, voltage and physical envelope — and
                    we&apos;ll match you to the exact Chairman part number.
                  </p>
                </div>
                <a
                  href="/find-your-battery"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Start Battery Finder <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={facility}
              alt="Chairman battery manufacturing facility"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-md"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Built on Concorde Battery&apos;s aerospace heritage.
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-yellow" aria-hidden="true" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Chairman batteries come off the same lines that build certified aircraft starting
              batteries for commercial, military and business aviation. That means documented
              traceability, pure lead-calcium grids and PolyGuard® separator protection in every
              deep-cycle unit we ship — not a spec sheet borrowed from a contract factory.
            </p>
            <div className="mt-10 rounded-md bg-yellow/25 p-6 ring-1 ring-yellow/40">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                    <p className="mt-1 text-xs leading-snug font-medium text-primary/80">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
