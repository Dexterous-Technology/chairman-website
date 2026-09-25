import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck } from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/transportation")({
  head: () => ({
    meta: [
      { title: "Battery Transportation Information | Chairman Battery" },
      {
        name: "description",
        content:
          "Chairman sealed lead acid AGM battery transportation information: non-spillable classification under DOT 49 CFR 173.159a, IATA Special Provisions A48/A67/A164/A183 and IMDG Special Provision 238.",
      },
      { property: "og:title", content: "Battery Transportation Information | Chairman Battery" },
      {
        property: "og:description",
        content:
          "Chairman AGM batteries are non-spillable and not restricted for shipment by air, sea or ground under DOT, IATA and IMDG regulations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TransportationPage,
});

const NONSPILLABLE_POINTS = [
  "Batteries can be considered as non-spillable provided they are capable of withstanding a vibration test and pressure differential test (173.159(f)).",
  "Non-spillable batteries are subject to incident reporting requirements (173.159a(b)).",
];

const PACKAGING_CONDITIONS = [
  "Non-spillable batteries must be securely packed in strong outer packagings and meet the requirements of §173.159(a).",
  'The battery and outer packaging must be plainly and durably marked "NON-SPILLABLE" or "NON-SPILLABLE BATTERY."',
];

const EXCEPTION_CONDITIONS = [
  "At a temperature of 55 °C (131 °F), the battery must not contain any unabsorbed free-flowing liquid, and must be designed so that electrolyte will not flow from a ruptured or cracked case; and",
  "For transport by aircraft, when contained in a battery-powered device, equipment or vehicle must be prepared and packaged for transport in a manner to prevent unintentional activation in conformance with §173.159(b)(2) of this Subpart.",
];

function TransportationPage() {
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
          <SiteNav />
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
              <Truck className="h-3.5 w-3.5" /> Technical Document
            </p>
            <h1 className="font-display text-3xl font-bold underline decoration-accent decoration-2 underline-offset-8 sm:text-4xl">
              CHAIRMAN&reg; BATTERY TRANSPORTATION INFORMATION
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm leading-relaxed text-foreground sm:text-base">
              The products provided by Concorde&reg; Battery Corporation may be subject to export
              restrictions imposed by the United States. Export Licenses may be required. Customer
              agrees to comply with all U.S. Government laws and regulations as they relate to the
              export, transfer and re-export of goods. Customer shall indemnify and hold
              Concorde&reg; Battery Corporation harmless for any loss, damage, or expense, including
              lost profits, attorney&apos;s fees and court costs, incurred for or as a result of any
              failure or alleged failure of customer to comply with such laws and regulations.
            </p>
            <p className="mt-4 rounded-md border border-accent/30 bg-accent/10 px-5 py-4 text-sm leading-relaxed text-foreground">
              This document is provided for informational purposes only and regulations are subject
              to change without notice. Please reference the current applicable regulations to
              ensure compliance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEALED LEAD ACID TRANSPORTATION */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary underline decoration-yellow decoration-4 underline-offset-8">
              Sealed Lead Acid Battery Transportation Information
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground sm:text-base">
              <p>
                Concorde&reg; Battery Corporation&apos;s Chairman&reg; series batteries are
                manufactured utilizing Absorbed Glass Mat (AGM) technology. The batteries are sealed
                with the electrolyte absorbed in the glass mat separator material.
              </p>
              <p>
                The Department of Transportation (DOT) regulatory requirements affecting the
                packaging and transportation of batteries containing acid or alkali are contained in
                the Code of Federal Regulations, 49 CFR Section 173.159.
              </p>
              <p>
                The Chairman&reg; series batteries are non-spillable wet, electric storage
                batteries. When shipped in the original factory packaging, new batteries are
                excepted from the requirements of the DOT&apos;s hazardous materials regulations
                because they meet the requirements of 49 CFR 173.159a.
              </p>
              <p className="font-semibold text-primary">
                A brief summary of the requirements to classify a battery as non-spillable follows:
              </p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-foreground sm:text-base">
              {NONSPILLABLE_POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 overflow-hidden rounded-md border border-border bg-card">
              <div className="border-b border-border bg-primary/5 px-5 py-3">
                <p className="text-sm font-semibold text-primary">
                  Non-spillable batteries are excepted from the packaging requirements of
                  &sect;173.159 under the following conditions: (173.159a(c))
                </p>
              </div>
              <ol className="list-decimal space-y-2 px-5 py-4 pl-10 text-sm leading-relaxed text-muted-foreground">
                {PACKAGING_CONDITIONS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <div className="border-b border-t border-border bg-primary/5 px-5 py-3">
                <p className="text-sm font-semibold text-primary">
                  Non-spillable batteries are excepted from all other requirements of this
                  subchapter when offered for transportation and transported in accordance with
                  paragraph (c) of this section and the following: (173.159a(d))
                </p>
              </div>
              <ol className="list-decimal space-y-2 px-5 py-4 pl-10 text-sm leading-relaxed text-muted-foreground">
                {EXCEPTION_CONDITIONS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground sm:text-base">
              <p>
                Chairman&reg; batteries are packed in such a way to prevent short circuits, securely
                packaged, marked &quot;NON-SPILLABLE&quot; or &quot;NON-SPILLABLE BATTERY&quot;, and
                have been tested by an independent laboratory in accordance with the DOT
                regulations. Therefore, they do not require performance oriented packaging,
                hazardous materials markings (eg., UN number), or a hazardous materials label.
              </p>
              <p>
                Chairman&reg; batteries listed above are also excepted from the IATA Dangerous Goods
                Regulations pursuant to Special provisions A48, A67, A164, A183 and Packing
                Instruction 872. The words &quot;Not Restricted&quot; and the Special Provision
                numbers must be included in the description of the substance on the Air Waybill as
                required by 8.2.6, when an Air Waybill is issued.
              </p>
              <p>
                Transportation of hazardous materials by sea is governed by the IMO&apos;s
                International Maritime Dangerous Goods (IMDG) Code. Under the IMDG Code, in order to
                be classified as a non-spillable lead acid battery and excepted from sea
                transportation regulations, the battery must meet the requirements of Special
                Provision 238.1 (which contains the Vibration and Pressure Differential Tests
                referenced above) AND the requirements of Special Provision 238.2 noted below.
              </p>
            </div>
            <blockquote className="mt-6 rounded-md border-l-4 border-accent bg-card px-5 py-4 text-sm leading-relaxed text-foreground shadow-[0_10px_30px_-20px_rgba(1,22,137,0.45)] sm:text-base">
              <span className="font-semibold text-primary">
                IMDG Code Special Provision 238.2 —
              </span>{" "}
              Non-spillable batteries are not subject to the provisions of this [IMDG] Code if, at a
              temperature of 55&deg; C, the electrolyte will not flow from a ruptured or cracked
              case and there is no free liquid to flow and if, when packaged for transport, the
              terminals are protected from short circuit. Chairman&reg; batteries are excepted from
              IMDG regulations pursuant to the requirements above.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* COMPLIANCE NOTICE */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary underline decoration-yellow decoration-4 underline-offset-8">
              Compliance Notice
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-foreground sm:text-base">
              This notice is to clarify to shippers and transporters that Chairman&reg; batteries
              are packaged and marked in accordance to 49 CFR 173.159a and are determined to be in
              compliance with DOT HMR49 Non-Hazardous Materials, the International Air
              Transportation Association (IATA), Special Provisions S.P. A48, A67, A164, A183 &amp;
              Packaging Instruction 872 and IMDG S.P. 238.1 &amp; 238.2. Therefore, these batteries
              are not restricted for shipment by air, sea or ground and are exempted from the
              hazardous material category. Please ensure that you follow the requirements of DOT,
              IATA and IMDG to ensure these exceptions remain applicable.
            </p>
            <p className="mt-6 text-sm font-semibold text-muted-foreground">
              The data/information contained herein has been reviewed and approved for general
              release on the basis that this document contains no export-controlled information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background pb-16">
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
                    Questions about shipping Chairman batteries?
                  </h2>
                  <p className="mt-3 max-w-xl text-brand-foreground/85">
                    Our team can confirm packaging, marking and documentation for your shipment.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Contact Chairman <ArrowRight className="h-4 w-4" />
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
