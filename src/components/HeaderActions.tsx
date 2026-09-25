import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";

import { TECH_DOCS } from "@/lib/tech-docs";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  const APPLICATIONS = [
    { label: "Robotics & Automation", to: "/categories/robotics-automation" },
    { label: "Material Handling & Industrial", to: "/categories/material-handling-industrial" },
    { label: "Transportation & Leisure", to: "/categories/transportation-leisure" },
    { label: "Health Care & Mobility", to: "/categories/healthcare-mobility" },
    { label: "Utility Vehicles", to: "/categories/utility-vehicles" },
    { label: "Office & Backup Power (UPS)", to: "/categories/office-backup-power-ups" },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls =
    "block rounded-md px-4 py-2.5 text-sm font-medium text-primary/85 transition-colors hover:bg-accent/10 hover:text-primary";

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-md border border-primary/30 p-2 text-primary transition-colors hover:border-accent hover:text-accent"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background shadow-[0_18px_40px_-20px_rgba(1,22,137,0.45)]">
          <nav className="mx-auto max-w-7xl px-5 py-3 lg:px-8">
            <button
              type="button"
              aria-expanded={appsOpen}
              onClick={() => setAppsOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm font-medium text-primary/85 transition-colors hover:bg-accent/10 hover:text-primary"
            >
              Applications
              <ChevronDown
                className={`h-4 w-4 transition-transform ${appsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {appsOpen ? (
              <ul className="mb-1 ml-4 border-l border-border pl-2">
                {APPLICATIONS.map((app) => (
                  <li key={app.to}>
                    <Link to={app.to} className={linkCls} onClick={() => setOpen(false)}>
                      {app.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <Link to="/specs" className={linkCls} onClick={() => setOpen(false)}>
              Deep Cycle Battery Specifications
            </Link>
            <button
              type="button"
              aria-expanded={docsOpen}
              onClick={() => setDocsOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm font-medium text-primary/85 transition-colors hover:bg-accent/10 hover:text-primary"
            >
              Technical Docs
              <ChevronDown
                className={`h-4 w-4 transition-transform ${docsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {docsOpen ? (
              <ul className="mb-1 ml-4 border-l border-border pl-2">
                {TECH_DOCS.map((doc) => (
                  <li key={doc.label}>
                    {doc.slug ? (
                      <Link
                        to="/docs/$slug"
                        params={{ slug: doc.slug }}
                        className={linkCls}
                        onClick={() => setOpen(false)}
                      >
                        {doc.label}
                      </Link>
                    ) : (
                      <Link to="/transportation" className={linkCls} onClick={() => setOpen(false)}>
                        {doc.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
            <Link to="/agm-12105tg" className={linkCls} onClick={() => setOpen(false)}>
              AGM-12105TG
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      <ThemeToggle />
      <Link
        to="/find-your-battery"
       
        aria-label="Find Your Battery"
        className="group inline-flex items-center justify-center rounded-md border border-primary/30 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[10rem] group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-[10rem] group-focus-visible:opacity-100">
          Find your battery
        </span>
      </Link>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-md border border-yellow bg-yellow px-4 py-2 text-sm font-semibold text-yellow-ink transition-shadow hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--yellow)_40%,transparent)]"
      >
        Contact
      </Link>
      <MobileMenu />
    </div>
  );
}
