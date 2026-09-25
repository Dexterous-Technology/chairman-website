import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Download, FileText, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal, PulseLine } from "@/components/Reveal";
import { ConcordeTopBar, ConcordeFooterCredit } from "@/components/ConcordeBar";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { getTechDoc, TECH_DOC_PAGES } from "@/lib/tech-docs";
import logo from "@/assets/chairman-logo.jpg.asset.json";

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const doc = getTechDoc(params.slug);
    if (!doc) throw notFound();
    return doc;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.label.replace(" (PDF)", "")} | Chairman Battery`
      : "Technical Document | Chairman Battery";
    const description =
      loaderData?.description ??
      "Chairman Battery technical documentation for AGM deep cycle batteries.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: DocPage,
});

function DocPage() {
  const doc = Route.useLoaderData();
  const title = doc.label.replace(" (PDF)", "");

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
              <FileText className="h-3.5 w-3.5" /> Technical Document
            </p>
            <h1 className="font-display text-3xl font-bold underline decoration-accent decoration-2 underline-offset-8 sm:text-4xl">
              {title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* PDF VIEWER */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-foreground/70">{doc.description}</p>
            <a
              href={doc.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary/25 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent/10"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>
          <div className="overflow-hidden rounded-md border border-border bg-surface">
            <object
              data={doc.file}
              type="application/pdf"
              className="block w-full"
              style={{ height: "80vh" }}
              aria-label={title}
            >
              <iframe src={doc.file} title={title} className="block h-[80vh] w-full" />
            </object>
          </div>
        </div>
      </section>

      {/* OTHER DOCUMENTS */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-xl font-bold text-primary">More technical documents</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_DOC_PAGES.filter((d) => d.slug !== doc.slug).map((d) => (
              <li key={d.slug}>
                <a
                  href={d.href}
                  className="flex h-full items-start gap-3 rounded-md border border-border bg-card p-4 text-sm font-medium text-primary transition-colors hover:border-accent/50 hover:bg-accent/5"
                >
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">CHAIRMAN</p>
            <div className="my-3 text-accent" aria-hidden="true">
              <PulseLine className="h-8 w-40" />
            </div>
            <p className="text-sm text-brand-foreground/80">...the heart of your system&reg;</p>
            <div className="mt-6 flex gap-4 text-accent">
              <a href="/contact" aria-label="Email Chairman Battery">
                <Mail className="h-5 w-5" />
              </a>
              <a href="/contact" aria-label="Call Chairman Battery">
                <Phone className="h-5 w-5" />
              </a>
              <a href="/contact" aria-label="Chairman Battery on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="lg:text-right">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-yellow bg-yellow px-5 py-2.5 text-sm font-semibold text-yellow-ink"
            >
              Contact Chairman <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-brand-foreground/15">
          <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-brand-foreground/60 lg:px-8">
            © {new Date().getFullYear()} Chairman Battery. All rights reserved.
            <ConcordeFooterCredit />
          </div>
        </div>
      </footer>
    </div>
  );
}
