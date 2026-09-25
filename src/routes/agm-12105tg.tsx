import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Battery, FileText } from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { PdfModal } from "@/components/PdfModal";
import { SiteFooter } from "@/components/SiteFooter";
import { BATTERY_PRODUCT_IMAGES } from "@/lib/battery-images";
import logo from "@/assets/chairman-logo.jpg.asset.json";
import envelopeDrawing from "@/assets/AGM-12105TG_Envelope_Drawing.pdf.asset.json";
import dataSheet from "@/assets/AGM-12105TG_Data_Sheet.pdf.asset.json";

const GYLLING_HOME = "https://gylling.no/";
const GYLLING_PRODUCT = "https://gylling.no/batterier/blybatterier/chairman/772108";

const PAGE_DOCUMENTS = [
  { title: "AGM-12105TG Envelope Drawing", url: envelopeDrawing.url },
  { title: "AGM-12105TG Data Sheet", url: dataSheet.url },
];

export const Route = createFileRoute("/agm-12105tg")({
  head: () => ({
    meta: [
      { title: "AGM-12105TG Replacement Batteries | Chairman Battery" },
      {
        name: "description",
        content:
          "Chairman AGM-12105TG 12V 105AH replacement batteries for Autostore® R5® Robots, available direct from Gylling Teknikk. Maintenance free, hazmat exempt, 100% recyclable.",
      },
      { property: "og:title", content: "AGM-12105TG Replacement Batteries | Chairman Battery" },
      {
        property: "og:description",
        content:
          "Chairman AGM-12105TG 12V 105AH replacement batteries for Autostore® R5® Robots — buy directly from Gylling Teknikk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Agm12105tgPage,
});

const BENEFITS = [
  "Lower price directly from the Authorized Chairman Distributor",
  "Form, fit & function replacement",
  "The original Autostore® R5® Robot Battery built specifically for this application",
  "Hazmat Exempt shipping by land, sea, or air",
  "Chairman Batteries are 100% recyclable – the green solution",
];

function Agm12105tgPage() {
  const [openDoc, setOpenDoc] = useState<(typeof PAGE_DOCUMENTS)[number] | null>(null);

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
          <SiteNav active="agm-12105tg" />
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
        <div className="relative mx-auto max-w-7xl px-5 py-14 text-center lg:px-8 lg:py-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-accent/40 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              <Battery className="h-3.5 w-3.5" /> Chairman Series
            </p>
            <h1 className="font-display text-3xl font-bold underline decoration-accent decoration-2 underline-offset-8 sm:text-4xl">
              AGM-12105TG REPLACEMENT BATTERIES NOW AVAILABLE DIRECT!
            </h1>
          </Reveal>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="grid overflow-hidden rounded-lg border border-border md:grid-cols-2">
              <div className="flex items-center justify-center bg-surface p-10">
                <img
                  src={BATTERY_PRODUCT_IMAGES[2]}
                  alt="Chairman AGM-12105TG 12V 105AH batteries"
                  className="max-h-72 w-auto object-contain"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex items-center bg-yellow p-10">
                <h2 className="font-display text-2xl font-bold leading-snug text-yellow-ink sm:text-3xl">
                  Chairman AGM-12105TG 12V 105AH for Autostore&reg; R5&reg; Robots, buy directly
                  from Gylling
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY COPY */}
      <section className="bg-background pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl space-y-6 px-5 lg:px-8">
          <Reveal>
            <p className="leading-relaxed">
              Chairman&reg; AGM-12105TG batteries are exclusively distributed by{" "}
              <a
                href={GYLLING_HOME}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent underline underline-offset-2"
              >
                Gylling Teknikk
              </a>
              , experts in battery supply and distribution. Chairman AGM-12105TG installed on the
              Autostore&reg; R5&reg; Series Robots are maintenance free with no threat of thermal
              runaway. Selecting Chairman ensures a long life of trouble free operation.
            </p>
            <p className="mt-6 leading-relaxed">
              Replacements purchased direct from Gylling Teknikk benefit your system:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              {BENEFITS.map((b) => (
                <li key={b} className="font-medium text-primary underline underline-offset-2">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed">
              Built with AGM Deep Cycle technology the Chairman&reg; battery is proven on
              Autostore&reg; R5&reg; robots for its value, reliability, craftsmanship, and superior
              life. Chairman Batteries are the heart of your system&reg; for the R5&reg; Series
              Robots! Purchase replacements from Gylling Teknikk and experience world class service
              and support.
            </p>
            <div className="mt-8 space-y-2 text-center">
              <a
                href={GYLLING_PRODUCT}
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-accent underline underline-offset-2"
              >
                Request a Quote
              </a>
              <a
                href={GYLLING_PRODUCT}
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-accent underline underline-offset-2"
              >
                AGM-12105TG direct from Gylling Teknikk
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONCORDE HERITAGE */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="leading-relaxed">
              Concorde&reg; Battery Corporation builds the sealed lead acid Chairman AGM-12105TG in
              the USA. Since 1977, Concorde has been selected by militaries worldwide and is
              trusted as original equipment batteries to airframe manufacturers such as Cessna
              &amp; Bell Helicopter (Textron), Gulfstream, Airbus, Dassault and many more. Concorde
              Batteries are designed and manufactured under strict aerospace requirements. These
              same standards are built into the Chairman line of sealed lead acid batteries.
            </p>
            <div className="mt-8 space-y-2 text-center">
              {PAGE_DOCUMENTS.map((doc) => (
                <button
                  key={doc.title}
                  type="button"
                  onClick={() => setOpenDoc(doc)}
                  className="mx-auto flex items-center justify-center gap-2 font-semibold text-accent underline underline-offset-2"
                >
                  <FileText className="h-4 w-4" /> {doc.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT IMAGES */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
          {BATTERY_PRODUCT_IMAGES.map((image, i) => (
            <Reveal key={image} delay={i * 100}>
              <img
                src={image}
                alt={`Chairman AGM-12105TG battery view ${i + 1}`}
                className="aspect-square w-full rounded-lg border border-border object-contain p-4"
                width={600}
                height={600}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SPEC TABLE */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="overflow-x-auto rounded-md border border-border bg-card">
              <table className="w-full min-w-[900px] text-center text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary/5 font-semibold text-primary">
                    <th rowSpan={2} className="border-r border-border px-4 py-3">
                      Battery Number
                    </th>
                    <th rowSpan={2} className="border-r border-border px-4 py-3">
                      Volts
                    </th>
                    <th colSpan={6} className="border-r border-b border-border px-4 py-2">
                      Overall Dimensions
                    </th>
                    <th colSpan={2} className="border-r border-b border-border px-4 py-2">
                      Unit Wt
                    </th>
                    <th rowSpan={2} className="border-r border-border px-4 py-3">
                      Nominal Capacity 1
                    </th>
                    <th rowSpan={2} className="px-4 py-3">
                      Nominal Capacity 2
                    </th>
                  </tr>
                  <tr className="border-b border-border bg-primary/5 text-xs font-semibold text-primary">
                    <th className="border-r border-border px-3 py-2">L in</th>
                    <th className="border-r border-border px-3 py-2">L mm</th>
                    <th className="border-r border-border px-3 py-2">W in</th>
                    <th className="border-r border-border px-3 py-2">W mm</th>
                    <th className="border-r border-border px-3 py-2">H in</th>
                    <th className="border-r border-border px-3 py-2">H mm</th>
                    <th className="border-r border-border px-3 py-2">Lbs</th>
                    <th className="border-r border-border px-3 py-2">Kgs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-muted-foreground">
                    <td className="border-r border-border px-4 py-4 font-bold text-primary">
                      AGM-12105TG
                    </td>
                    <td className="border-r border-border px-4 py-4">12</td>
                    <td className="border-r border-border px-3 py-4">12.86</td>
                    <td className="border-r border-border px-3 py-4">326.8</td>
                    <td className="border-r border-border px-3 py-4">6.58</td>
                    <td className="border-r border-border px-3 py-4">167.2</td>
                    <td className="border-r border-border px-3 py-4">8.16</td>
                    <td className="border-r border-border px-3 py-4">207.3</td>
                    <td className="border-r border-border px-3 py-4">64</td>
                    <td className="border-r border-border px-3 py-4">29</td>
                    <td className="border-r border-border px-4 py-4">105</td>
                    <td className="px-4 py-4">195</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-sm font-semibold">
              The data/information contained herein has been reviewed and approved for general
              release on the basis that this document contains no export-controlled information.
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      {openDoc && (
        <PdfModal title={openDoc.title} url={openDoc.url} onClose={() => setOpenDoc(null)} />
      )}
    </div>
  );
}
