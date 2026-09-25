import { createFileRoute } from "@tanstack/react-router";

import { ConcordeTopBar } from "@/components/ConcordeBar";
import { HeaderActions } from "@/components/HeaderActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chairman Battery" },
      {
        name: "description",
        content: "Learn about Chairman Battery and our commitment to aerospace-grade AGM deep-cycle power.",
      },
      { property: "og:title", content: "About Chairman Battery" },
      {
        property: "og:description",
        content: "Learn about Chairman Battery and our commitment to aerospace-grade AGM deep-cycle power.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ConcordeTopBar />
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <SiteNav />
          <HeaderActions />
        </div>
      </header>

      <main className="flex-1">
        <section className="relative bg-brand py-20 text-brand-foreground lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                About Us
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight lg:text-5xl">
                About Chairman Battery
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-brand-foreground/80">
                A premium AGM deep-cycle battery manufacturer built to aerospace standards.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="text-muted-foreground">Content coming soon.</p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
