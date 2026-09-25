import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryMedium,
  CheckCircle2,
  Clock3,
  FileText,
  Ruler,
  Scale,
  Zap,
} from "lucide-react";

import { Reveal, PulseLine } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteFooter } from "@/components/SiteFooter";
import { PdfModal } from "@/components/PdfModal";
import { Button } from "@/components/ui/button";
import { BATTERY_PRODUCT_IMAGES } from "@/lib/battery-images";
import { BATTERIES } from "@/lib/catalog";
import { getOutlineDrawing } from "@/lib/outline-drawings";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/products/$part")({
  head: ({ params }) => {
    const part = params.part;
    const title = `${part} | Chairman Battery`;
    const description = `Product details for the Chairman ${part} sealed AGM deep-cycle battery.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { part } = Route.useParams();
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [drawingOpen, setDrawingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const battery = BATTERIES.find((item) => item.part.toLowerCase() === part.toLowerCase());
  const drawingUrl = battery ? getOutlineDrawing(battery.part) : undefined;

  const millimetres = (inches: number) => (inches * 25.4).toFixed(1);
  const kilograms = (pounds: number) => (pounds * 0.45359237).toFixed(1);

  const specifications = battery
    ? [
        { label: "Part number", value: battery.part },
        { label: "Voltage", value: `${battery.volts} V` },
        { label: "Length", value: `${battery.l} in / ${millimetres(battery.l)} mm` },
        { label: "Width", value: `${battery.w} in / ${millimetres(battery.w)} mm` },
        { label: "Height", value: `${battery.h} in / ${millimetres(battery.h)} mm` },
        { label: "Unit weight", value: `${battery.weight} lb / ${kilograms(battery.weight)} kg` },
        { label: "Nominal capacity", value: `${battery.cap20} Ah at 20-hour rate` },
        { label: "Runtime at 25A", value: `${battery.cap100} minutes` },
      ]
    : [];

  const indicators = battery
    ? [
        battery.inStock ? "In stock" : null,
        battery.certified ? "Certified" : null,
        battery.recommended ? "Recommended" : null,
        battery.chairs ? "Wheelchair & mobility suitable" : null,
      ].filter((indicator): indicator is string => Boolean(indicator))
    : [];

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

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-8 text-accent/40"
          aria-hidden="true"
        >
          <PulseLine className="h-20 w-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {battery ? "Chairman AGM Deep-Cycle Battery" : "Product"}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] font-bold sm:text-5xl">
              {battery?.part ?? part}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/80">
              {battery
                ? `${battery.volts}V sealed AGM deep-cycle battery delivering ${battery.cap20} Ah at the 20-hour rate.`
                : "We couldn't find this part number in the Chairman catalog."}
            </p>
          </Reveal>
        </div>
      </section>

      {battery ? (
        <>
          <section className="bg-background py-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:px-8">
              <Reveal>
                <div className="overflow-hidden rounded-md border border-border bg-card">
                  <div className="flex aspect-square items-center justify-center bg-primary/5 p-6 sm:p-10">
                    <img
                      src={BATTERY_PRODUCT_IMAGES[activeImage]}
                      alt={`${battery.part} Chairman AGM battery view ${activeImage + 1}`}
                      className="h-full w-full object-contain"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3" aria-label="Product image gallery">
                  {BATTERY_PRODUCT_IMAGES.map((image, index) => (
                    <Button
                      key={image}
                      type="button"
                      variant="outline"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show battery view ${index + 1}`}
                      aria-pressed={activeImage === index}
                      className={`h-auto aspect-square overflow-hidden p-2 ${
                        activeImage === index ? "border-accent ring-2 ring-accent/30" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                        width={220}
                        height={220}
                      />
                    </Button>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Representative Chairman battery images. Terminal configuration and proportions may vary by part number.
                </p>
              </Reveal>

              <Reveal delay={80}>
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Product overview
                </p>
                <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{battery.part}</h2>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  A sealed, maintenance-free AGM deep-cycle battery built for dependable cycling,
                  stable power delivery and demanding commercial applications.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
                  {[
                    { icon: Zap, label: "Voltage", value: `${battery.volts} V` },
                    { icon: BatteryMedium, label: "20-hour capacity", value: `${battery.cap20} Ah` },
                    { icon: Clock3, label: "Runtime at 25A", value: `${battery.cap100} min` },
                    { icon: Scale, label: "Unit weight", value: `${battery.weight} lb` },
                  ].map((item) => (
                    <div key={item.label} className="bg-card p-5 sm:p-6">
                      <item.icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                      <p className="mt-4 text-xs font-semibold text-muted-foreground uppercase">{item.label}</p>
                      <p className="mt-1 font-display text-xl font-bold text-primary">{item.value}</p>
                    </div>
                  ))}
                </div>

                {indicators.length > 0 ? (
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                    {indicators.map((indicator) => (
                      <span key={indicator} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <CheckCircle2 className="h-4 w-4 text-accent" /> {indicator}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {drawingUrl ? (
                    <button
                      type="button"
                      onClick={() => setDrawingOpen(true)}
                      className="inline-flex items-center gap-2 rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink transition-transform hover:-translate-y-0.5"
                    >
                      <FileText className="h-4 w-4" /> See Outline Drawing
                    </button>
                  ) : null}
                  {battery.part === "AGM-12105TG" ? (
                    <Link
                      to="/agm-12105tg"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      AutoStore® R5® replacement details <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="bg-surface py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
              <Reveal>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Technical data</p>
                    <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Product specifications</h2>
                  </div>
                  <Ruler className="hidden h-9 w-9 text-accent sm:block" strokeWidth={1.5} />
                </div>
                <dl className="mt-10 overflow-hidden rounded-md border border-border bg-card sm:grid sm:grid-cols-2">
                  {specifications.map((specification, index) => (
                    <div
                      key={specification.label}
                      className={`flex items-center justify-between gap-6 border-border px-5 py-4 sm:px-6 ${
                        index < specifications.length - 2 ? "border-b" : ""
                      } ${index % 2 === 0 ? "sm:border-r" : ""}`}
                    >
                      <dt className="text-sm text-muted-foreground">{specification.label}</dt>
                      <dd className="text-right text-sm font-semibold text-primary">{specification.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Metric dimensions and weights are calculated from the catalogue values. Product images are representative.
                </p>
              </Reveal>
            </div>
          </section>
        </>
      ) : (
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <Reveal>
              <BatteryMedium className="mx-auto h-10 w-10 text-accent" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl font-bold text-primary">Product not found</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                This part number is not in the current Chairman battery catalogue.
              </p>
              <Link
                to="/find-your-battery"
                className="mt-7 inline-flex items-center justify-center rounded-md border border-yellow bg-yellow px-6 py-3 text-sm font-semibold text-yellow-ink"
              >
                Browse all batteries
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <SiteFooter />

      {battery && drawingUrl && drawingOpen ? (
        <PdfModal
          title={`${battery.part} Outline Drawing`}
          url={drawingUrl}
          onClose={() => setDrawingOpen(false)}
        />
      ) : null}
    </div>
  );
}
