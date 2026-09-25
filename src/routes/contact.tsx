import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowRight,
  Globe2,
  Phone,
  Printer,
  ShieldCheck,
} from "lucide-react";
import logo from "@/assets/chairman-logo.jpg.asset.json";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Chairman | Chairman Battery" },
      {
        name: "description",
        content:
          "Contact Chairman Battery for AGM deep-cycle battery inquiries. Email responses within 48–72 hours, or call Monday–Friday, 6am–5pm Pacific.",
      },
      { property: "og:title", content: "Contact Chairman | Chairman Battery" },
      {
        property: "og:description",
        content:
          "Get in touch with Chairman Battery for AGM deep-cycle battery inquiries, quotes and technical support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const COUNTRIES = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "Other",
];

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const PHONE = "+1 (626) 659-2000";
const FAX = "+1 (626) 659-2010";

interface FormState {
  lastName: string;
  firstName: string;
  company: string;
  businessType: string;
  state: string;
  country: string;
  phone: string;
  fax: string;
  email: string;
  confirmEmail: string;
  message: string;
  notRobot: boolean;
}

const initialForm: FormState = {
  lastName: "",
  firstName: "",
  company: "",
  businessType: "",
  state: "",
  country: "United States",
  phone: "",
  fax: "",
  email: "",
  confirmEmail: "",
  message: "",
  notRobot: false,
};

const formSchema = z
  .object({
    lastName: z.string().trim().min(1, "Last name is required").max(80),
    firstName: z.string().trim().min(1, "First name is required").max(80),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    businessType: z.string().trim().max(120).optional().or(z.literal("")),
    state: z.string().optional().or(z.literal("")),
    country: z.string(),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    fax: z.string().trim().max(40).optional().or(z.literal("")),
    email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
    confirmEmail: z.string().trim().min(1, "Please confirm your email"),
    message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long (max 2000 characters)"),
    notRobot: z.literal(true, { errorMap: () => ({ message: "Please verify you are not a robot" }) }),
  })
  .refine((d) => d.email === d.confirmEmail, {
    path: ["confirmEmail"],
    message: "Email addresses do not match",
  });

function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => {
      if (!e[field]) return e;
      const next = { ...e };
      delete next[field];
      return next;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = formSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const onReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* CONCORDE AFFILIATION */}
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
        <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/80 sm:text-lg">
            Chairman responds to all email inquiries within 48–72 hours. This form is for email
            contact — for an immediate response, call us Monday through Friday,
            6:00 a.m. to 5:00 p.m. Pacific Time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <a
              href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-foreground/90 transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" /> {PHONE}
            </a>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-foreground/90">
              <Printer className="h-4 w-4 text-accent" /> Fax: {FAX}
            </span>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(1,22,137,0.35)] sm:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <ShieldCheck className="mx-auto h-12 w-12 text-accent" strokeWidth={1.6} />
                <h2 className="mt-5 text-2xl font-bold text-primary">Thank you for reaching out</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your message has been received. A Chairman Battery specialist will reply to
                  <span className="font-medium text-primary"> {form.email}</span> within 48–72 hours.
                  For urgent matters, call <span className="font-medium text-primary">{PHONE}</span>.
                </p>
                <button
                  type="button"
                  onClick={onReset}
                  className="mt-8 inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Last Name" required error={errors["lastName"]} htmlFor="lastName">
                    <input
                      id="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className={inputClass(errors["lastName"])}
                      autoComplete="family-name"
                    />
                  </Field>
                  <Field label="First Name" required error={errors["firstName"]} htmlFor="firstName">
                    <input
                      id="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className={inputClass(errors["firstName"])}
                      autoComplete="given-name"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" error={errors["company"]} htmlFor="company">
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={inputClass(errors["company"])}
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Type of Business" error={errors["businessType"]} htmlFor="businessType">
                    <input
                      id="businessType"
                      type="text"
                      value={form.businessType}
                      onChange={(e) => update("businessType", e.target.value)}
                      className={inputClass(errors["businessType"])}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Country" error={errors["country"]} htmlFor="country">
                    <div className="relative">
                      <Globe2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <select
                        id="country"
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className={`${inputClass(errors["country"])} appearance-none pl-9`}
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </Field>
                  <Field
                    label="State"
                    error={errors["state"]}
                    htmlFor="state"
                    hint={form.country === "United States" ? undefined : "Relevant for U.S. inquiries"}
                  >
                    <select
                      id="state"
                      value={form.state}
                      onChange={(e) => update("state", e.target.value)}
                      disabled={form.country !== "United States"}
                      className={`${inputClass(errors["state"])} ${form.country !== "United States" ? "opacity-50" : ""}`}
                    >
                      <option value="">Select state</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" error={errors["phone"]} htmlFor="phone">
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass(errors["phone"])}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Fax" error={errors["fax"]} htmlFor="fax">
                    <input
                      id="fax"
                      type="tel"
                      value={form.fax}
                      onChange={(e) => update("fax", e.target.value)}
                      className={inputClass(errors["fax"])}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" required error={errors["email"]} htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass(errors["email"])}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Confirm Email" required error={errors["confirmEmail"]} htmlFor="confirmEmail">
                    <input
                      id="confirmEmail"
                      type="email"
                      value={form.confirmEmail}
                      onChange={(e) => update("confirmEmail", e.target.value)}
                      className={inputClass(errors["confirmEmail"])}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <Field label="Your Message" required error={errors["message"]} htmlFor="message">
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={inputClass(errors["message"])}
                  />
                </Field>

                {/* reCAPTCHA-style placeholder */}
                <div
                  className={`flex items-center gap-3 rounded-md border p-4 ${
                    errors["notRobot"] ? "border-destructive" : "border-border"
                  } bg-surface`}
                >
                  <input
                    id="notRobot"
                    type="checkbox"
                    checked={form.notRobot}
                    onChange={(e) => update("notRobot", e.target.checked)}
                    className="h-5 w-5 rounded border-border text-accent focus:ring-accent"
                  />
                  <label htmlFor="notRobot" className="text-sm font-medium text-primary">
                    I'm not a robot
                  </label>
                  <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <span>Protected by reCAPTCHA</span>
                  </div>
                </div>
                {errors["notRobot"] ? (
                  <p className="-mt-2 text-xs text-destructive">{errors["notRobot"]}</p>
                ) : null}

                <p className="text-xs text-muted-foreground">
                  <span className="text-accent">*</span> Required field.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Submit <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={onReset}
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function inputClass(error: string | undefined) {
  return `w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 ${
    error
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-accent"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean | undefined;
  hint?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-primary">
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

