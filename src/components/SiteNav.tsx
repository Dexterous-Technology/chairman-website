import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { TECH_DOCS } from "@/lib/tech-docs";

const APPLICATIONS = [
  { label: "Robotics & Automation", to: "/categories/robotics-automation" },
  { label: "Material Handling & Industrial", to: "/categories/material-handling-industrial" },
  { label: "Transportation & Leisure", to: "/categories/transportation-leisure" },
  { label: "Health Care & Mobility", to: "/categories/healthcare-mobility" },
  { label: "Utility Vehicles", to: "/categories/utility-vehicles" },
  { label: "Office & Backup Power (UPS)", to: "/categories/office-backup-power-ups" },
] as const;

const LINK_BASE =
  "text-sm font-medium whitespace-nowrap text-primary/85 transition-colors hover:text-primary";
const LINK_ACTIVE =
  "relative text-sm font-bold whitespace-nowrap text-primary transition-colors hover:text-primary";

export function SiteNav({ active }: { active?: "specs" | "agm-12105tg" }) {
  return (
    <nav className="hidden items-center gap-6 xl:flex">
      <div className="group relative">
        <button type="button" className={`${LINK_BASE} inline-flex items-center gap-1`}>
          Applications <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
          <ul className="rounded-md border border-border bg-card p-2 shadow-[0_18px_40px_-20px_rgba(1,22,137,0.45)]">
            {APPLICATIONS.map((app) => (
              <li key={app.to}>
                <Link
                  to={app.to}
                  className="block rounded px-3 py-2 text-sm font-medium text-primary/85 transition-colors hover:bg-accent/10 hover:text-primary"
                >
                  {app.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/specs" className={active === "specs" ? LINK_ACTIVE : LINK_BASE}>
        Deep Cycle Battery Specifications
        {active === "specs" ? (
          <span className="absolute -bottom-[14px] left-0 right-0 h-0.5 rounded-full bg-accent" />
        ) : null}
      </Link>
      <div className="group relative">
        <button type="button" className={`${LINK_BASE} inline-flex items-center gap-1`}>
          Technical Docs <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <div className="invisible absolute left-1/2 top-full z-50 w-96 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
          <ul className="rounded-md border border-border bg-card p-2 shadow-[0_18px_40px_-20px_rgba(1,22,137,0.45)]">
            {TECH_DOCS.map((doc) => (
              <li key={doc.label}>
                {doc.slug ? (
                  <Link
                    to="/docs/$slug"
                    params={{ slug: doc.slug }}
                    className="block rounded px-3 py-2 text-sm font-medium text-primary/85 transition-colors hover:bg-accent/10 hover:text-primary"
                  >
                    {doc.label}
                  </Link>
                ) : (
                  <Link
                    to="/transportation"
                    className="block rounded px-3 py-2 text-sm font-medium text-primary/85 transition-colors hover:bg-accent/10 hover:text-primary"
                  >
                    {doc.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        to="/agm-12105tg"
        className={active === "agm-12105tg" ? LINK_ACTIVE : LINK_BASE}
      >
        AGM-12105TG
        {active === "agm-12105tg" ? (
          <span className="absolute -bottom-[14px] left-0 right-0 h-0.5 rounded-full bg-accent" />
        ) : null}
      </Link>
    </nav>
  );
}
