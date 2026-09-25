import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Bot,
  Package,
  Plug,
  Repeat,
  Scale,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { getBatteryProductImage } from "@/lib/battery-images";
import { useRandomBatteries } from "@/lib/random-batteries";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/categories/robotics-automation")({
  head: () => ({
    meta: [
      {
        title: "Robotics & Automation Batteries | Chairman Battery",
      },
      {
        name: "description",
        content:
          "Aerospace-grade AGM deep-cycle batteries for AMRs, AGVs and service robots. Continuous-duty cycling, fast opportunity charging and vibration resistance for 24/7 robotic operations.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Robotics & Automation Batteries | Chairman Battery",
      },
      {
        property: "og:description",
        content:
          "Continuous-duty AGM power for AMRs, AGVs and service robots — engineered for 24/7 robotic operations.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoboticsAutomationPage,
});


const BENEFITS = [
  {
    icon: Repeat,
    title: "Continuous-Duty Cycling",
    desc: "Engineered for the deep, repeated discharge cycles AMRs and AGVs pull every shift — without premature capacity fade.",
  },
  {
    icon: BatteryCharging,
    title: "Fast Opportunity Charging",
    desc: "High charge acceptance lets robots top up during breaks and docking stops instead of sitting out full recharge windows.",
  },
  {
    icon: Package,
    title: "Compact Form Factor",
    desc: "High energy density in standard footprints, so packs fit tight chassis space without redesigning the robot.",
  },
  {
    icon: ShieldCheck,
    title: "Vibration & Shock Resistance",
    desc: "MIL-PRF-8565-qualified construction shrugs off dock plates, thresholds and warehouse floors that kill ordinary AGM cells.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We swapped our AMR fleet to Chairman and unplanned battery swaps dropped to near zero. The opportunity-charging behavior alone bought us an extra shift of uptime.",
    name: "Jordan Meyer",
    title: "Fleet Operations Lead · AMR Fleet Operator",
  },
  {
    quote:
      "As an integrator, I need a battery I can spec once and never think about again. Chairman's cycle life and documentation make that easy.",
    name: "Priya Raman",
    title: "Senior Systems Engineer · Automation Integrator",
  },
  {
    quote:
      "Our service robots run 22 hours a day in a hospital. Two years in, the Chairman packs are still holding capacity like month one.",
    name: "Daniel Okafor",
    title: "Robotics Maintenance Manager · Healthcare Robotics OEM",
  },
];

function RoboticsAutomationPage() {
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
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <Bot className="h-3.5 w-3.5" /> Robotics & Automation
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl">
              Power for Robots That Never Get a Day Off.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
              Chairman AGM deep-cycle batteries keep AMRs, AGVs and service robots cycling through
              24/7 operations — with the reliability your automation roadmap depends on.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#batteries"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
              >
                View Batteries <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact-cta"
                className="inline-flex items-center justify-center rounded-md border border-brand-foreground/50 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Talk to an Engineer
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BATTERY LISTING */}
      <section id="batteries" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Matched Part Numbers
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Batteries offered by Chairman
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Proven in AMR fleets, AGV routes and continuous-duty service robots.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((b, i) => (
              <Reveal key={b.part} delay={i * 50}>
                <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-card p-5 hover:shadow-[0_18px_40px_-20px_color-mix(in_oklab,var(--accent)_65%,transparent)]">
                  {b.recommended ? (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-yellow px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-yellow-ink uppercase">
                      Best Seller
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
                  <div className="mt-3 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Zap className="h-4 w-4 text-accent" strokeWidth={1.8} /> {b.volts}V
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Plug className="h-4 w-4 text-accent" strokeWidth={1.8} /> {b.cap20} Ah
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Scale className="h-4 w-4 text-accent" strokeWidth={1.8} /> {b.weight} lbs
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    Sealed AGM deep-cycle battery — {b.cap100} minutes at 25 amps, {b.weight} lbs.
                  </p>
                  <Link
                    to="/products/$part"
                    params={{ part: b.part }}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent"
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

      {/* WHY IT HELPS */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Why It Helps This Industry
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Built for the Duty Cycle Robots Actually Run
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="card-lift h-full rounded-md border border-border bg-card p-7">
                  <b.icon className="h-8 w-8 text-accent" strokeWidth={1.6} />
                  <h3 className="mt-5 text-lg font-semibold text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              In the Field
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Trusted by Robotics & Automation Teams
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="card-lift flex h-full flex-col rounded-md border border-border bg-card p-7">
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary">{t.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact-cta" className="bg-surface py-20 lg:py-24">
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
                    Need help matching a battery to your robot?
                  </h2>
                  <p className="mt-3 max-w-xl text-brand-foreground/85">
                    Tell us your duty cycle, chassis envelope and charging window — our engineers
                    will match the exact Chairman part number.
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
