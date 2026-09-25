import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";

import { ConcordeFooterCredit } from "@/components/ConcordeBar";
import { PulseLine } from "@/components/Reveal";
import { TECH_DOCS } from "@/lib/tech-docs";

const APPLICATION_LINKS = [
  { label: "Robotics & Automation", to: "/categories/robotics-automation" },
  { label: "Material Handling & Industrial", to: "/categories/material-handling-industrial" },
  { label: "Health Care & Mobility", to: "/categories/healthcare-mobility" },
  { label: "Utility Vehicles", to: "/categories/utility-vehicles" },
  { label: "Office & Backup Power (UPS)", to: "/categories/office-backup-power-ups" },
  { label: "Transportation & Leisure", to: "/categories/transportation-leisure" },
] as const;

function FooterCol({ title, items, hash }: { title: string; items: string[]; hash: string }) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <Link
              to="/"
              hash={hash}
              className="text-sm text-brand-foreground/80 transition-colors hover:text-accent"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDocsCol() {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">Technical Docs</p>
      <ul className="mt-4 space-y-2.5">
        {TECH_DOCS.map((doc) => (
          <li key={doc.href}>
            {doc.slug ? (
              <Link
                to="/docs/$slug"
                params={{ slug: doc.slug }}
                className="text-sm text-brand-foreground/80 transition-colors hover:text-accent"
              >
                {doc.label}
              </Link>
            ) : (
              <Link
                to="/transportation"
                className="text-sm text-brand-foreground/80 transition-colors hover:text-accent"
              >
                {doc.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">CHAIRMAN</p>
          <div className="my-3 text-accent" aria-hidden="true">
            <PulseLine className="h-8 w-40" />
          </div>
          <p className="text-sm text-brand-foreground/80">...the heart of your system®</p>
          <div className="mt-6 flex gap-4 text-accent">
            <Link to="/" hash="contact" aria-label="Email Chairman Battery">
              <Mail className="h-5 w-5" />
            </Link>
            <Link to="/" hash="contact" aria-label="Call Chairman Battery">
              <Phone className="h-5 w-5" />
            </Link>
            <Link to="/" hash="contact" aria-label="Chairman Battery on LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">Applications</p>
          <ul className="mt-4 space-y-2.5">
            {APPLICATION_LINKS.map((app) => (
              <li key={app.to}>
                <Link
                  to={app.to}
                  className="text-sm text-brand-foreground/80 transition-colors hover:text-accent"
                >
                  {app.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <FooterDocsCol />
        <div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-brand-foreground/80 transition-colors hover:text-accent"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-yellow bg-yellow px-5 py-2.5 text-sm font-semibold text-yellow-ink"
          >
            Contact Chairman <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-brand-foreground/15">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-brand-foreground/60 lg:px-8">
          © {new Date().getFullYear()} Chairman Battery. All rights reserved.
          <ConcordeFooterCredit />
        </div>
      </div>
    </footer>
  );
}